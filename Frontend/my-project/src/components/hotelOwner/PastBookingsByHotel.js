import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import hotelOwnerService from '../../services/hotelOwner.service';
import { useParams } from 'react-router-dom';
import styles from './PastBookings.module.css';

function PastBookingsByHotel() {
  const { hotelId } = useParams();
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPastBookings = async () => {
      try {
        const data = await hotelOwnerService.pastBookingsById(hotelId);
        setBookings(data);
      } catch (error) {
        console.error('Error fetching past bookings:', error);
        setMessage('An error occurred. Please try again.');
      }
    };

    fetchPastBookings();
  }, [hotelId]);

  return (
    <div className={styles.container}>
      <h2>Past Bookings</h2>
      {message && <p className={styles.message}>{message}</p>}
      <div className={styles.bookingList}>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking.booking_id} className={styles.card}>
              <p><strong>Booking ID:</strong> {booking.booking_id}</p>
              <p><strong>Number of Rooms:</strong> {booking.no_rooms}</p>
              <p><strong>Total Booking Amount:</strong> ${booking.total_booking_amount}</p>
              <p><strong>Check-in Date:</strong> {new Date(booking.checkin_date).toLocaleDateString()}</p>
              <p><strong>Check-out Date:</strong> {new Date(booking.checkout_date).toLocaleDateString()}</p>
              <p><strong>Booking Status:</strong> {booking.booking_status}</p>
            </div>
          ))
        ) : (
          <p>No past bookings found</p>
        )}
      </div>
    </div>
  );
}

export default PastBookingsByHotel;
