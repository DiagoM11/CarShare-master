import {} from 'react';
import '../BookingStepsBanner/BookingStepsBanner.css';
import SearchIcon from '../BookingStepsBanner/searchIcon.png';
import CardIcon from '../BookingStepsBanner/cardIcon.png';
import CarIcon from '../BookingStepsBanner/carIcon.png';


const BookingSteps = () => {
    return (
        <section className="booking-steps-section">
            <h2 className="booking-steps-heading">Booking Steps</h2>
            <div className="booking-steps-container">
                <div className="booking-step-card">
                    <img src={SearchIcon} alt="Browse Catalog" className="step-image" />
                    <h3>Step 1: Search</h3>
                    <p>Browse through our cataloged vehicles.</p>
                </div>
                <div className="booking-step-card">
                    <img src={CardIcon} alt="Select and Book" className="step-image" />
                    <h3>Step 2: Compare & Book</h3>
                    <p>Select your vehicle of choice, book, and pay.</p>
                </div>
                <div className="booking-step-card">
                    <img src={CarIcon} alt="Collect Vehicle" className="step-image" />
                    <h3>Step 3: Collect </h3>
                    <p>Collect your vehicle and enjoy your ride!</p>
                </div>
            </div>
        </section>
    );
}

export default BookingSteps;
