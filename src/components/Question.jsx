import { decode } from "html-entities";
import { clsx } from "clsx";

export default function Question(props) {
  function selectAnswer(event) {
    const selectedAnswer = event.target.textContent;
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
              className={clsx({
                selected: props.selected === answer,
                "is-correct":
                  props.showResults && answer === props.question.correct_answer,
                "is-wrong":
                  props.showResults &&
                  props.selected === answer &&
                  answer !== props.question.correct_answer,
              })}
              disabled={props.showResults}
            >
              {decode(answer)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
