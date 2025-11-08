import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../main.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('conferences');

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Events</h1>
          <p>Join us for transformative learning experiences</p>
        </div>
      </section>

      <section className="events">
        <div className="container">
          <div className="events-tabs">
            <button 
              className={`tab-btn ${activeTab === 'conferences' ? 'active' : ''}`}
              onClick={() => setActiveTab('conferences')}
            >
              Conferences
            </button>
            <button 
              className={`tab-btn ${activeTab === 'workshops' ? 'active' : ''}`}
              onClick={() => setActiveTab('workshops')}
            >
              Workshops
            </button>
          </div>

          {activeTab === 'conferences' && (
            <div className="tab-content active" id="conferences">
              <div className="events-empty">
                <h3>Upcoming Conferences</h3>
                <p>Conference information coming soon. Stay tuned for upcoming events!</p>
                <p>Our conferences bring together HR professionals, leaders, and organizations from across Africa to share insights, best practices, and innovative approaches to human resource development.</p>
                <Link to="/contact" className="btn btn-primary">Get Notified</Link>
              </div>
            </div>
          )}

          {activeTab === 'workshops' && (
            <div className="tab-content active" id="workshops">
              <div className="events-empty">
                <h3>Upcoming Workshops</h3>
                <p>Workshop information coming soon. Check back for scheduled sessions!</p>
                <p>Our workshops provide hands-on training and practical skills development for HR professionals and leaders at all levels.</p>
                <Link to="/contact" className="btn btn-primary">Get Notified</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Events;

