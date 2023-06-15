import "./Card2.style.css";
import React from 'react';
const Card2 = ({ data }) => {
  const { title, players } = data;
  return (
    <div className="Card2">
      <h2>{title}</h2>
      <div>
        {players.map((player, index) => (
          <p key={index}>{player}</p>
        ))}
      </div>
    </div>
  );
};
export default Card2;
