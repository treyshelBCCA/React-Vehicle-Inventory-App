import React from 'react';
import CarDetails from '../CarDetails/CarDetails';

function CarList({ cars, onDeleteCar, onUpdateCar }) {
    if (!Array.isArray(cars) || cars.length === 0) {
      return <p>No cars available. Please add a new car.</p>;
    }
  
    return (
      <div className="car-list">
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            car={car}
            onDelete={() => onDeleteCar(car.id)}
            onUpdate={onUpdateCar}
            onCreate={onCreateCar}
          />
        ))}
      </div>
    );
}

export default CarList;
