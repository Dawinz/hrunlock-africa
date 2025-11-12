import '../main.css';

const About = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>A cultural and behavioral insight firm redefining Africa's future through emotional intelligence, cultural intelligence, and human-centered design</p>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-item">
              <h3>Who We Are</h3>
              <p>HRUNLOCK Africa Limited is a cultural and behavioral insight firm born from a simple but powerful belief: Africa will not be transformed by technology alone, but by psychology, culture, and design.</p>
              <p>We exist to help individuals, organizations, and nations unlock human potential through emotional intelligence, cultural intelligence, and behavioral science. Our work bridges ancient wisdom and modern science to build systems, leaders, and brands that resonate deeply with the African mind and soul.</p>
              <p>At our core, we are builders of meaning. We decode the unseen drivers of human behavior, emotion, story, and context, and use these insights to reshape leadership, communication, and performance.</p>
            </div>

            <div className="about-item">
              <h3>What We Do</h3>
              <ul className="services-list">
                <li><strong>Education & Research</strong> — We design and deliver emotionally intelligent learning programs, leadership trainings, and cultural code research projects that redefine how people think, feel, and perform.</li>
                <li><strong>Consultancy & Strategy</strong> — We work with governments, organizations, and brands to craft behaviorally informed strategies, from reform programs to marketing campaigns, that truly move people.</li>
                <li><strong>Travel & Connection</strong> — We curate immersive experiences such as retreats, boot camps, and dialogues that reconnect people with nature, purpose, and human connection.</li>
                <li><strong>Organic Food & Wellness</strong> — We promote holistic living through wellness initiatives that integrate nutrition, mindfulness, and emotional balance into everyday performance.</li>
              </ul>
            </div>

            <div className="about-item">
              <h3>Our Mission</h3>
              <p>To unlock Africa's human potential by blending psychology, culture, and design, transforming how people think, feel, and lead.</p>
            </div>

            <div className="about-item">
              <h3>Our Vision</h3>
              <p>To build a generation of emotionally intelligent, culturally grounded, and purpose-driven Africans, bold enough to lead with heart, create with courage, and live with meaning.</p>
              <p>We envision an Africa where transformation begins within; where psychology, culture, and design unite to shape systems, leaders, and societies that honor both human depth and collective progress.</p>
            </div>

            <div className="about-item about-team">
              <h3>Our Team</h3>
              <p>Our team is a collective of cultural strategists, behavioral scientists, and leadership architects united by one mission: to unlock Africa's human potential.</p>
              <p>Rooted in African realities yet informed by global insight, we blend psychology, culture, and design to help leaders, institutions, and communities build systems that are emotionally intelligent, purpose-driven, and authentically African.</p>
              <div className="team-placeholder">
                <p>Team member profiles coming soon...</p>
              </div>
            </div>

            <div className="about-item">
              <h3>Our Core Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <h4>Reinvention</h4>
                  <p>We believe in continuous transformation, the courage to evolve, unlearn, and rise stronger with every chapter.</p>
                </div>
                <div className="value-item">
                  <h4>Authenticity</h4>
                  <p>We live and lead from truth, choosing integrity and self-awareness over appearance and conformity.</p>
                </div>
                <div className="value-item">
                  <h4>Self-Mastery</h4>
                  <p>We strive to understand and govern ourselves first, mastering emotion, thought, and behavior as the foundation of all leadership.</p>
                </div>
                <div className="value-item">
                  <h4>Culture</h4>
                  <p>We honor African wisdom, identity, and collective memory as the roots of genuine transformation.</p>
                </div>
                <div className="value-item">
                  <h4>Purposeful Living</h4>
                  <p>We align every action with meaning, impact, and contribution, turning life itself into an act of purpose.</p>
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

