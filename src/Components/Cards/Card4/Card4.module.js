import "./Card4.style.css";
import React from 'react';

const Card4 = ({ data }) => {
  const { title, description } = data;

  return (
    <div className="Card4">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card4;
