import React, { useState, useEffect } from 'react';
import CarList from './components/CarList/CarList';
import CarForm from './components/CarForm/CarForm';
import * as api from './services/api';

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const teamId = 4;

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      setLoading(true);
      const response = await api.getAllCars(teamId);
      // Extract the `data_json` for each car and store it
      const cars = response.response.map(car => ({
        id: car.id,
        ...car.data_json
      }));
      setCars(cars);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setCars([]);
    } finally {
      setLoading(false);
    }
  };

  const createCar = async (newCar) => {
    try {
      const response = await api.createCar(teamId, newCar);
      if (response) {
        // Fetch updated list of cars after adding
        fetchCars();
      }
    } catch (error) {
      console.error("Error creating car:", error);
    }
  };

  const updateCar = async (id, updatedCar) => {
    try {
      await api.updateCar(teamId, id, updatedCar);
      // Fetch updated list of cars after editing
      fetchCars();
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  const deleteCar = async (id) => {
    try {
      await api.deleteCar(teamId, id);
      // Fetch updated list of cars after deleting
      fetchCars();
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };


  return (
    <div className="App">
      <CarForm onCreateCar={createCar} />
      {loading ? (
        <p>Loading cars...</p>
      ) : (
        <CarList cars={cars} onDeleteCar={deleteCar} onUpdateCar={updateCar} />
      )}
    </div>
  );
}

export default App;
