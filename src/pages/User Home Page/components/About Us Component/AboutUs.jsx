import {} from 'react';
import '../About Us Component/AboutUs.css';
import CarShareImage from '../About Us Component/CarShare-Logo.png';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-heading">
        <h1>About Us</h1>
      </div>
      <div className="about-image-container">
        <img src={CarShareImage} alt="Car Share" className="about-image" />
      </div>
      <br />
      <div className="about-info">
        <p>
          Welcome to Car Share, your trusted platform for car sharing and rental services. 
          Just as Airbnb has revolutionized home rentals, Car Share offers a similar experience 
          for vehicles, making it easy for you to find the perfect ride for any occasion.
        </p>
        <p>
          At Car Share, we believe in making transportation more accessible, flexible, and sustainable. 
          Our platform connects car owners with individuals seeking short-term vehicle rentals, providing 
          a diverse range of cars to meet various needs. From compact cars for city drives to SUVs for weekend 
          getaways, we have something for everyone.
        </p>
        <p>
          Our commitment to quality and customer satisfaction drives us to ensure a seamless and secure experience 
          for all users. Whether you are an owner looking to share your car or a renter seeking a reliable vehicle, 
          Car Share is here to facilitate smooth transactions and excellent service. Join us in transforming the way 
          people access vehicles and explore new destinations with ease and convenience.
        </p>
        <br />
      </div>
    </section>
  );
};

export default AboutUs;
