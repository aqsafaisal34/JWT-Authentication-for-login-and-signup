import React from 'react';
import moment from 'moment';
import './index.css';

let WeatherCard = ({ date, temp, min, 
max }) => {
  return (
    <div className='main'>
      <div className="card">
      <h3>{moment(date).format('ll')}</h3>
      <h3>{moment(date).format(' h:mm a')}</h3>
      <h1>{`${parseInt(temp)}°C`}</h1>
      <h3> Min {min}°C - Max {max}°C </h3>
      </div>
      </div>
  );
}

export default WeatherCard;
