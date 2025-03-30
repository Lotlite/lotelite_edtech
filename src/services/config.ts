// Configuration file for environment-specific settings

// The base URL for the API
// In production, this should be properly set in environment variables
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';

// Other configuration settings can be added here
export const CONFIG = {
  API_BASE_URL,
  // Add more config properties as needed
};

export default CONFIG; 