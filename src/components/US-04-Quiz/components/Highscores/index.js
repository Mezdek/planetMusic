function Highscores({ highscores }) {
  return (
    <div>
      <h2>Highscores</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {highscores.map((entry, index) => {
            return (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
                <td>{entry.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Highscores;
