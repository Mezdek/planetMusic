import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function StartPage({ start, setDifficulty }) {
  const [selected, setSelected] = useState('');

  return (
    <div className='text-center'>
      <h1 className='text-info'>
        10 Questions to prove you're a real music nerd
      </h1>

      <div className='row justify-content-center align-items-center mt-4'>
        <div className='col-auto'>
          <h4>Select a difficulty</h4>
        </div>
        <div className='col-auto'>
          <select
            className='form-control custom-select form-select'
            name='difficulty'
            id='quiz-difficulty'
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value=''>Any</option>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>
      </div>

      <p>
        Easy questions bring 10, medium ones 30 and hard questions bring 50
        points!
      </p>

      <div className='row justify-content-center'>
        <div className='col-mx-auto col-auto'>
          <Button
            variant='outline-success'
            size='lg'
            className='d-block mt-3 mb-2'
            onClick={() => {
              start();
              setDifficulty(selected);
            }}
          >
            Start the Quiz!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
