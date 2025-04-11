import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";
import "./App.css"; // Import the CSS file
import vdo from "../public/vdo.mp4"
import poster from "../public/poster2.png"
import logo2 from "../public/logo2.png"
import Loading from "./loading";
function MainContent() {
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
    <>
    
    <div className="app-container">
      <div className="container">
    
        {/* Main Content */}
        <div>
          <h2 className="subtitle">Limited Time Training Reveals:</h2>
          <h1 className="main-title">

          

          How I Made <span className="highlight"> ₹324,000+</span> With {" "} 
            <span className="highlight">Automated </span> Instagram CashPages 
          </h1>
          <p className="subtitle " id="doThe" ><b>And How You Can Do The SAME!</b></p>
          <p className="subtitle" id="sub2" >Watch The <b>Complete</b> Video Below</p>
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
            <a href="https://superprofile.bio/course/9da35b5f-14ea-4352-9c18-d7a55a3d0e6f?checkout=true" className="cta-button">
              Buy now for ₹199

            </a>
          </div>
        )}
      </div>
    </div>
    <footer>This website is not part of the Meta, Instagram, or Facebook. Additionally, this site is not endorsed by Meta, Instagram, or Facebook in any way. Facebook and Instagram are trademarks of Meta Platforms, Inc.</footer>
    </>
  );
}

export default MainContent;




