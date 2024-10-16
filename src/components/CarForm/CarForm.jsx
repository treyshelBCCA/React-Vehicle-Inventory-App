import { useState } from 'react';

function CarForm({ onCreateCar }) {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateCar({ make, model, color });
    setMake('');
    setModel('');
    setColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        placeholder="Make"
        required
      />
      <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Model"
        required
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Color"
        required
      />
      <button type="submit">Add Car</button>
    </form>
  );
}

export default CarForm;
