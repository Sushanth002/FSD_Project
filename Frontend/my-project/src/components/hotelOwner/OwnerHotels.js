import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import hotelOwnerService from '../../services/hotelOwner.service';
import { Link, useNavigate } from 'react-router-dom';
import styles from './OwnerHotels.module.css';

const OwnerHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const ownerHotels = await hotelOwnerService.getOwnerHotels();
        setHotels(ownerHotels);
      } catch (error) {
        setMessage(error.message);
      }
    };

    fetchHotels();
  }, []);

  const handlePastBookingsClick = (hotelId) => {
    navigate(`/past-bookings/${hotelId}`);
  };

  const handleCurrentBookingsClick = (hotelId) => {
    navigate(`/current-bookings/${hotelId}`);
  };

  return (
    <div className={styles.container}>
      <h2>Owner Hotels</h2>
      {message && <p className={styles.message}>{message}</p>}
      <div className={styles.hotelList}>
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div key={hotel.hotel_id} className={styles.card}>
              <h3>{hotel.hotel_name}</h3>
              <p><strong>Location:</strong> {hotel.location}</p>
              <p><strong>Address:</strong> {hotel.address}</p>
              <p><strong>Parking:</strong> {hotel.parking ? 'Available' : 'Not Available'}</p>
              <p><strong>WiFi:</strong> {hotel.wifi ? 'Available' : 'Not Available'}</p>
              <p><strong>Room Service:</strong> {hotel.room_service ? 'Available' : 'Not Available'}</p>
              <p><strong>Swimming Pool:</strong> {hotel.swimming_pool ? 'Available' : 'Not Available'}</p>
              <p><strong>Fitness Center:</strong> {hotel.fitness_center ? 'Available' : 'Not Available'}</p>
              <p><strong>Dining:</strong> {hotel.dining ? 'Available' : 'Not Available'}</p>
              <div className={styles.cardActions}>
                <Link to={`/update-hotel/${hotel.hotel_id}`}>
                  <button className={styles.button}>Update Hotel</button>
                </Link>

                
                <button className={styles.button} onClick={() => handlePastBookingsClick(hotel.hotel_id)}>Past Bookings</button>
                
                
                <button className={styles.button} onClick={() => handleCurrentBookingsClick(hotel.hotel_id)}>Current Bookings</button>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels found</p>
        )}
      </div>
    </div>
  );
};

export default OwnerHotels;
