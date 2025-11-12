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
            <p>We are proud to work with trusted leading organizations across various industries in Africa. Our clients range from foundations to established enterprises, all seeking to transform their human resources and leadership capabilities.</p>
          </div>
          <div className="customers-grid">
            <div className="customer-item">
              <div className="customer-placeholder">
                <p><a href="https://www.nomad-tanzania.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Nomad Tanzania Limited</a></p>
              </div>
            </div>
            <div className="customer-item">
              <div className="customer-placeholder">
                <p><a href="https://www.juliusnyerere.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Mwalimu Nyerere Foundation</a></p>
              </div>
            </div>
            <div className="customer-item">
              <div className="customer-placeholder">
                <p><a href="https://tazama.co.zm" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>TAZAMA Pipeline</a></p>
              </div>
            </div>
            <div className="customer-item">
              <div className="customer-placeholder">
                <p><a href="https://www.cotwu-tanzania.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>COTWU Tanzania</a></p>
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

