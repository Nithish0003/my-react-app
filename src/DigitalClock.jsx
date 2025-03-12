import { useState, useEffect } from "react";
import bg from "./assets/image.png";
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  function formatTime(time) {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(
      meridiem
    )}`;
  }
  function padZero(time) {
    return time < 10 ? `0${time}` : time;
  }
  return (
    <div className="container">
      <img
        className="max-h-screen max-w-screen w-full h-full fixed"
        src={bg}
        alt="img"
      />
      <span className=" absolute text-8xl text-white font-bold font-sans">
        {formatTime(time)}
      </span>
    </div>
  );
}
export default DigitalClock;
