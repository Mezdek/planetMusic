export default function TimeFormat({ time }) {
  let hours = "0" + parseInt(time / 3600, 10);
  let minutes = "0" + parseInt((time % 3600) / 60, 10);
  let seconds = "0" + parseInt((time % 3600) % 60, 10);
  if (time >= 3600) {
    return (
      <div className="time">
        {hours.slice(-2) + ":" + minutes.slice(-2) + ":" + seconds.slice(-2)}
      </div>
    );
  } else {
    return (
      <div className="time">{minutes.slice(-2) + ":" + seconds.slice(-2)}</div>
    );
  }
}
