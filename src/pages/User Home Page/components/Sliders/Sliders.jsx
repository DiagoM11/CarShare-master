import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sliders.css';

const slides = [
  {
    id: 1,
    title: "Unlock the Freedom of Mobility with Us",
    description: "Discover a world of convenience where you can rent the perfect car for any occasion, or turn your vehicle into a source of income effortlessly.",
    img: "/Picture1.jpeg",
    url: "/",
  },
  {
    id: 2,
    title: "Earn Money by Sharing Your Car",
    description: "List your car with us and start earning today. It’s easy, secure, and helps you make the most out of your vehicle.",
    img: "/Picture2.jpeg",
    url: "/",
  },
  {
    id: 3,
    title: "Your Ideal Ride is Just a Click Away",
    description: "Whether you need a car for a quick getaway or a business trip, we connect you with trusted local car owners for a seamless experience.",
    img: "/Picture3.jpeg",
    url: "/",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${current * 100}vw)` }}>
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <div className="slide-text">
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link to={slide.url}>
                <button className="slide-button">Find Your Ride</button>
              </Link>
            </div>
            <div className="slide-image">
              <img src={slide.img} alt={slide.title} />
            </div>
          </div>
        ))}
      </div>
      <div className='slider-nav'>
        {slides.map((slide, index) => (
          <div
            className={`nav-dot ${current === index ? 'active' : ''}`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

