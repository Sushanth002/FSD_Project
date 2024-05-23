import axios from 'axios';

const API_URL = 'http://localhost:3000/api/owner';

const hotelOwnerService = {
  register: async (ownerData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, ownerData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to register owner');
    }
  },

  login: async (loginData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to login owner');
    }
  },

  updateOwnerInfo: async (ownerId, data) => {
    try {
      const response = await axios.put(`${API_URL}/dashboard/update-owner/`, data, {
        withCredentials: true, // Include credentials in the request if needed
      });

      if (response.status === 200) {
        return { success: true, message: 'Owner updated successfully' };
      } else {
        throw new Error('Failed to update owner');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  addHotel: async (hotelData) => {
    try {
      const response = await axios.post(`${API_URL}/dashboard/add-new-hotel`, hotelData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add hotel');
    }
  },

  getHotelDetails: async (ownerId, hotelId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/get-hotel/${ownerId}`, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data.success) {
        return response.data;
      } else {
        throw new Error('Failed to fetch hotel details');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  updateHotel: async (hotelData) => {
    try {
      const response = await axios.put(`${API_URL}/dashboard/update-hotel`, hotelData, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data.success) {
        return response.data;
      } else {
        throw new Error('Failed to update hotel');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  getOwnerHotels: async () => {
    try {
      const ownerId = sessionStorage.getItem('owner_id');
      if (!ownerId) {
        throw new Error('Owner ID not found in session storage');
      }
      
      const response = await axios.get(`${API_URL}/dashboard/get-hotel/${ownerId}`, {
        withCredentials: true,
      });
      
      if (response.status === 200 && response.data.success) {
        return response.data.data;
      } else {
        throw new Error('Failed to fetch owner hotels');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  getAllRooms: async (hotelId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/get-all-room/${hotelId}`, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data.success) {
        return response.data.data;
      } else {
        throw new Error('Failed to fetch rooms details');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  deleteRoom: async (roomId) => {
    try {
      const response = await axios.delete(`${API_URL}/dashboard/delete-room/${roomId}`, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data.success) {
        return response.data;
      } else {
        throw new Error('Failed to delete room');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  getRoomById: async (roomId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/get-room/${roomId}`, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data.success) {
        return response.data.data;
      } else {
        throw new Error('Failed to fetch room details');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  updateRoomById: async (roomDetails) => {
    try {
      const response = await axios.put(`${API_URL}/dashboard/update-room`, roomDetails, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data.success) {
        return response.data;
      } else {
        throw new Error('Failed to update room');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  addRoom: async (roomData) => {
    try {
      const response = await axios.post(`${API_URL}/dashboard/add-new-room`, roomData, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data.success) {
        return response.data;
      } else {
        throw new Error('Failed to add room');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  pastBookingsById: async (hotelId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/booking/past-booking/${hotelId}`, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data.success) {
        return response.data.data;
      } else {
        throw new Error('Failed to fetch past bookings');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  currentBookingsById: async (hotelId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/booking/current-booking/${hotelId}`, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data.success) {
        return response.data.data;
      } else {
        throw new Error('Failed to fetch current bookings');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },

  updateBookingStatus: async (ownerId, bookingId, status) => {
    try {
      const response = await axios.put(`${API_URL}/dashboard/booking/current-booking/update-status`, {
        owner_id: parseInt(ownerId),
        booking_id: parseInt(bookingId),
        booking_status: status,
      }, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data.success) {
        return response.data;
      } else {
        throw new Error('Failed to update booking status');
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  },
  
};

export default hotelOwnerService;
