import { useState } from "react";
import Question from "./Question";

export default function Quiz(props) {
  const questionComponents = props.questions.map((question, index) => (
    <Question key={index} question={question} />
  ));

  return (
    <div className="quiz-container">
      {questionComponents}
      <button /* onClick={checkAnswers} */>Check Answers</button>
    </div>
  );
}
