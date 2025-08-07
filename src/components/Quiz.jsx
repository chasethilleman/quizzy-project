import { useEffect, useState } from "react";
import Question from "./Question";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => {
        if (!data.results || !Array.isArray(data.results)) {
          throw new Error("No questions returned from API.");
        }
        setQuestions(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  const questionComponents = questions.map((question, index) => (
    <Question key={index} question={question} />
  ));

  return (
    <div>
      {questionComponents}
      <button /* onClick={checkAnswers} */>Check Answers</button>
    </div>
  );
}
