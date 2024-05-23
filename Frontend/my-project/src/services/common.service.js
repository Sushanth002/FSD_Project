import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const commonService = {
  searchHotels: async (searchCriteria) => {
    try {
      const response = await axios.post(`${API_URL}/search-hotels`, searchCriteria);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch hotels');
    }
  },

  getRooms: async (hotelId, checkinDate, checkoutDate) => {
    try {
      const response = await axios.post(`${API_URL}/room`, {
        hotel_id: hotelId,
        inputCheckinDate: checkinDate,
        inputCheckoutDate: checkoutDate
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch rooms');
    }
  },

  getReviews: async (hotelId) => {
    try {
      const response = await axios.get(`${API_URL}/review/${hotelId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch reviews');
    }
  }
  
};

export default commonService;
