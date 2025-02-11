import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Add padding function for numbers less than 10
  const padNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target date in UTC+7
      const targetDate = new Date("2025-03-18T00:00:00+07:00");
      const now = new Date();

      // Convert current time to UTC+7
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const currentDateUTC7 = new Date(utc + 3600000 * 7);

      const difference = targetDate.getTime() - currentDateUTC7.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every hour
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="w-fit shrink-0 ~text-[0.75rem]/[2.25rem] ~leading-[1rem]/[3.375rem]">
      {padNumber(timeLeft.days)}일 : {padNumber(timeLeft.hours)}시간 :{" "}
      {padNumber(timeLeft.minutes)}분 : {padNumber(timeLeft.seconds)}초
    </span>
  );
};

export default Countdown;
