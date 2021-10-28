import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function Question({question, correct_answer, incorrect_answers}) {

  const [answers, setAnswers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    const answers = [correct_answer, ...incorrect_answers];
    const shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());
    setAnswers(shuffledAnswers);
  }, [])

  const checkAnswer = (e) => (e.target.innerText === correct_answer) ? setCorrect(true) : setCorrect(false);

  return(

      <div>
        <h3>{question}</h3>
        <div className="d-grid gap-2">
        {answers.map((item, index) => (
          <Button variant="info" size="lg" key={index} onClick={(e) => {checkAnswer(e); setClicked(true)}}>
            {item}
          </Button>))}
        </div>
        {clicked ? (correct) ? <h2>Correct!</h2> : <h2>Wrong :/</h2> : null}

      </div>
  )
}

export default Question;