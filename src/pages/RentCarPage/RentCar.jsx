import React from 'react';
import '../RentCarPage/RentCar.css';
import CarList from './components/CarList/CarList';

function RentCar() {

  return (
    <>
      <div className="rent-car">
        <h1 className="rent-car-title">Rent a Car</h1>
        <div className="rent-car-container">
          <div className="rent-car-field">
            <label htmlFor="location" className="rent-car-label">Location:</label>
            <input type="text" id="location" className="rent-car-location" placeholder="Enter location" />
          </div>
        </div>
        <button className="rent-car-button">Find a Car</button>
      </div>
    
      <CarList />
    </>
  );
}

export default RentCar;
