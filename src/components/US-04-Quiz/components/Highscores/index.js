function Highscores({ highscores }) {
  return (
    <div className='row justify-content-center mt-3'>
      <div className='col-auto text-center'>
        <h2>Highscores</h2>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col' className='px-3'>
                #
              </th>
              <th scope='col' className='px-3'>
                Name
              </th>
              <th scope='col' className='px-3'>
                Score
              </th>
              <th scope='col' className='px-3'>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {highscores.map((entry, index) => {
              return (
                <tr key={`highscores-${index}`}>
                  <td scope='row'>{index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                  <td>{entry.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Highscores;
