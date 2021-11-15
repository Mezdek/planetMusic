import Container from 'react-bootstrap/Container';
import StartPage from './components/StartPage';
import Questions from './components/Questions';
import Highscores from './components/Highscores';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Button from 'react-bootstrap/Button';
import './quiz.css';
import axios from 'axios';

function Quiz() {
  const [difficulty, setDifficulty] = useState('');
  const [quizStart, setQuizStart] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [highscores, setHighscores] = useState([]);
  const [newHighscore, setNewHighscore] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    axios
      .get('/quiz/scores')
      .then((response) => setHighscores(response.data[0]))
      .catch((err) => console.log(err));
  }, [newHighscore]);

  useEffect(() => {
    // compare score with highscores and add it to the list, sorted by points and dates
    // not yet sorting by date
    // 9 hardcoded because limit to 10 entries in db not yet set (need a delete if more than 10)
    if (highscores.length < 10 || score > highscores[9].score) {
      setNewHighscore(true);
    }
  }, [isFinished]);

  const start = () => {
    // reset everything when Start button is clicked
    setQuizStart(true);
    setIsFinished(false);
    setName('');
    setScore(0);
  };

  const saveNewHighscore = () => {
    const newObj = {
      name: name,
      score: score,
      date: format(Date.now(), 'yyyy/MM/dd'),
    };

    axios
      .post('/quiz/scores', newObj)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    setNewHighscore(false);
    setIsFinished(false);
  };

  return (
    <Container fluid='md' className='mt-4'>
      {/* show questions as long as the quiz is started and not finished */}
      {quizStart && !isFinished ? (
        <Questions
          setIsFinished={setIsFinished}
          score={score}
          setScore={setScore}
          difficulty={difficulty}
          setQuizStart={setQuizStart}
        />
      ) : (
        <>
          {/* show startpage before and after the quiz */}
          <StartPage start={start} setDifficulty={setDifficulty} />

          {/* only after the quiz show the score */}
          {isFinished && (
            <div className='row justify-content-center m-5'>
              <div className='col-auto border border-warning rounded p-3 bg-dark'>
                <h2 className='text-center text-warning'>
                  You reached {score} points!
                </h2>
              </div>
            </div>
          )}

          {/* show if it's a new highscore */}
          {isFinished && newHighscore ? (
            <div className='row justify-content-center m-5'>
              <div>
                <h2 className='text-center text-info'>
                  This is a new Highscore!
                </h2>
                <div className='row justify-content-center align-items-center'>
                  <div className='col p-0 col-auto'>
                    <input
                      className='form-control my-1'
                      type='text'
                      id='highscore-input'
                      placeholder='Please enter your name...'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='col p-0 col-auto'>
                    <Button variant='secondary' onClick={saveNewHighscore}>
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            isFinished && (
              <h2 className='text-center text-info'>
                You missed the top ten :&#40;{' '}
              </h2>
            )
          )}

          {/* show highscores before and after the quiz */}
          <Highscores highscores={highscores} />
        </>
      )}
    </Container>
  );
}

export default Quiz;
