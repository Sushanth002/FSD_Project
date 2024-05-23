import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import userService from '../../services/user.service.js';
import styles from '../admin/AdminProfile.module.css';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = sessionStorage.getItem('user_id');
      if (!userId) {
        setMessage('User ID not found in session storage');
        return;
      }

      try {
        const data = await userService.getUserDetails(userId);
        if (data.success) {
            setUserDetails(data.data);
        } else {
          setMessage('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        setMessage('An error occurred. Please try again.');
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className={styles.profileContainer}>
      <h2>User Profile</h2>
      {message && <p className={styles.message}>{message}</p>}
      {userDetails ? (
        <div className={styles.profileDetails}>
          <p><strong>ID:</strong> {userDetails.user_id}</p>
          <p><strong>Name:</strong> {userDetails.user_name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Gender:</strong> {userDetails.gender}</p>
          <p><strong>Phone Number:</strong> {userDetails.contact_no}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserProfile;
