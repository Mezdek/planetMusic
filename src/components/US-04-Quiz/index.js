import Container from 'react-bootstrap/Container';
import StartPage from './components/StartPage';
import Questions from './components/Questions';
import { useState } from 'react';

function Quiz() {
  const [quizStart, setQuizStart] = useState(false);

  return (
    <Container fluid='md'>
      {quizStart ? (
        <Questions />
      ) : (
        <StartPage start={() => setQuizStart(true)} />
      )}
    </Container>
  );
}

export default Quiz;
