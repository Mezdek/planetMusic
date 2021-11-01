import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../shared-components/loading';
import Question from "../Question";

function Questions({setIsFinished, score, setScore, difficulty}) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(0);
  

  useEffect(() => {
    console.log('start api call');
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=12&difficulty=${difficulty}`)
      .then((response) => {
        console.log('setting Questions');
        setQuestions(response.data.results);
        console.log('questions set ', questions);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  function nextQuestion() {
    if (questionCounter === 9) {
      setIsFinished(true)
    } else {
    setQuestionCounter(questionCounter + 1);
    // as the key value of the component ist set to questionCounter, it will automatically trigger a new instance of the component, which is what I want to reset the style changes of the buttons
    }
  }

  return (
    <div>
      <h2 className='text-center'>Score: {score}</h2>
      {loading ? <Loading /> : <Question key={questionCounter} {...questions[questionCounter]} score={score} setScore={setScore} nextQuestion={nextQuestion} />}
    </div>
  )
}

export default Questions;
