import React, { useEffect, useState } from "react";

const Timer = ({ onTimeChange }) => {
  const defaultTimeSec = 2400;
  const [currentTime, setCurrentTime] = useState(defaultTimeSec);

  useEffect(() => {
    if (!currentTime) return;

    const intervalId = setInterval(() => {
      setCurrentTime((prevCurrentTime) => prevCurrentTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  useEffect(() => {
    onTimeChange(currentTime);
  }, [currentTime, onTimeChange]);

  const progress = ((defaultTimeSec - currentTime) / defaultTimeSec) * 100;
  return (
    <div>
      <div className="h-full bg-gray-200 rounded-2xl">
        <div>
          <div
            className="h-12 bg-footer-blue rounded-lg text-white text-center text-2xl mx-auto flex justify-center items-center"
            style={{
              width: `${100 - progress}%`,
            }}
          >
            {`${parseInt(currentTime / 60)}분 ${currentTime % 60}초`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
