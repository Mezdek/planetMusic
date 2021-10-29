import Container from 'react-bootstrap/Container';
import StartPage from './components/StartPage';
import Questions from './components/questions';
import { useState } from 'react';
import "./quiz.css";

function Quiz() {
  const [quizStart, setQuizStart] = useState(false);

  return (
    <Container fluid='md' className="quiz-main-container">
      {quizStart ? (
        <Questions />
      ) : (
        <StartPage start={() => setQuizStart(true)} />
      )}
    </Container>
  );
}

export default Quiz;
