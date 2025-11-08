import React from 'react';
import { useNavigate } from 'react-router-dom';

const assessments = [
  {
    title: 'Personality Assessment',
    description: 'Discover your personality type and matching careers',
    icon: '🎯',
    duration: '15 mins',
    questions: '30'
  },
  {
    title: 'Skills Assessment',
    description: 'Evaluate your technical and soft skills',
    icon: '💡',
    duration: '20 mins',
    questions: '40'
  },
  {
    title: 'Interest Assessment',
    description: 'Explore your career interests and passions',
    icon: '⭐',
    duration: '10 mins',
    questions: '25'
  }
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dash-container">
      <h1>Your Dashboard</h1>
      <p className="dash-subtitle">Start or continue your career assessments</p>

      <div className="assessment-cards">
        {assessments.map((assessment, index) => (
          <div key={index} className="assessment-card">
            <div className="icon-box">{assessment.icon}</div>
            <h3>{assessment.title}</h3>
            <p>{assessment.description}</p>
            <div className="info-row">
              <span>Duration: {assessment.duration}</span>
              <span>{assessment.questions} questions</span>
            </div>
            <button className="btn" onClick={() => navigate('/assessment')}>
              Start Assessment
            </button>
          </div>
        ))}
      </div>

      <div className="career-box">
        <h3>Explore Career Options</h3>
        <p>Browse through our comprehensive career database</p>
        <button className="btn outline" onClick={() => navigate('/careers')}>
          View All Careers
        </button>
      </div>
    </div>
  );
};

export default Dashboard;