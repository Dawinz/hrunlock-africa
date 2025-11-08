import { Link } from 'react-router-dom';
import '../main.css';

const Customers = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Customers</h1>
          <p>Trusted by leading organizations across Africa</p>
        </div>
      </section>

      <section className="customers">
        <div className="container">
          <div className="customers-intro">
            <p>We are proud to work with organizations across various industries in Africa. Our clients range from startups to established enterprises, all seeking to transform their human resources and leadership capabilities.</p>
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
            <div className="customer-item">
              <div className="customer-placeholder">
                <p>Customer Logo 5</p>
              </div>
            </div>
            <div className="customer-item">
              <div className="customer-placeholder">
                <p>Customer Logo 6</p>
              </div>
            </div>
          </div>
          <div className="customers-cta">
            <p>Interested in working with us?</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;

