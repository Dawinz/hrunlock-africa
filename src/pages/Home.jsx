import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../main.css';

const customerLogos = [
  {
    name: 'Nomad Tanzania Limited',
    url: 'https://www.nomad-tanzania.com',
    logo: '/images/customers/nomad-tanzania.png'
  },
  {
    name: 'Mwalimu Nyerere Foundation',
    url: 'https://www.juliusnyerere.org/',
    logo: '/images/customers/mwalimu-nyerere-foundation.png'
  },
  {
    name: 'TAZAMA Pipeline',
    url: 'https://tazama.co.zm',
    logo: '/images/customers/tazama-pipeline.png'
  },
  {
    name: 'COTWU Tanzania',
    url: 'https://www.cotwu-tanzania.org',
    logo: '/images/customers/cotwu-tanzania.png'
  }
];

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [imageErrors, setImageErrors] = useState({});

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
            <p className="hero-subtitle">We believe Africa's deepest problems will never be solved by technology alone, but by psychology, cultural intelligence and design. By reshaping the way people think, feel, and act, we ignite the kind of transformation that no tool or machine can deliver.</p>
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
            <p className="section-subtitle">At HRUNLOCK Africa, we transform psychology, culture, and design into tools that move people at the level of emotion and instinct. We work with governments, organizations, and individuals ready to grow, awaken, and redefine what it means to lead, create, and live with meaning.</p>
          </div>
          <div className="overview-grid">
            <div className="overview-card">
              <h3>Training Programs</h3>
              <p><strong>Move minds. Touch hearts. Transform behavior.</strong> We deliver immersive training in Cultural Intelligence, Emotional Intelligence, and Communication Strategy, crafted to awaken awareness, ignite creativity, and inspire authentic leadership.</p>
              <Link to="/learning" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="overview-card">
              <h3>Cultural & Behavioral Insights</h3>
              <p><strong>Decode what drives people.</strong> Through research, workshops, and conferences, we uncover the hidden emotional and cultural codes that shape performance, loyalty, and reform, helping leaders design systems that truly connect.</p>
              <Link to="/research" className="btn btn-primary">Explore</Link>
            </div>
            <div className="overview-card">
              <h3>Strategic Consultancy</h3>
              <p><strong>Where science meets soul.</strong> We help organizations craft reforms, policies, and marketing strategies rooted in behavioral science — blending emotion, data, and design to shift how people think, feel, and act.</p>
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
            </div>
            <div className="overview-card">
              <h3>Wellness & Lifestyle Initiatives</h3>
              <p><strong>Because performance begins within.</strong> We promote holistic living through programs that unite mindfulness, nutrition, movement, and emotional balance, nurturing the human spirit behind every achievement.</p>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
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
            {customerLogos.map((company, index) => {
              const hasError = imageErrors[company.name];
              
              return (
                <div key={index} className="customer-item">
                  <a 
                    href={company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                      padding: '1.5rem 1rem'
                    }}
                    title={company.name}
                  >
                    {!hasError ? (
                      <>
                        <img
                          src={company.logo}
                          alt={company.name}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '80px',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto 1rem'
                          }}
                          onError={(e) => {
                            console.error('Failed to load logo:', company.logo, 'for company:', company.name);
                            setImageErrors(prev => ({ ...prev, [company.name]: true }));
                          }}
                          onLoad={() => {
                            console.log('Logo loaded successfully:', company.name);
                          }}
                        />
                        <p style={{ 
                          color: 'var(--neutral-gray)', 
                          fontWeight: 500, 
                          textAlign: 'center', 
                          margin: 0,
                          fontSize: '0.875rem',
                          lineHeight: '1.4'
                        }}>
                          {company.name}
                        </p>
                      </>
                    ) : (
                      <p style={{ 
                        color: 'var(--neutral-gray)', 
                        fontWeight: 600, 
                        textAlign: 'center', 
                        margin: 0,
                        fontSize: '0.875rem'
                      }}>
                        {company.name}
                      </p>
                    )}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/customers" className="btn btn-primary">View All Customers</Link>
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
              <p>Ready to transform your organization, and the people within it? Let's build systems that feel human, perform powerfully, and last. Contact us today and begin your journey with HRUNLOCK Africa.</p>
              <div className="quick-contact-details">
                <p><strong>Phone:</strong> <a href="tel:+255757394254">+255 757 394 254</a></p>
                <p><strong>Email:</strong> <a href="mailto:hello@hrunlockafrica.com">hello@hrunlockafrica.com</a></p>
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

