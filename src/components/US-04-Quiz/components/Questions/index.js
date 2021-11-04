import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../shared-components/loading';
import Question from "../Question";

function Questions({setIsFinished, score, setScore, difficulty, setQuizStart}) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(0);
  

  useEffect(() => {
    axios
      // when difficulty is an empty string it defaults to "any", which is a mix of all three difficulty levels
      .get(`https://opentdb.com/api.php?amount=10&category=12&difficulty=${difficulty}`)
      .then((response) => {
        // decoding the html characters (see below)
        let results = [...response.data.results];
        results.forEach(obj => {
          obj.question = decodeHtml(obj.question);
          obj.correct_answer = decodeHtml(obj.correct_answer);
          obj.incorrect_answers = obj.incorrect_answers.map((el) => decodeHtml(el));
        })
        // setting the questions array and then end the loading screen
        setQuestions(results);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);


  // the API returns strings with special html entities like &#39; for apostrophes
  // this trick inserts the string into a textarea and returns its value, thereby decoding the html characters
  function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

  function nextQuestion() {
    if (questionCounter === 9) {
      setIsFinished(true);
      setQuizStart(false);
    } else {
    setQuestionCounter(questionCounter + 1);
    // as the key value of the component is set to questionCounter, it will automatically trigger a new instance of the component, which is what I want to reset the style changes of the buttons
    }
  }

  return (
    <div>
      {loading ? <Loading /> : <Question key={questionCounter} {...questions[questionCounter]} score={score} setScore={setScore} nextQuestion={nextQuestion} questionCounter={questionCounter} />}
    </div>
  )
}

export default Questions;
