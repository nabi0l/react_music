import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });
      setStatus({
        success: true,
        message: 'Your message has been sent successfully!',
        previewUrl: response.data.previewUrl
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = 'Please fill in all required fields correctly.';
        } else if (error.response.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.request) {
        errorMessage = 'Unable to connect to the server. Please check your internet connection.';
      }
      
      setStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Get In Touch
      </h2>
      <p className="text-gray-600 text-center mb-8">We'd love to hear from you</p>
      
      {status.message && (
        <div className={`mb-6 p-4 rounded-lg ${
          status.success 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {status.message}
          {status.previewUrl && (
            <div className="mt-2">
              <a 
                href={status.previewUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 text-sm flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" /> View Email Preview
              </a>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <FaUser />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <FaEnvelope />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute top-3 left-3 text-gray-400">
            <FaComment />
          </div>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 ${
            isSubmitting 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-black hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <FaPaperPlane className="mr-2" /> Send Message
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;