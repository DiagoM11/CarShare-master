import {} from 'react';
import './Header.css';



const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>CarShare</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/userHome">Home</a></li>
          <li><a href="/AddCarPage">Add a car</a></li>
          <li><a href="/RentCar">Rent a car</a></li>
          <li><a href="/SupportTicket">Help</a></li>
          <li><a href="/Profile">Profile</a></li>

     
        </ul>
      </nav> 
    </header>
  );
};

export default Header;
