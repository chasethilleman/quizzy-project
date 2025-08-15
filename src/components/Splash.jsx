export default function Splash(props) {
  return (
    <div className="splash">
      <img src="src/assets/quizzy.png" alt="Quizzy Logo" />
      <button onClick={props.startQuiz}>Start Quiz</button>
    </div>
  );
}
