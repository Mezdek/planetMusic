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

  const saveNewHighscore = () => {
    const newObj = {
      name: name,
      score: score,
      date: format(Date.now(), 'yyyy/MM/dd'),
    };
    const newArray = [...highscores, newObj];
    const sortedArray = newArray.sort((a, b) => b.score - a.score);
    setHighscores(sortedArray);
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
        />
      ) : (
        <>
          {/* show startpage before and after the quiz */}
          <StartPage
            start={() => setQuizStart(true)}
            setDifficulty={setDifficulty}
          />

          {/* only after the quiz show the score */}
          {isFinished ? (
            <div>
              <h2>You reached {score} points!</h2>
            </div>
          ) : null}

          {/* show if it's a new highscore */}
          {isFinished && newHighscore ? (
            <div>
              <h2>This is a new Highscore!</h2>
              <label htmlFor='highscore-input'>Please enter your name</label>
              <input
                type='text'
                id='highscore-input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button variant='outline-success' onClick={saveNewHighscore}>
                Save
              </Button>
            </div>
          ) : isFinished ? (
            <h2>You missed the top ten :&#40; </h2>
          ) : null}

          {/* show highscores before and after the quiz */}
          <Highscores highscores={highscores} />
        </>
      )}
    </Container>
  );
}

export default Quiz;
