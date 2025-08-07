import { useState } from "react";
import "./App.css";
import Splash from "./components/Splash";
import Quiz from "./components/Quiz";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  return (
    <>
      {!isQuizStarted && <Splash startQuiz={startQuiz} />}
      {isQuizStarted && <Quiz />}
    </>
  );
}

export default App;
