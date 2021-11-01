import Container from 'react-bootstrap/Container';
import StartPage from './components/StartPage';
import Questions from './components/Questions';
import Highscores from './components/Highscores';
import { useState } from 'react';
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

  return (
    <Container fluid='md' className='quiz-main-container mt-5'>
      {quizStart && !isFinished ? (
        <Questions
          setIsFinished={setIsFinished}
          score={score}
          setScore={setScore}
          difficulty={difficulty}
        />
      ) : (
        <StartPage
          start={() => setQuizStart(true)}
          setDifficulty={setDifficulty}
        />
      )}

      {isFinished ? (
        <div>
          <h2>You reached {score} points!</h2>
        </div>
      ) : null}

      {!quizStart || isFinished ? <Highscores highscores={highscores} /> : null}
    </Container>
  );
}

export default Quiz;
