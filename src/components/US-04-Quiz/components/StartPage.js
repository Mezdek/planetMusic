import Button from "react-bootstrap/Button"

function StartPage({ start }) {
  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <Button variant="outline-success" onClick={start} >Start</Button>
    </div>
  );
}

export default StartPage;
