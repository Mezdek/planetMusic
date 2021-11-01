import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function StartPage({ start, setDifficulty }) {
  const [selected, setSelected] = useState('');

  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <p>Test your knowledge with 10 questions</p>
      <h3>Select a difficulty</h3>
      <p>
        Easy questions bring 10, medium ones 30 and hard questions bring 50
        points!
      </p>
      <select
        name='difficulty'
        id='quiz-difficulty'
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value=''>Any</option>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
      <Button
        variant='outline-success'
        size='lg'
        className='d-block mt-5 mb-5'
        onClick={() => {
          start();
          setDifficulty(selected);
        }}
      >
        Start
      </Button>
    </div>
  );
}

export default StartPage;
