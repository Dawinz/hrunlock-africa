import { Link } from 'react-router-dom';
import '../main.css';

const Customers = () => {
  // Company data with logo paths and URLs
  const companies = [
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
    },
    {
      name: 'Tanzania Institute of Project Management',
      url: 'https://tipm.ac.tz',
      logo: '/images/customers/tanzania-institute-project-management.png'
    }
  ];

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
            {companies.map((company, index) => {
              // Check if logo exists by trying to load it
              const hasLogo = true; // Will be determined by image onError
              
              return (
                <div key={index} className="customer-item">
                  <a 
                    href={company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '80px',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                      onError={(e) => {
                        // If logo doesn't exist, hide image and show text
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<p style="color: var(--neutral-gray); font-weight: 600; text-align: center; margin: 0;">${company.name}</p>`;
                        }
                      }}
                    />
                  </a>
                </div>
              );
            })}
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

