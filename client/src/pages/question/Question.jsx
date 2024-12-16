import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedSection, setSelectedSection] = useState('Aptitude'); // Track selected section

  // Question sets for different sections
  const sections = {
    Aptitude: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      {
        question: "What is 5 x 3?",
        options: ["10", "12", "15", "20"],
        correctAnswer: "15",
      },
    ],
    Verbal: [
      {
        question: "Choose the synonym of 'quick'",
        options: ["Slow", "Fast", "Lazy", "Dull"],
        correctAnswer: "Fast",
      },
      {
        question: "Find the antonym of 'strong'",
        options: ["Weak", "Strong", "Tough", "Powerful"],
        correctAnswer: "Weak",
      },
    ],
  };

  // Get the questions for the selected section
  const currentQuestions = sections[selectedSection];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedOption(null);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setCurrentQuestionIndex(0); // Reset to the first question of the selected section
    setSelectedOption(null); // Clear selected option
  };

  const currentQuestion = currentQuestions[currentQuestionIndex];

  return (
    <div>
      {/* Section selection buttons */}
      <div className="mb-3">
    
        <p>placeholder for xyz</p>

          {/* Display the current section */}
      <h2> {selectedSection} section</h2> 
<br></br>
        <h3>Question {currentQuestionIndex + 1}</h3>
      </div>

    

      {/* Display the current question */}
      <p>{currentQuestion.question}</p>
      {currentQuestion.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={option}
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}

      {/* Navigation buttons */}
      <div>
        <button
          className="btn btn-secondary m-2"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={handleNext}
          disabled={currentQuestionIndex === currentQuestions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
