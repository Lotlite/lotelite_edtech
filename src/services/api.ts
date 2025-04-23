// API service for connecting to the backend
import { API_BASE_URL } from './config';

// Interface for contact form data
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  collegeName: string;
  passingYear: string;
  courseField: string;
}

// Function to send a contact form to the backend
export const sendContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Send all form data directly to the backend
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      return {
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!'
      };
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};

// Add more API functions as needed 