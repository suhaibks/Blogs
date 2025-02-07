import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_jll426c',  // Service ID
        'template_fyfkm5m', // Template ID
        e.target,
        '4Z6MJVV7fRhVAs0tI' // User ID
      );

      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container contact-page">
      <h1>Contact</h1>
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text"id="name" name="from_name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required/>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email}onChange={(e) => setFormData({ ...formData, email: e.target.value })}required/>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}required/>
          </div>
          
          <button type="submit" className="button" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus.message && (
            <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
          </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;