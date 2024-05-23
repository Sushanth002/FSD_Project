import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h4>About Us</h4>
            <p>
              We provide the best hotel booking experience. Our platform is easy to use and offers a wide range of options for all your needs.
            </p>
          </div>
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Contact Us</h4>
            <p>Email: info@hotelbooking.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Nellore, Andhra Pradesh, India</p>
          </div>
          <div className={styles.column}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2024 Hotel Booking. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
