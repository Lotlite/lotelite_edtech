import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

const adminService = {
  // Login admin
  login: async (email: string, password: string) => {
    try {
      const response = await api.post('/admin/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  // Get dashboard statistics
  getDashboardStats: async () => {
    try {
      console.log('Fetching dashboard stats...');
      const response = await api.get('/admin/dashboard/stats');
      console.log('Dashboard stats response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      throw error;
    }
  },

  // Get all contacts
  getContacts: async (page: number = 1) => {
    try {
      const response = await api.get(`/admin/contacts?page=${page}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  },

  // Delete a contact
  deleteContact: async (id: string) => {
    try {
      const response = await api.delete(`/admin/contacts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw error;
    }
  },

  // Get all applications
  getApplications: async (page: number = 1) => {
    try {
      const response = await api.get(`/admin/applications?page=${page}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw error;
    }
  },

  // Update application status
  updateApplicationStatus: async (id: string, status: string) => {
    try {
      const response = await api.patch(`/admin/applications/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Error updating application status:', error);
      throw error;
    }
  },

  // Get settings
  getSettings: async () => {
    try {
      const response = await api.get('/admin/settings');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching settings:', error);
      throw error;
    }
  },

  // Update settings
  updateSettings: async (settings: any) => {
    try {
      const response = await api.put('/admin/settings', settings);
      return response.data;
    } catch (error) {
      console.error('Error updating settings:', error);
      throw error;
    }
  }
};

export default adminService; 