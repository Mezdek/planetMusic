import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import ScoreAnimation from '../ScoreAnimation';

function Question({
  question,
  difficulty,
  correct_answer,
  incorrect_answers,
  setScore,
  score,
  nextQuestion,
  questionCounter,
  questionsQuantity,
}) {
  const [answers, setAnswers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [outOfTime, setOutOfTime] = useState(false);

  useEffect(() => {
    // combines the correct answer with the array of wrong answers and shuffle them
    const answers = [correct_answer, ...incorrect_answers];
    const shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());
    setAnswers(shuffledAnswers);
  }, []);

  useEffect(() => {
    // countdown starts onMount and continues until clicked=true
    // problem: when clicked at 25s it still counts to 24 before stopping
    countdown > 0 &&
      !clicked &&
      setTimeout(() => setCountdown(countdown - 1), 1000);
    countdown === 0 && setOutOfTime(true);
  }, [countdown]);

  const checkAnswer = (e) => {
    const difficultyScores = { easy: 10, medium: 30, hard: 50 };
    if (e.target.innerText === correct_answer) {
      e.target.classList.add('btn-success');
      e.target.classList.remove('btn-outline-info');

      // set the score
      setScore(score + difficultyScores[difficulty] * countdown);
    } else {
      // show the clicked answer red
      e.target.classList.add('btn-danger');
      e.target.classList.remove('btn-outline-info');
      e.target.parentNode.childNodes.forEach((answer) => {
        if (answer.innerText === correct_answer) {
          answer.classList.add('btn-success');
          answer.classList.remove('btn-outline-info');
        }
      });
    }
  };

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <p>Difficulty: {difficulty}</p>
        <p>Question {questionCounter + 1}/10</p>
      </div>
      <ScoreAnimation score={score} />
      {/* <h2 className='text-center mb-5'>Score: {score}</h2> */}
      <div
        className='badge rounded-circle bg-secondary m-auto mb-5 d-flex justify-content-center align-items-center'
        style={{ width: '100px', height: '100px' }}
      >
        <p className='m-0 text-wrap fs-4'>
          {outOfTime ? 'Time is up!' : `${countdown} s`}
        </p>
      </div>
      <h3 className='text-center'>{question}</h3>
      <div className='mt-5'>
        {answers.map((item, index) => (
          <Button
            variant={
              item === correct_answer && outOfTime ? 'success' : 'outline-info'
            }
            size='lg'
            className='mb-2 d-block w-75 m-auto'
            disabled={clicked || outOfTime}
            key={`answers-${index}`}
            onClick={(e) => {
              checkAnswer(e);
              setClicked(true);
            }}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <Button
          variant='success'
          size='lg'
          disabled={!clicked && !outOfTime}
          onClick={nextQuestion}
        >
          {questionCounter === questionsQuantity - 1 ? 'Finish!' : 'Next'}
        </Button>
      </div>
    </div>
  );
}

export default Question;
