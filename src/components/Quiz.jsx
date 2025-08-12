import { useState } from "react";
import Question from "./Question";

export default function Quiz(props) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questionComponents = props.questions.map((question, index) => (
    <Question
      key={index}
      question={question}
      showResults={showResults}
      selected={selectedAnswers[index]}
      onSelectAnswer={(answer) => handleSelectAnswer(index, answer)}
    />
  ));

  function handleSelectAnswer(questionIndex, answer) {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  }

  function checkAnswers() {
    setShowResults(true);
  }

  return (
    <div className="quiz-container">
      {questionComponents}
      <button
        onClick={checkAnswers}
        disabled={Object.keys(selectedAnswers).length < props.questions.length}
      >
        Check Answers
      </button>
    </div>
  );
}
