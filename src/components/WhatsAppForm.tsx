import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFormProps {
  phoneNumber: string;
  defaultMessage?: string;
}

const WhatsAppForm: React.FC<WhatsAppFormProps> = ({
  phoneNumber,
  defaultMessage = 'Hello, I would like to know more about your services.',
}) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState(defaultMessage);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a message with the user's name
    const finalMessage = name ? `Hello, my name is ${name}. ${message}` : message;
    
    // Generate the WhatsApp URL
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-[#25D366] mb-4 flex items-center">
        <MessageCircle className="w-6 h-6 mr-2" />
        WhatsApp Chat
      </h3>
      <p className="text-gray-600 mb-4">
        Start a conversation with us on WhatsApp. Fill out the form below and click the button to begin chatting.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="whatsapp-name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name (Optional)
          </label>
          <input
            type="text"
            id="whatsapp-name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#25D366] focus:border-[#25D366]"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="whatsapp-message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="whatsapp-message"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#25D366] focus:border-[#25D366]"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#25D366] text-white px-6 py-2 rounded-md hover:bg-[#128C7E] transition-colors flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Chat on WhatsApp
        </button>
      </form>
    </div>
  );
};

export default WhatsAppForm; 