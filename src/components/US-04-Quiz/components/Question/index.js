import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

function Question({
  question,
  correct_answer,
  incorrect_answers,
  setScore,
  score,
  nextQuestion,
}) {
  const [answers, setAnswers] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const answers = [correct_answer, ...incorrect_answers];
    const shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());
    setAnswers(shuffledAnswers);
  }, []);

  const checkAnswer = (e) => {
    if (e.target.innerText === correct_answer) {
      e.target.className = 'btn btn-lg btn-success';
      setScore(score + 10);
    } else {
      e.target.className = 'btn btn-lg btn-danger';
      e.target.parentNode.childNodes.forEach((answer) => {
        if (answer.innerText === correct_answer) {
          answer.className = 'btn btn-lg btn-success';
        }
      });
    }
  };

  return (
    <div>
      <h3>{question}</h3>
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
      <div className='flex flex-jc-c mt-5'>
        <Button
          variant='success'
          size='lg'
          disabled={!clicked}
          onClick={nextQuestion}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Question;
