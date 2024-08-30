import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CarList.css';



function CarList() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const username = 'user';
    const password = 'password';
    const credentials = btoa(`${username}:${password}`);
  
    fetch("http://localhost:8080/group19-capstone-project/api/carInformation/getall", {
      headers: {
        'Authorization': `Basic ${credentials}`
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Unauthorized');
        }
      })
      .then((result) => {
        console.log(result);
        setCars(result);
      })
      .catch((error) => {
        console.error("Error fetching car information:", error);
      });
  }, []);

  return (
    <div className="car-list">
      <h1 className="car-list-title">Available Cars</h1>
      <div className="car-list-container">
        {cars.map((car, index) => (
          <Link
            to={`/Booking/${car.carInformationID}`}
            state={{ car }}
            key={car.carInformationID || index}
            className="car-item"
          >
            <div className="car-image-container">
              <img 
                src={`data:image/jpeg;base64,${car.picture1Base64}`} 
                alt={car.make} 
                className="car-image"
              />
            </div>
            <div className="car-info">
              <span className="car-name">{car.make} {car.model} </span>
              <span className="car-price">R {car.rentalRate}/day</span>
            </div>
            <div className="car-description">{car.description}</div>
            <button className="car-button">Rent Now</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CarList;
