import { useState } from 'react';
import '../main.css';

const Journals = () => {
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
      <section className="page-header">
        <div className="container">
          <h1>Journals & Newsletter</h1>
          <p>Stay informed with our latest insights</p>
        </div>
      </section>

      <section className="journals">
        <div className="container">
          <div className="journals-content">
            <div className="journals-info">
              <h3>Our Publications</h3>
              <p>Access our latest research papers, articles, and thought leadership pieces on HR development and organizational transformation.</p>
              <p>Our journals cover a wide range of topics including:</p>
              <ul>
                <li>Leadership Development Strategies</li>
                <li>HR Best Practices</li>
                <li>Organizational Culture</li>
                <li>Talent Management</li>
                <li>Performance Optimization</li>
                <li>Industry Insights</li>
              </ul>
              <p className="coming-soon-text">Journals coming soon. Subscribe to our newsletter to be notified when new publications are available.</p>
            </div>
            <div className="newsletter-panel">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest updates, insights, and event announcements delivered to your inbox.</p>
              <p>By subscribing, you'll receive:</p>
              <ul>
                <li>Monthly newsletter with industry insights</li>
                <li>Event announcements and early registration</li>
                <li>Exclusive research publications</li>
                <li>Tips and best practices</li>
              </ul>
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
              <p className="form-note">Or use Beehiiv/Mailchimp embed here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Journals;

