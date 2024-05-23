import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import hotelOwnerService from '../../services/hotelOwner.service';
import styles from '../admin/AdminProfile.module.css';

const OwnerProfile = () => {
  const [ownerDetails, setOwnerDetails] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchOwnerDetails = async () => {
      const ownerId = sessionStorage.getItem('owner_id');
      if (!ownerId) {
        setMessage('Owner ID not found in session storage');
        return;
      }

      try {
        const data = await hotelOwnerService.getOwnerDetails(ownerId);
        if (data.success) {
            setOwnerDetails(data.data);
        } else {
          setMessage('Failed to fetch owner details');
        }
      } catch (error) {
        console.error('Error fetching owner details:', error);
        setMessage('An error occurred. Please try again.');
      }
    };

    fetchOwnerDetails();
  }, []);

  return (
    <div className={styles.profileContainer}>
      <h2>Hotel Owner Profile</h2>
      {message && <p className={styles.message}>{message}</p>}
      {ownerDetails ? (
        <div className={styles.profileDetails}>
          <p><strong>ID:</strong> {ownerDetails.owner_id}</p>
          <p><strong>Name:</strong> {ownerDetails.owner_name}</p>
          <p><strong>Email:</strong> {ownerDetails.email}</p>
          <p><strong>Gender:</strong> {ownerDetails.gender}</p>
          <p><strong>Phone Number:</strong> {ownerDetails.contact_no}</p>
          <p><strong>Address:</strong> {ownerDetails.address}</p>
        </div>
      ) : (
        <p>Loading Hotel owner details...</p>
      )}
    </div>
  );
};

export default OwnerProfile;
