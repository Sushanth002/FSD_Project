import axios from 'axios';

const API_URL = 'http://localhost:3000/api/user';

const userService = {
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to register user');
    }
  },

  login: async (loginData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, loginData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // Include credentials in the request
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to login user');
    }
  },

  updateUser: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/dashboard/update-user`, data, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // Include credentials in the request if needed
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update user');
    }
  },

  getPastBookings: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/booking/past-bookings/get-by-user/${userId}`, {
        withCredentials: true // Include credentials in the request if needed
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch past bookings');
    }
  },

  postReview: async (reviewData) => {
    try {
      const response = await axios.post(`${API_URL}/dashboard/booking/past-bookings/add-review`, reviewData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // Include credentials in the request if needed
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to post review');
    }
  },

  getCurrentBookings: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/booking/current-booking/${userId}`, {
        withCredentials: true // Include credentials in the request if needed
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch current bookings');
    }
  },
  cancelBooking: async (data) => {
    try {
      const response = await axios.put(`${API_URL}/dashboard/booking/current-booking/cancel-booking`, data, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // Include credentials in the request if needed
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to cancel booking');
    }
  },

  getUserDetails: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/${userId}`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch user details');
    }
  },
  // Add other user-related service functions here if needed
};

export default userService;
