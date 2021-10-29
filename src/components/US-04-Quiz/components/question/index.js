import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

function Question({
  question,
  correct_answer,
  incorrect_answers,
  setQuestionCounter,
  setScore,
  questionCounter,
  score,
}) {
  const [answers, setAnswers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    const answers = [correct_answer, ...incorrect_answers];
    const shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());
    setAnswers(shuffledAnswers);
  }, []);

  const checkAnswer = (e) => {
    if (e.target.innerText === correct_answer) {
      setCorrect(true);
      e.target.className = 'btn btn-lg btn-success';
      setScore(score + 10);
      // setQuestionCounter(questionCounter + 1);
    } else {
      setCorrect(false);
      e.target.className = 'btn btn-lg btn-danger';
      e.target.parentNode.childNodes.forEach((answer) => {
        if (answer.innerText === correct_answer) {
          answer.className = 'btn btn-lg btn-success';
          answer.disabled = 'true';
        }
      });
      // setQuestionCounter(questionCounter + 1);
    }
  };

  return (
    <div>
      <h2 className='center'>Score: {score}</h2>
      <h3>{question}</h3>
      <div className='d-grid gap-2'>
        {answers.map((item, index) => (
          <Button
            variant='outline-info'
            size='lg'
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
      {/* {clicked ? (correct) ? <h2>Correct!</h2> : <h2>Wrong :/</h2> : null} */}
    </div>
  );
}

export default Question;
