import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../shared-components/loading';
import Question from "../question";

function Questions() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log('start api call');
    axios
      .get('https://opentdb.com/api.php?amount=10&category=12')
      .then((response) => {
        console.log('setting Questions');
        setQuestions(response.data.results);
        console.log('questions set ', questions);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div>{loading ? <Loading /> : <Question {...questions[questionCounter]} score={score} setScore={setScore} questionCounter={questionCounter} setQuestionCounter={setQuestionCounter} />}</div>;
}

export default Questions;
