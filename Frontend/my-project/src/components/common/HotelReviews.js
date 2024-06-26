import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//import axios from 'axios';
import commonService from '../../services/common.service';
import styles from './HotelReviews.module.css';

function HotelReviews() {
  const location = useLocation();
  const { hotel_id } = location.state;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await commonService.getReviews(hotel_id);
        if (data.success) {
          setReviews(data.data);
        } else {
          console.error('Failed to fetch reviews');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [hotel_id]);

  return (
    <div className={styles.reviewsContainer}>
      <h2>Hotel Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.review_id} className={styles.reviewCard}>
            <p><strong>Review:</strong> {review.review}</p>
            <p><strong>Rating:</strong> {review.rating}</p>
            <p><strong>Date:</strong> {new Date(review.time_stamp).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default HotelReviews;
