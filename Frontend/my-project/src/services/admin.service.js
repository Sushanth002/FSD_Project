
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/admin';

const adminService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { admin_email: email, admin_password: password },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  getAdminDetails: async (adminId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/getadmin/${adminId}`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch admin details');
    }
  },

  getAllOwners: async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/get-all-owner`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch owners');
    }
  },

  deleteOwner: async (ownerId) => {
    try {
      const response = await axios.delete(`${API_URL}/dashboard/delete-owner/${ownerId}`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete owner');
    }
  },

  getAllUsers: async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/get-all-user`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch users');
    }
  },

  deleteUser: async (userId) => {
    try {
      const response = await axios.delete(`${API_URL}/dashboard/delete-user/${userId}`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete user');
    }
  }

};

export default adminService;


