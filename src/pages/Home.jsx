import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../main.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace YOUR_FORM_ID with your actual Formspree form ID
    const formAction = 'https://formspree.io/f/YOUR_FORM_ID';
    
    try {
      const response = await fetch(formAction, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
        setTimeout(() => setSubmitStatus(''), 3000);
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
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Awaken <span className="gradient-text">Boldness</span>, Clarity, and Purpose</h1>
            <p className="hero-subtitle">Transforming human resources and leadership across Africa through innovative development programs and strategic consulting.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Comprehensive HR solutions for organizations across Africa</p>
          </div>
          <div className="overview-grid">
            <div className="overview-card">
              <h3>Leadership Transformation</h3>
              <p>Develop effective leaders who drive organizational success and create lasting impact.</p>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="overview-card">
              <h3>Events & Workshops</h3>
              <p>Join our conferences and workshops designed to transform your team and organization.</p>
              <Link to="/events" className="btn btn-primary">View Events</Link>
            </div>
            <div className="overview-card">
              <h3>Online Learning</h3>
              <p>Access comprehensive learning resources through our online platforms.</p>
              <Link to="/learning" className="btn btn-primary">Explore</Link>
            </div>
            <div className="overview-card">
              <h3>Research & Insights</h3>
              <p>Stay informed with the latest research and insights on HR trends in Africa.</p>
              <Link to="/research" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Work in Action</h2>
            <p className="section-subtitle">Moments from our events and activities</p>
          </div>
          <div className="gallery-preview-grid">
            <div className="gallery-item">
              <img src="/images/PXL_20250529_073018560.jpg" alt="HRUNLOCK Africa Event" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/PXL_20250529_074305739.jpg" alt="HRUNLOCK Africa Event" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/PXL_20250529_074955723.jpg" alt="HRUNLOCK Africa Event" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/PXL_20250529_075312970.jpg" alt="HRUNLOCK Africa Event" loading="lazy" />
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/gallery" className="btn btn-primary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      <section className="customers customers-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted by Leading Organizations</h2>
            <p className="section-subtitle">We work with organizations across various industries in Africa</p>
          </div>
          <div className="customers-grid">
            <div className="customer-item">
              <div className="customer-placeholder">
                <p>Customer Logo 1</p>
              </div>
            </div>
            <div className="customer-item">
              <div className="customer-placeholder">
                <p>Customer Logo 2</p>
              </div>
            </div>
            <div className="customer-item">
              <div className="customer-placeholder">
                <p>Customer Logo 3</p>
              </div>
            </div>
            <div className="customer-item">
              <div className="customer-placeholder">
                <p>Customer Logo 4</p>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/customers" className="btn btn-secondary">View All Customers</Link>
          </div>
        </div>
      </section>

      <section className="newsletter-home">
        <div className="container">
          <div className="newsletter-home-content">
            <div className="newsletter-home-text">
              <h2>Stay Connected</h2>
              <p>Subscribe to our newsletter and get the latest updates, insights, and event announcements delivered to your inbox.</p>
            </div>
            <div className="newsletter-home-form">
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : submitStatus === 'success' ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-contact">
        <div className="container">
          <div className="quick-contact-content">
            <div className="quick-contact-info">
              <h2>Get in Touch</h2>
              <p>Ready to transform your organization? Contact us today to learn how we can help.</p>
              <div className="quick-contact-details">
                <p><strong>Phone:</strong> <a href="tel:+255757394254">+255 757 394 254</a></p>
                <p><strong>Email:</strong> <a href="mailto:contact@hrunlockafrica.com">contact@hrunlockafrica.com</a></p>
                <p><strong>Address:</strong> MNF Square, 7th Floor, Sokoine Drive, Dar es Salaam, Tanzania</p>
              </div>
            </div>
            <div className="quick-contact-cta">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

