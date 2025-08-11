import { decode } from "html-entities";
import { clsx } from "clsx";

export default function Question(props) {
  const incorrectAnswers = [...props.question.incorrect_answers];
  const correctAnswer = props.question.correct_answer;
  const randomIndex = Math.floor(Math.random() * (incorrectAnswers.length + 1));
  incorrectAnswers.splice(randomIndex, 0, correctAnswer);
  const allAnswers = incorrectAnswers;

  function selectAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const button = event.target;
    button.classList.add("selected");
    const buttonContainer = button.parentNode.parentNode;
    buttonContainer.querySelectorAll("button").forEach((btn) => {
      if (btn !== button) {
        btn.classList.remove("selected");
      }
    });
    console.log("Selected answer:", selectedAnswer);
    props.onSelectAnswer(selectedAnswer);
  }

  return (
    <div>
      <h2>{decode(props.question.question)}</h2>
      <ul>
        {allAnswers.map((answer, index) => (
          <li key={index}>
            <button
              onClick={selectAnswer}
              className={clsx({ "is-correct": props.isCorrect })}
            >
              {decode(answer)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
