import { Link } from 'react-router-dom';
import '../ProfilePage/Profile.css';
import { FaUserCircle } from 'react-icons/fa'; // Importing an icon from FontAwesome

const ProfilePage = () => {
  const profilePhoto = null; // Simulate no profile photo (replace with actual image path if available)

  return (
    <div className="profile-container">
      <main className="profile-content">
        <section className="profile-photo">
          {profilePhoto ? (
            <img src={profilePhoto} alt="Profile Photo" className="photo" />
          ) : (
            <FaUserCircle className="photo-icon" />
          )}
          
          <button className="btn">Add a car</button>
          <button className="btn">Rent a car</button>
          <button className="btn">Logout</button>
        </section>
        <section className="profile-info">
          <div className="profile-names">
            <h2>Personal information</h2>
            <p>Names</p>
            <p>Driver(s) license number</p>
            <p>Email address <span>edit & verify</span></p>
            <p>Mobile number <span>edit & verify</span></p>
            <p>Street number and name <span>edit</span></p>
            <p>Suburb <span>edit</span></p>
            <p>Postal code <span>edit</span></p>
          </div>
          <div className="banking-details">
            <h2>Banking details <span>add</span></h2>
            <p>Card number</p>
            <p>Name on the card</p>
            <p>Branch</p>
            <p>Expiry date</p>
            <p>CVV</p>
            <p>Account number</p>
          </div>
          <div className="manage-details">
            <Link to="/BookingHistory" className="manage-booking-link">Manage booking</Link>
            <p>List of the cars</p>
            <p>Insurance details</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
