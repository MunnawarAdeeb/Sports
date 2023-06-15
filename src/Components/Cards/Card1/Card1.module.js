import "./Card1.style.css";
import React from 'react';
const Card1 = ({ data }) => {
  const {
    imageSrc,
    title,
    fullName,
    nickname,
    founded,
    ground,
    owners,
    players
  } = data;
  return (
    <div className="Card1">
      <img src={imageSrc} alt="image is not available" />
      <div>
        <h2>{title}</h2>
        <p>FULL NAME: {fullName}</p>
        <p>NICK NAME: {nickname}</p>
        <p>FOUNDED: {founded}</p>
        <p>GROUND: {ground}</p>
        <p>TEAM OWNER(S): {owners}</p>
        <p>PROMINENT PLAYERS: {players.join(', ')}</p>
      </div>
    </div>
  );
};

export default Card1;
