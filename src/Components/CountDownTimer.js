import React, { useEffect, useState } from 'react'


const CountDownTimer = ({events,selectedIndex}) => {
    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        // Parse the target date from transfer.timer
        const eventDate = new Date(events[selectedIndex][0].transfers?.timer).getTime();
    
        // Subtract 48 hours (in milliseconds) from the event date
        const targetDate = eventDate - 48 * 60 * 60 * 1000;
    
        // Update countdown every second
        const interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = targetDate - now;
    
          if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            setCountDown({ days, hours, minutes, seconds });
          } else {
            clearInterval(interval);
            console.log("Countdown to 48 hours before the event has ended.");
          }
        }, 1000);
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, []);

      let days = countDown.days < 10 ? `0${countDown.days}` : countDown.days;
      let hours = countDown.hours < 10? `0${countDown.hours}` : countDown.hours
      let minutes = countDown.minutes < 10 ? `0${countDown.minutes}` : countDown.minutes;
      let seconds = countDown.seconds < 10 ? `0${countDown.seconds}` : countDown.seconds;
  return (
    <div>
    

    <ul
      id="ticket-btns"
      className="flex flex-col item-center justify-center text-center space-y-3 pt-6 h-[230px] "
    >
      <li id="countdown-desc">Ticket will be ready in:</li>

      <li>
        <ul className="flex m-auto item-center justify-center space-x-3 -mt-2">
          <li className="text-center">
            <p id="countdownNo"> {days}</p>
            <p id="countdown-label">DAY</p>
          </li>

          <li className="text-center">
            <p id="countdownNo"> {hours}</p>
            <p id="countdown-label">HOUR</p>
          </li>

          <li className="text-center">
            <p id="countdownNo"> {minutes}</p>
            <p id="countdown-label">MIN</p>
          </li>

          <li className="text-center">
            <p id="countdownNo"> {seconds}</p>
            <p id="countdown-label">SECONDS</p>
          </li>
        </ul>
      </li>
      <li
        className="pb-7"
        style={{
          color: events[selectedIndex][0].transfers?.colorBtn || "#004ee7",
        }}
      >
        {" "}
        <button id="GA-btn">Ticket Details</button>
      </li>
    </ul>
  </div>
  )
}

export default CountDownTimer
