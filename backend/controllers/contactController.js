import Contact from '../models/Contact.js';

const contactController = {
  // Create new contact
  createContact: async (req, res) => {
    try {
      const { firstName, lastName, email, phone, message, collegeName, passingYear, courseField } = req.body;

      const contact = await Contact.create({
        firstName,
        lastName,
        email,
        phone,
        message,
        collegeName,
        passingYear,
        courseField
      });

      res.status(201).json({
        success: true,
        message: 'Contact form submitted successfully',
        data: contact
      });
    } catch (error) {
      console.error('Contact creation error:', error);
      res.status(500).json({
        success: false,
        message: 'Error submitting contact form',
        error: error.message
      });
    }
  },

  // Get all contacts (admin only)
  getContacts: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const skip = (page - 1) * limit;

      const contacts = await Contact.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      const total = await Contact.countDocuments();

      res.status(200).json({
        success: true,
        data: {
          contacts,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit)
          }
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  },

  // Get contact statistics (admin only)
  getContactStats: async (req, res) => {
    try {
      const totalContacts = await Contact.countDocuments();
      const newContacts = await Contact.countDocuments({ status: 'new' });
      const recentContacts = await Contact.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select('name email createdAt status');

      res.status(200).json({
        success: true,
        data: {
          totalContacts,
          newContacts,
          recentContacts
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
};

export default contactController; 