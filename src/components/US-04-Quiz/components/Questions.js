import { useState, useEffect } from 'react';
import axios from 'axios';

function Questions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=12')
      .then((response) => {
        console.log('setQuestions');
        setQuestions(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Question</h2>
      <div>
        {questions.map((item, index) => (
          <div>
            <h5 key={index}>{item.question}</h5>
            <div key={index}>{item.correct_answer}</div>
            {item.incorrect_answers.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
