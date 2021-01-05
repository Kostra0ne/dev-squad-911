import React from 'react';
import Rating from './Rating';
import '../styles/DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DriverCard">
      <div className="DriverCard__image">
        <img src={img} alt={name} />
      </div>
      <div className="DriverCard__content">
        <h2 className="DriverCard__name">{name}</h2>
        <h3 className="DriverCard__rating">
          <Rating>{rating}</Rating>
        </h3>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
