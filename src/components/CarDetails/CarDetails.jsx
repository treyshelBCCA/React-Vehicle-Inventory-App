import React, { useState } from 'react';

function CarDetails({ car, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [make, setMake] = useState(car.make);
    const [model, setModel] = useState(car.model);
    const [color, setColor] = useState(car.color);
  
    const handleUpdate = () => {
      onUpdate(car.id, { make, model, color });
      setIsEditing(false);
    };
  
    return (
      <div className="car-details">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <div>
            <p>{`Make: ${car.make}`}</p>
            <p>{`Model: ${car.model}`}</p>
            <p>{`Color: ${car.color}`}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        )}
      </div>
    );
  }
  
  export default CarDetails;
  