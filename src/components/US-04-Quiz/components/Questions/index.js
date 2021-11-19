import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../shared-components/loading';
import Question from '../question';
import { decodeHtml } from '../../../../helpers';

function Questions({
  setIsFinished,
  score,
  setScore,
  difficulty,
  setQuizStart,
}) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(0);

  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=10&category=12&difficulty=${difficulty}`;
    axios
      // when difficulty is an empty string it defaults to "any", which is a mix of all three difficulty levels
      .get(url)
      .then((response) => {
        // decoding the html characters (see below)
        let results = [...response.data.results];
        results.forEach((obj) => {
          obj.question = decodeHtml(obj.question);
          obj.correct_answer = decodeHtml(obj.correct_answer);
          obj.incorrect_answers = obj.incorrect_answers.map((el) =>
            decodeHtml(el)
          );
        });
        // setting the questions array and then end the loading screen
        setQuestions(results);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  function nextQuestion() {
    if (questionCounter === questions.length - 1) {
      setIsFinished(true);
      setQuizStart(false);
    } else {
      setQuestionCounter(questionCounter + 1);
      // as the key value of the component is set to questionCounter, it will automatically trigger a new instance of the component, which is what I want to reset the style changes of the buttons
    }
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Question
          key={questionCounter}
          {...questions[questionCounter]}
          score={score}
          setScore={setScore}
          nextQuestion={nextQuestion}
          questionCounter={questionCounter}
          questionsQuantity={questions.length}
        />
      )}
    </div>
  );
}

export default Questions;
