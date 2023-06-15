import "./Card3.style.css";
import React from 'react';

const Card3 = ({ data }) => {
  const { title, imageSrc, description } = data;

  return (
    <div className="Card3">
      <h2>{title}</h2>
      <img src={imageSrc} alt="image is not available" />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card3;
