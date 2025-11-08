import React, { useState } from 'react';

const careers = [
  {
    id: 'swe',
    title: 'Software Engineer',
    category: 'Technology',
    salary: '$70,000 - $150,000',
    education: "Bachelor's Degree",
    requiredSkills: ['Programming', 'Problem Solving', 'Teamwork'],
    description: 'Design and develop software applications',
    icon: '💻'
  },
  // Add more careers here
];

const CareerExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [selectedCareer, setSelectedCareer] = useState(null);

  const categories = [...new Set(careers.map(c => c.category))];
  const skills = [...new Set(careers.flatMap(c => c.requiredSkills))];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || career.category === categoryFilter;
    const matchesSkill = !skillFilter || career.requiredSkills.includes(skillFilter);
    return matchesSearch && matchesCategory && matchesSkill;
  });

  return (
    <div className="career-explorer">
      <div className="explorer-header">
        <h2>Career Explorer</h2>
        <div className="explorer-controls">
          <div className="search-box">
            <input
              type="search"
              placeholder="Search careers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filters">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
            >
              <option value="">All Skills</option>
              {skills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="career-list">
        {filteredCareers.map(career => (
          <div key={career.id} className="career-card">
            <div className="career-card-top">
              <div className="career-icon">{career.icon}</div>
              <div className="career-head">
                <h3>{career.title}</h3>
                <div className="career-meta">{career.category}</div>
              </div>
            </div>
            <p className="career-desc">{career.description}</p>
            <p className="career-small">Salary: {career.salary}</p>
            <p className="career-small">Education: {career.education}</p>
            <div className="career-actions">
              <button 
                className="btn" 
                onClick={() => setSelectedCareer(career)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCareer && (
        <div className="career-modal">
          <div className="career-modal-inner">
            <button 
              className="modal-close"
              onClick={() => setSelectedCareer(null)}
            >
              ✕
            </button>
            <h2>{selectedCareer.title}</h2>
            <p>{selectedCareer.description}</p>
            <h3>Required Skills</h3>
            <ul>
              {selectedCareer.requiredSkills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <p><strong>Salary Range:</strong> {selectedCareer.salary}</p>
            <p><strong>Education:</strong> {selectedCareer.education}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerExplorer;