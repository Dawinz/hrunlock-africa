import { useState } from 'react';
import '../main.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // TODO: Replace YOUR_FORM_ID with your actual Formspree form ID
    const formAction = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Ready to transform your organization, and the people within it? Let's build systems that feel human, perform powerfully, and last. Contact us today and begin your journey with HRUNLOCK Africa.</p>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h3>HRUNLOCK Africa Limited</h3>
              <div className="contact-details">
                <p><strong>Address:</strong><br />MNF Square, 7th Floor<br />Sokoine Drive<br />Dar es Salaam, Tanzania</p>
                <p><strong>Phone:</strong><br /><a href="tel:+255757394254">+255 757 394 254</a></p>
                <p><strong>Email:</strong><br /><a href="mailto:hello@hrunlockafrica.com">hello@hrunlockafrica.com</a></p>
              </div>
              <div className="contact-hours">
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <h3>Send Us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    rows="5" 
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {submitStatus === 'success' && (
                <div className="form-success">
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="form-success" style={{ backgroundColor: '#dc3545' }}>
                  <p>There was an error sending your message. Please try again.</p>
                </div>
              )}
            </div>
          </div>
          {/* TODO: Update with actual Google Maps embed URL for MNF Square, Sokoine Drive, Dar es Salaam */}
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1234567890123!2d39.2833!3d-6.7924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDcjMzIuNiJTIDM5wrAxNycwMC4wIkU!5e0!3m2!1sen!2stz!4v1234567890123!5m2!1sen!2stz"
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="HRUNLOCK Africa Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

