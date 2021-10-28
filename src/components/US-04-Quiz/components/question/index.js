function Question({question, correct_answer, incorrect_answers}) {

  return(

      <div>
        <h5>{question}</h5>
        <div>{correct_answer}</div>
        {incorrect_answers.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
  )
}

export default Question;