import { Link } from 'react-router-dom';
import { useState } from 'react';
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

  const [imageErrors, setImageErrors] = useState({});

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
                            marginBottom: '1rem',
                            margin: '0 auto 1rem'
                          }}
                          onError={(e) => {
                            console.error('Failed to load logo:', company.logo, 'for company:', company.name);
                            console.error('Image error details:', e);
                            setImageErrors(prev => ({ ...prev, [company.name]: true }));
                          }}
                          onLoad={() => {
                            console.log('Logo loaded successfully:', company.name, 'from:', company.logo);
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

