import React, { useState } from 'react';
import styles from './Contact.module.css';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSuccessMessage('Thank you for contacting us! We will get back to you soon.');

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className={styles.contactUs}>
      <div className={styles.imageSection}>
        <img src="/Images/Contact.jpg" alt="Contact Us" />
      </div>
      <div className={styles.formSection}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.error : ''}
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.error : ''}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? styles.error : ''}
            />
            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
