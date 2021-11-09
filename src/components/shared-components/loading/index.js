import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  const styleSpinner = {
    margin: '0 auto',
    width: '50px',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={styleSpinner}>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
