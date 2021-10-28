function Question({question, correct_answer, incorrect_answers}) {

  const answers = [correct_answer, ...incorrect_answers];
  const shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());

  return(

      <div>
        <h5>{question}</h5>
        {shuffledAnswers.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
  )
}

export default Question;