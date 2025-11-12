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
            Welcome to the HRUNLOCK Africa Online Learning Exchange — a digital platform powered by LearnWorlds, where learning becomes personal, emotional, and transformative.
          </p>
          <p className="learning-intro-secondary">
            Our e-Learning experience goes beyond ordinary online training. It's a living community of thinkers, doers, and change-makers who come together to exchange ideas, sharpen skills, and grow in emotional and cultural intelligence. Through interactive courses, live sessions, and discussion spaces, participants gain practical, behaviorally grounded skills they can apply immediately, share expertise and insights with a diverse community of professionals, discover best practices across leadership, communication, and personal growth, and forge authentic connections that continue long after the course ends.
          </p>
          <p className="learning-intro-secondary">
            Every course is part of our Learning Impact Evaluation Framework, ensuring measurable transformation and continuous improvement based on participant feedback.
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
            <h2 className="section-title">Why Choose Our E-learning Programs?</h2>
            <p className="section-subtitle">At HRUNLOCK Africa, we believe learning should move both the mind and the soul, that's why our platform doesn't just teach; it awakens.</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🌍</div>
              <h3>Rooted in the African Experience</h3>
              <p>Our courses are designed with African realities in mind, blending psychology, culture, and behavioral science to make learning relevant, inspiring, and alive.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h3>Interactive & Immersive</h3>
              <p>We go beyond slides and lectures. Each program features live sessions, discussions, reflections, and real-world projects that connect knowledge to personal and professional growth.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📊</div>
              <h3>Impact You Can Measure</h3>
              <p>Through our Learning Impact Evaluation Framework, every program tracks progress and transformation, ensuring that learning translates into real-life change.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h3>A Community That Grows With You</h3>
              <p>When you enroll, you join a community of thinkers, professionals, and change-makers who learn together, support each other, and stay connected beyond the classroom.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">❤️</div>
              <h3>Learning That Moves the Soul</h3>
              <p>Our programs are emotionally intelligent by design, crafted to touch instincts, reshape beliefs, and ignite lasting transformation.</p>
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
              <h2>Join Our Global Network</h2>
              <p>Be part of a growing community of thinkers, leaders, and changemakers redefining the future of Africa, the way we live, lead, and connect. By subscribing to our mailing list, you'll receive updates on HRUNLOCK Africa's programs and events, exclusive learning and networking opportunities, and fresh insights from our behavioral and cultural research. Stay connected, stay inspired, and keep freeing your power.</p>
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
