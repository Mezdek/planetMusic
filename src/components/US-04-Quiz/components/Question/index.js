import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

function Question({
  question,
  difficulty,
  correct_answer,
  incorrect_answers,
  setScore,
  score,
  nextQuestion,
  questionCounter,
}) {
  const [answers, setAnswers] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const answers = [correct_answer, ...incorrect_answers];
    const shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());
    setAnswers(shuffledAnswers);
  }, []);
  // combines the correct answer with the array of wrong answers and shuffle them

  const checkAnswer = (e) => {
    if (e.target.innerText === correct_answer) {
      e.target.className = 'btn btn-lg btn-success';
      switch (difficulty) {
        case 'easy':
          setScore(score + 10);
          break;
        case 'medium':
          setScore(score + 30);
          break;
        case 'hard':
          setScore(score + 50);
          break;
        default:
          break;
      }
    } else {
      // show the clicked answer red
      e.target.className = 'btn btn-lg btn-danger';
      // search for the right answer and display green
      e.target.parentNode.childNodes.forEach((answer) => {
        if (answer.innerText === correct_answer) {
          answer.className = 'btn btn-lg btn-success';
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
      <h2 className='text-center mb-5'>Score: {score}</h2>
      <h3 className='text-center'>{question}</h3>
      <div className='d-grid gap-2 mt-5'>
        {answers.map((item, index) => (
          <Button
            className=''
            variant='outline-info'
            size='lg'
            disabled={clicked}
            key={index}
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
          disabled={!clicked}
          onClick={nextQuestion}
        >
          {questionCounter === 9 ? 'Finish!' : 'Next'}
        </Button>
      </div>
    </div>
  );
}

export default Question;
