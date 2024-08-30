import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Booking.css";
import CarImages from "./components/carImages";

const carOwner = {
  name: "Owner's name and surname",
  location: "Owner's location",
};

const SinglePage = () => {
  const location = useLocation();
  const car = location.state.car;

  const [startDate, setStartDate] = useState("");
  const [returnDate, setEndDate] = useState("");
  const [pickUpTime, setPickupTime] = useState("");
  const [dropOffTime, setDropoffTime] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

 

  const handleClick = (e) => {
    e.preventDefault();
    const booking = {
      car: {
        carInformationID: car.carInformationID,
        make: car.make,
        model: car.model,
        year: car.year,
        type: car.type,
        description: car.description,
        features: car.features,
        rentalRate: car.rentalRate,
        availabilityStatus: car.availabilityStatus,
      },
      startDate,
      pickUpTime,
      returnDate,
      dropOffTime,
      totalPrice,
    };

    const username = "user";
    const password = "password";
    const credentials = btoa(`${username}:${password}`);

    fetch("http://localhost:8080/group19-capstone-project/api/booking/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${credentials}`,
      },
      body: JSON.stringify(booking),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Booking successful!");
        } else {
          console.log("Booking failed!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (startDate && returnDate) {
      const start = new Date(startDate);
      const end = new Date(returnDate);
      const days = (end - start) / (1000 * 60 * 60 * 24) + 1;
      setTotalPrice(days * car.rentalRate);
    } else {
      setTotalPrice(0);
    }
  }, [startDate, returnDate]);

  return (
    <div className="single-page">
      {/* IMG */}
      <div className="image-container">
        <CarImages car={car} />
      </div>

      <div className="text-container">
        <h1 className="product-name">
          {car.make} {car.model}
        </h1>
        <div className="additional-info">
          <h4 className="title">Owner Information</h4>
          <div className="info-group">
            <div className="info-item">
              <strong>Name:</strong>
              <p>{carOwner.name}</p>
            </div>
            <div className="info-item">
              <strong>Location:</strong>
              <p>{carOwner.location}</p>
            </div>
          </div>

          <h4 className="title">Car Details</h4>
          <div className="info-group">
            <div className="info-item">
              <strong>Make:</strong>
              <p>{car.make}</p>
            </div>
            <div className="info-item">
              <strong>Model:</strong>
              <p>{car.model}</p>
            </div>
            <div className="info-item">
              <strong>Type:</strong>
              <p>{car.type}</p>
            </div>
            <div className="info-item">
              <strong>Year:</strong>
              <p>{car.year}</p>
            </div>
            <div className="info-item">
              <strong>License Plate:</strong>
              <p>{car.licensePlate}</p>
            </div>
            <div className="info-item">
              <strong>Description:</strong>
              <p>{car.description}</p>
            </div>
            <div className="info-item">
              <strong>Features:</strong>
              <p>{car.features}</p>
            </div>
          </div>
        </div>

        <div className="separator"></div>

        {/* Date and Time Inputs */}
        <div className="rent-car-field-group">
          <div className="rent-car-field">
            <label htmlFor="start-date" className="rent-car-label">
              Start Date:
            </label>
            <input
              type="date"
              id="start-date"
              className="rent-car-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="rent-car-field-time">
            <label htmlFor="pickup-time" className="rent-car-label">
              Pick-Up Time:
            </label>
            <input
              type="time"
              id="pickup-time"
              className="rent-car-input"
              value={pickUpTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>
        </div>

        <div className="rent-car-field-group">
          <div className="rent-car-field">
            <label htmlFor="end-date" className="rent-car-label">
              End Date:
            </label>
            <input
              type="date"
              id="end-date"
              className="rent-car-input"
              value={returnDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="rent-car-field-time">
            <label htmlFor="dropoff-time" className="rent-car-label">
              Drop-Off Time:
            </label>
            <input
              type="time"
              id="dropoff-time"
              className="rent-car-input"
              value={dropOffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
            />
          </div>
        </div>

        <div className="separator"></div>
        <div className="pricing">
          <p className="rental-rate">
            <strong>Rental rate: </strong>R{car.rentalRate}/day
          </p>
          <p className="total-price">
            <strong>Total Price: </strong>R{totalPrice}
          </p>
          <button className="book-now-button" onClick={handleClick}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
