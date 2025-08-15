import quizzyLogo from "../assets/quizzy.png";

export default function Splash(props) {
  return (
    <div className="splash">
      <img src={quizzyLogo} alt="Quizzy Logo" />
      <button onClick={props.startQuiz}>Start Quiz</button>
    </div>
  );
}
