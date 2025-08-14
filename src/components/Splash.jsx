export default function Splash(props) {
  return (
    <div className="splash">
      <h1>Welcome to Quizzy!</h1>
      <p>Your go-to app for quizzes!</p>
      <button onClick={props.startQuiz}>Start Quiz</button>
    </div>
  );
}
