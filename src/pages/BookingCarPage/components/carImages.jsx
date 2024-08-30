import React, { useState } from "react";
import "./carImages.css";

const CarImages = ({ car }) => {
  const [index, setIndex] = useState(0);

  const images = [
    car.picture1Base64,
    car.picture2Base64,
    car.picture3Base64,
  ].filter((img) => img); 

  return (
    <div className="product-images">
      <div className="main-image">
        <img src={`data:image/jpeg;base64,${images[index]}`} alt="" className="image" />
      </div>
      <div className="thumbnail-container">
        {images.map((img, i) => (
          <div
            className={`thumbnail ${index === i ? "active" : ""}`}
            key={i}
            onClick={() => setIndex(i)}
          >
            <img src={`data:image/jpeg;base64,${img}`} alt="" className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarImages;
