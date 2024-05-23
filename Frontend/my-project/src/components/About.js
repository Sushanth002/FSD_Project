import React from 'react';
import styles from './About.module.css';
import Footer from './Footer';

function About() {
  return (
    <div className={styles.aboutUsContainer}>
      <h1>About Us</h1>
      <div className={styles.infoSection}>
        <p>Welcome to our Hotel Booking Website! We are dedicated to providing you with the best hotel booking experience. Whether you're traveling for business or leisure, we have a wide range of hotels to suit your needs.</p>
        <p>Last month, we had over 10,000 views and helped thousands of travelers find the perfect accommodations. Our user-friendly interface, competitive prices, and excellent customer service make us the top choice for hotel bookings.</p>
      </div>
      <div className={styles.imagesSection}>
        <div className={styles.imageContainer}>
          <img src="/Images/AboutImage1.jpg" alt="Hotel 1" className={styles.hotelImage} />
          <p>Hotels in India</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/Images/AboutImage2.jpg" alt="Hotel 2" className={styles.hotelImage} />
          <p>Hotel in Paris</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/Images/AboutImage3.jpg" alt="Hotel 3" className={styles.hotelImage} />
          <p>Hotel in Tokyo</p>
        </div>
      </div>
      <div className={styles.statsSection}>
        <h2>Our Achievements</h2>
        <p>10,000+ Views Last Month</p>
        <p>5,000+ Hotels Listed</p>
        <p>Excellent Customer Reviews</p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
