import '../main.css';

const About = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Empowering organizations through human resource excellence</p>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-item">
              <h3>Who We Are</h3>
              <p>HRUNLOCK Africa is a leading human resource development consultancy dedicated to unlocking the potential of people and organizations across the African continent. We combine deep expertise with innovative approaches to drive transformation.</p>
              <p>Founded with a vision to transform HR practices across Africa, we work with organizations of all sizes to build stronger teams, develop effective leaders, and create cultures of excellence that drive sustainable growth.</p>
            </div>

            <div className="about-item">
              <h3>What We Do</h3>
              <p>We specialize in leadership transformation, people & culture consulting, and comprehensive HR development programs. Our services help organizations build stronger teams, develop effective leaders, and create cultures of excellence.</p>
              <ul className="services-list">
                <li>Leadership Development & Training</li>
                <li>Organizational Culture Transformation</li>
                <li>HR Strategy & Consulting</li>
                <li>Talent Management Solutions</li>
                <li>Team Building & Development</li>
                <li>Performance Management Systems</li>
              </ul>
            </div>

            <div className="about-item">
              <h3>Our Mission</h3>
              <p>To awaken boldness, clarity, and purpose in individuals and organizations across Africa, enabling them to achieve their highest potential and drive meaningful impact in their communities and industries.</p>
              <p>We believe that every organization has untapped potential, and through strategic HR development, we help unlock that potential to create lasting positive change.</p>
            </div>

            <div className="about-item">
              <h3>Our Vision</h3>
              <p>To be the premier human resource development partner in Africa, recognized for transforming organizations and empowering leaders who create lasting positive change.</p>
              <p>We envision an Africa where organizations are led by empowered, purpose-driven leaders who create inclusive, high-performing cultures that drive sustainable development.</p>
            </div>

            <div className="about-item about-team">
              <h3>Our Team</h3>
              <p>Our team consists of experienced HR professionals, leadership coaches, and organizational development experts who are passionate about driving transformation across Africa.</p>
              <p>With decades of combined experience in human resources, leadership development, and organizational transformation, our team brings a unique blend of local knowledge and global best practices.</p>
              <div className="team-placeholder">
                <p>Team member profiles coming soon...</p>
              </div>
            </div>

            <div className="about-item">
              <h3>Our Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <h4>Excellence</h4>
                  <p>We strive for excellence in everything we do, setting high standards for ourselves and our clients.</p>
                </div>
                <div className="value-item">
                  <h4>Integrity</h4>
                  <p>We conduct our business with honesty, transparency, and ethical practices.</p>
                </div>
                <div className="value-item">
                  <h4>Innovation</h4>
                  <p>We embrace new ideas and creative solutions to address complex HR challenges.</p>
                </div>
                <div className="value-item">
                  <h4>Impact</h4>
                  <p>We measure our success by the positive impact we create for our clients and communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

