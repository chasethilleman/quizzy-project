import { useState } from "react";
import Question from "./Question";

export default function Quiz(props) {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questionComponents = props.questions.map((question, index) => (
    <Question
      key={index}
      question={question}
      selected={selectedAnswers[index]}
      isCorrect={selectedAnswers[index] === question.correct_answer}
      onSelectAnswer={(answer) => handleSelectAnswer(index, answer)}
    />
  ));

  function handleSelectAnswer(questionIndex, answer) {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  }

  function checkAnswers() {}

  return (
    <div className="quiz-container">
      {questionComponents}
      <button onClick={checkAnswers}>Check Answers</button>
    </div>
  );
}
