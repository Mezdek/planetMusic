import Container from 'react-bootstrap/Container';
import StartPage from './components/StartPage';
import Questions from './components/Questions';
import Highscores from './components/Highscores';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Button from 'react-bootstrap/Button';
import './quiz.css';

function Quiz() {
  const [difficulty, setDifficulty] = useState('');
  const [quizStart, setQuizStart] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [highscores, setHighscores] = useState([
    {
      name: 'Susi',
      score: 300,
      date: '2021/08/23',
    },
    {
      name: 'Tom',
      score: 150,
      date: '2021/09/12',
    },
    {
      name: 'Maggy',
      score: 80,
      date: '2021/08/09',
    },
    {
      name: 'Tony',
      score: 60,
      date: '2021/08/05',
    },
    {
      name: 'Hanna',
      score: 60,
      date: '2021/08/01',
    },
  ]);
  const [newHighscore, setNewHighscore] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    // compare score with highscores and add it to the list, sorted by points and dates
    if (score > highscores[highscores.length - 1].score) {
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
    const newArray = [...highscores, newObj];
    const sortedArray = newArray.sort((a, b) => b.score - a.score);
    if (sortedArray.length > 5) {
      sortedArray.pop();
    }
    setHighscores(sortedArray);
    setNewHighscore(false);
    setIsFinished(false);
  };

  return (
    <Container fluid='md' className='quiz-main-container mt-5'>
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
          {isFinished ? (
            <div className='row justify-content-center m-5'>
              <div className='col-auto border border-warning rounded p-3 bg-info'>
                <h2 className='text-center text-warning'>
                  You reached {score} points!
                </h2>
              </div>
            </div>
          ) : null}

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
                    <Button
                      variant='outline-success'
                      onClick={saveNewHighscore}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : isFinished ? (
            <h2 className='text-center text-info'>
              You missed the top ten :&#40;{' '}
            </h2>
          ) : null}

          {/* show highscores before and after the quiz */}
          <Highscores highscores={highscores} />
        </>
      )}
    </Container>
  );
}

export default Quiz;
