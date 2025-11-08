import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../main.css';

const Learning = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    // TODO: Replace YOUR_FORM_ID with your actual Formspree form ID
    const formAction = 'https://formspree.io/f/YOUR_FORM_ID';
    
    try {
      await fetch(formAction, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setEmail('');
      alert('Thank you for subscribing!');
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };


  return (
    <>
      <section className="page-header learning-header">
        <div className="container">
          <h1>Online Learning</h1>
          <p className="learning-intro">
            Exchange ideas, knowledge, and capacity through our e-Learning courses. Our highly interactive programs—featuring presentations, group discussions, and technical sessions—will help you gain new skills, share expertise, discover best practices, and forge new connections.
          </p>
          <p className="learning-intro-secondary">
            One of our priorities is evaluating the outcomes of our programs and learning from participant feedback so that we can continuously improve our offerings. All e-Learning courses undertaken within HRUNLOCK Africa are part of a common learning Impact Evaluation Framework to measure our impact and effectiveness.
          </p>
        </div>
      </section>

      <section className="learning-courses">
        <div className="container">
          <div className="learning-platform-cta">
            <a href="#" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
              Go to our learning platform
            </a>
          </div>
        </div>
      </section>

      <section className="learning-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our e-Learning Programs?</h2>
            <p className="section-subtitle">Comprehensive, interactive, and designed for real-world application</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📚</div>
              <h3>Comprehensive Curriculum</h3>
              <p>Our courses cover the full spectrum of HR and leadership topics, from foundational principles to advanced strategies.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h3>Interactive Learning</h3>
              <p>Engage with presentations, group discussions, and technical sessions that bring concepts to life.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌍</div>
              <h3>African Context</h3>
              <p>Content specifically tailored to address the unique challenges and opportunities in African organizations.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h3>Expert Facilitation</h3>
              <p>Learn from experienced HR professionals and leadership coaches with deep expertise in African markets.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📊</div>
              <h3>Impact Evaluation</h3>
              <p>All courses are part of our Impact Evaluation Framework to ensure measurable learning outcomes.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎓</div>
              <h3>Certification</h3>
              <p>Earn certificates upon completion that demonstrate your commitment to professional development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Our e-Learning Works</h2>
            <p className="section-subtitle">A structured approach to professional development</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Browse & Select</h3>
              <p>Explore our course catalog and select programs that align with your learning goals and professional development needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Register & Access</h3>
              <p>Complete your registration and gain immediate access to course materials, resources, and learning community.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Learn & Engage</h3>
              <p>Participate in interactive sessions, engage with peers, and apply concepts through practical exercises and case studies.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Complete & Certify</h3>
              <p>Finish your course, complete assessments, and receive your certificate of completion to showcase your achievement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-newsletter">
        <div className="container">
          <div className="learning-newsletter-content">
            <div className="learning-newsletter-text">
              <h2>Join our Global Network</h2>
              <p>Subscribe to our mailing list to get updates on our activities, exclusive learning and networking opportunities, the latest research insights, and more.</p>
            </div>
            <form className="learning-newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="btn btn-primary">Subscribe Now!</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learning;
