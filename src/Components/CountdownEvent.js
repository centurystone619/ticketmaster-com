import React, { useEffect} from 'react';

const CountDownEvent = ({countdown,setCountdown, eventTime:eventData }) => {
  


  useEffect(() => {

   const { month, day, time, year } = eventData;
    const eventDate = new Date(`${month} ${day}, ${year} ${time}`);

    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate - now;

      if (isNaN(diff)) {
        setCountdown('Enjoy your event');
        return;
      }

      if (diff <= 60000) {
        setCountdown('HAPPENING NOW');
        return;
      }

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days >= 1) {
        setCountdown(`${days} day${days !== 1 ? 's' : ''} `);
      } else if (hours >= 1) {
        setCountdown(`${hours} hour${hours !== 1 ? 's' : ''} `);
      } else if (minutes >= 1) {
        setCountdown(`${minutes} minute${minutes !== 1 ? 's' : ''} `);
      } else {
        setCountdown(`${seconds} second${seconds !== 1 ? 's' : ''} `);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [eventData]);


  return <div className='text-center text-[18px] z-10 bg-transparent' >
   {!eventData.time ? '':'Next Event:'}  <span className='font-bold'>{countdown}</span>
  </div>;
};

export default CountDownEvent;
