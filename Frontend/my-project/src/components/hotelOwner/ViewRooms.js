import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import hotelOwnerService from '../../services/hotelOwner.service';
import { useNavigate } from 'react-router-dom';
import styles from './ViewRooms.module.css';

const ViewRooms = () => {
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

  const handleViewRoomsClick = (hotelId) => {
    navigate(`/view-rooms-manage/${hotelId}`);
  };

  return (
    <div className={styles.container}>
      <h2>View Rooms</h2>
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
                <button className={styles.button} onClick={() => handleViewRoomsClick(hotel.hotel_id)}>View Rooms</button>
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

export default ViewRooms;
