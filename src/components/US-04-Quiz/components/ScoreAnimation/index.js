import { useEffect, useRef } from 'react';
import './scoreAnimation.css';

function ScoreAnimation({ score }) {
  const scoreRef = useRef(score);

  useEffect(() => {
    console.log(scoreRef.current);
  }, [score]);

  return (
    <div className='score-animation-container text-center mb-3'>
      {score - scoreRef.current !== 0 && (
        <div className='score-animation'>+ {score - scoreRef.current}</div>
      )}
      <h2>Score: {score}</h2>
    </div>
  );
}

export default ScoreAnimation;
