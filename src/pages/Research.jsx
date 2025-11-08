import { Link } from 'react-router-dom';
import '../main.css';

const Research = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Research</h1>
          <p>Insights and knowledge driving transformation</p>
        </div>
      </section>

      <section className="research">
        <div className="container">
          <div className="coming-soon">
            <h2>Research Publications Coming Soon</h2>
            <p>Our research publications and insights are coming soon. Check back for the latest findings on HR trends, leadership development, and organizational transformation in Africa.</p>
            <p>We are currently working on comprehensive research covering:</p>
            <ul className="research-topics">
              <li>Leadership Development Trends in African Organizations</li>
              <li>HR Best Practices for Growing Businesses</li>
              <li>Cultural Transformation Strategies</li>
              <li>Talent Management in the African Context</li>
              <li>Performance Management Systems</li>
              <li>Employee Engagement and Retention</li>
            </ul>
            <p>Subscribe to our newsletter to be notified when new research is published.</p>
            <Link to="/journals" className="btn btn-primary">Subscribe to Newsletter</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;

