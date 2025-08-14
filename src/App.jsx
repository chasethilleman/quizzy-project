import { useState } from "react";
import "./App.css";
import Splash from "./components/Splash";
import Quiz from "./components/Quiz";
import Confetti from "react-confetti";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isQuizCorrect, setIsQuizCorrect] = useState(false);

  async function fetchQuestions() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=5");
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      if (!data.results || !Array.isArray(data.results)) {
        throw new Error("No questions returned from API.");
      }
      const newArray = data.results.map((question) => {
        const allAnswers = [
          ...question.incorrect_answers,
          question.correct_answer,
        ];
        question.all_answers = allAnswers.sort(() => Math.random() - 0.5);
        return question;
      });
      setQuestions(newArray);
    } catch (err) {
      setError(err.message);
      setQuestions([]);
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  }

  const startQuiz = () => {
    setIsQuizStarted(true);
    fetchQuestions();
  };

  return (
    <>
      {loading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
      {isQuizCorrect && <Confetti />}
      {!isQuizStarted && <Splash startQuiz={startQuiz} />}
      {isQuizStarted && error && (
        <div style={{ color: "red" }}>Error: {error}</div>
      )}
      {isQuizStarted && !loading && !error && questions.length > 0 && (
        <Quiz
          questions={questions}
          fetchQuestions={fetchQuestions}
          setIsQuizCorrect={setIsQuizCorrect}
        />
      )}
    </>
  );
}

export default App;
