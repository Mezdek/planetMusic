import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import bgImage from '../../../../images/intro-background.png';

function StartPage({ start, setDifficulty }) {
  const [selected, setSelected] = useState('');

  return (
    <div className='text-center'>
      <div className='quiz-hero-image-div'>
        <img src={bgImage} alt='' className='quiz-hero-image-img' />
      </div>

      <div className='m-auto rounded-circle quiz-description'>
        <p className='m-0'>10 questions to test your music knowledge!</p>
        <p className='m-0 mb-3'>
          The faster you answer the more points you'll get - harder questions
          bring higher scores!
        </p>
      </div>

      <h1 className='quiz-intro-heading'>Music Quiz Challenge</h1>

      <div className='bright-background w-50 mt-5 py-2 m-auto quiz-difficulty-select'>
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

        <div className='row justify-content-center'>
          <div className='col-mx-auto col-auto'>
            <Button
              variant='dark'
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
    </div>
  );
}

export default StartPage;
