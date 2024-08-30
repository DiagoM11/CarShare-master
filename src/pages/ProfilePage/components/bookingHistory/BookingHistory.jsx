import React, { useState, useEffect } from "react";
import "./BookingHistory.css";
import { FaCar, FaCalendarAlt, FaClock, FaMoneyBillWave, FaIdBadge } from "react-icons/fa";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const username = "user";
    const password = "password";
    const credentials = btoa(`${username}:${password}`);

    fetch("http://localhost:8080/group19-capstone-project/api/booking/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${credentials}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => {
        console.error("Error fetching booking history:", error);
      });
  }, []);

  return (
    <div className="booking-history">
      <h2>Booking History</h2>
      {bookings.length === 0 ? (
        <p className="no-bookings">No bookings found.</p>
      ) : (
        <table className="booking-history-table">
          <thead>
            <tr>
              <th><FaIdBadge /> Booking ID</th>
              <th><FaCar /> Car</th>
              <th><FaCalendarAlt /> Start Date</th>
              <th><FaClock /> Pick-Up Time</th>
              <th><FaCalendarAlt /> End Date</th>
              <th><FaClock /> Drop-Off Time</th>
              <th><FaMoneyBillWave /> Total Price</th>
              <th><FaCalendarAlt /> Created Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="booking-row">
                <td>{booking.bookingID}</td>
                <td>{`${booking.car.make} ${booking.car.model}`}</td>
                <td>{booking.startDate}</td>
                <td>{booking.pickUpTime}</td>
                <td>{booking.returnDate}</td>
                <td>{booking.dropOffTime}</td>
                <td>R{booking.totalPrice}</td>
                <td>{booking.createdDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingHistory;
