import { decode } from "html-entities";

export default function Question(props) {
  const incorrectAnswers = [...props.question.incorrect_answers];
  const correctAnswer = props.question.correct_answer;
  const randomIndex = Math.floor(Math.random() * (incorrectAnswers.length + 1));
  incorrectAnswers.splice(randomIndex, 0, correctAnswer);
  const allAnswers = incorrectAnswers;

  function selectAnswer(event) {
    const selectedAnswer = event.target.textContent;
    console.log("Selected answer:", selectedAnswer);
  }

  return (
    <div>
      <h2>{decode(props.question.question)}</h2>
      <ul>
        {allAnswers.map((answer, index) => (
          <li key={index}>
            <button onClick={selectAnswer}>{decode(answer)}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
