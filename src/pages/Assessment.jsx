import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const questions = [
    {
      text: 'I enjoy solving complex problems',
      type: 'personality'
    },
    {
      text: 'I prefer working in teams rather than alone',
      type: 'personality'
    },
    // Add more questions here
  ];

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitAssessment = () => {
    // Process answers here
    navigate('/dashboard');
  };

  const progress = ((answers.filter(a => a !== undefined).length) / questions.length) * 100;

  return (
    <div className="assessment-wrap">
      <div className="assessment-header">
        <h2>Personality Assessment</h2>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="question-area">
        <div className="question-card">
          <div className="q-header">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="q-text">
            {questions[currentQuestion].text}
          </div>
          <div className="options">
            {[0, 1, 2].map((value) => (
              <div
                key={value}
                className={`option ${answers[currentQuestion] === value ? 'selected' : ''}`}
                onClick={() => handleAnswer(value)}
              >
                {value === 0 ? 'Disagree' : value === 1 ? 'Neutral' : 'Agree'}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="assessment-actions">
        {currentQuestion > 0 && (
          <button className="btn outline" onClick={prevQuestion}>
            Previous
          </button>
        )}
        {currentQuestion < questions.length - 1 ? (
          <button className="btn" onClick={nextQuestion}>
            Next
          </button>
        ) : (
          <button className="btn" onClick={submitAssessment}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Assessment;