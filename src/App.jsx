import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";
import "./App.css"; // Import the CSS file
import vdo from "../public/vdo.mp4"
import poster from "../public/poster.jpg"
import logo2 from "../public/logo2.png"
function App() {
  const [time, setTime] = useState({ hours: 0, minutes: 4, seconds: 8 });
  const [isTimerComplete, setIsTimerComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          setIsTimerComplete(true);
          return prevTime;
        }

        const newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds < 0) {
          newMinutes -= 1;
          if (newMinutes < 0) {
            newHours -= 1;
            newMinutes = 59;
          }
          return { hours: newHours, minutes: newMinutes, seconds: 59 };
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-container">
      <div className="container">
        {/* Logo */}
        <div className="logo">
        
          <img className="logo-img" src={logo2} alt="logo"  />
        </div>

        {/* Main Content */}
        <div>
          <h2 className="subtitle">Limited Time Training Reveals:</h2>
          <h1 className="main-title">

          

          How I Made <span className="highlight"> ₹324,000+</span> With {" "} 
            <span className="highlight">Faceless </span> Instagram CashPages 
          </h1>
          <p className="subtitle " id="doThe">And How You Can Do The SAME!</p>
        </div>

        {/* Video Container */}
        <div>
          <div className="video-container">
            <video src={vdo}  controls playsInline poster={poster}>
             
            </video>
          </div>

          {/* Timer */}
          <div className="timer-container">
            <div className="timer-box">
              <div className="timer-circle">{String(time.hours).padStart(2, "0")}</div>
              <p className="timer-label">Hour</p>
            </div>
            <div className="timer-box">
              <div className="timer-circle">{String(time.minutes).padStart(2, "0")}</div>
              <p className="timer-label">Minute</p>
            </div>
            <div className="timer-box">
              <div className="timer-circle">{String(time.seconds).padStart(2, "0")}</div>
              <p className="timer-label">Second</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {isTimerComplete && (
          <div>
            <a href="https://www.youtube.com" className="cta-button">
              Buy now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
