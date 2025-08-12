import { decode } from "html-entities";
import { clsx } from "clsx";

export default function Question(props) {
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
    props.onSelectAnswer(selectedAnswer);
  }

  return (
    <div>
      <h2>{decode(props.question.question)}</h2>
      <ul>
        {props.question.all_answers.map((answer, index) => (
          <li key={index}>
            <button
              onClick={selectAnswer}
              disabled={props.showResults}
              className={clsx({
                "is-correct":
                  props.showResults &&
                  props.selected === props.question.correct_answer &&
                  props.selected === answer,
                "is-wrong":
                  props.showResults &&
                  props.selected === answer &&
                  props.selected !== props.question.correct_answer,
              })}
            >
              {decode(answer)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
