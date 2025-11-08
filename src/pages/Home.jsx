import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id="home-screen" className="screen active">
      <section className="hero">
        <h1>Find Your Perfect <span>Career Path</span></h1>
        <p>Take scientifically-backed assessments to discover your strengths and career options.</p>

        <div className="hero-btns">
          <button className="btn" onClick={() => navigate('/login')}>Start Assessment</button>
          <button className="btn outline" onClick={() => navigate('/careers')}>Explore Careers</button>
        </div>
      </section>

      <section className="assessment-section">
        <h2>Comprehensive Career Assessment</h2>
        <p className="subtext">We give you a complete picture of your future potential.</p>
        <div className="grid">
          {/* Assessment cards will go here */}
        </div>
      </section>

      <section className="cta">
        <h3>Ready to Discover Your Future?</h3>
        <p>Join thousands who found the right career path.</p>
        <button className="btn" onClick={() => navigate('/login')}>Start Your Assessment</button>
      </section>
    </div>
  );
};

export default Home;