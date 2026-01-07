import React, { useState, useEffect } from "react";
import { toKhmerNumeral } from "./data/sample";

// 1. Define the State interface
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

interface CountdownProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  // Initialize state with the interface
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  // Helper to convert numbers to Khmer Numerals
  // Changed 'num' type to number | string for better flexibility

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft((prev) => ({ ...prev, isExpired: true }));
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          isExpired: false,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isExpired) {
    return (
      <div className="text-center font-moulpali text-red-600 animate-bounce">
        កម្មវិធីបានចាប់ផ្តើមហើយ!
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 font-moulpali">
      <TimeUnit value={toKhmerNumeral(timeLeft.days)} label="ថ្ងៃ" />
      <TimeUnit value={toKhmerNumeral(timeLeft.hours)} label="ម៉ោង" />
      <TimeUnit value={toKhmerNumeral(timeLeft.minutes)} label="នាទី" />
      <TimeUnit value={toKhmerNumeral(timeLeft.seconds)} label="វិនាទី" />
    </div>
  );
};

// 2. Define Props interface for the Sub-component
interface TimeUnitProps {
  value: string;
  label: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/80 backdrop-blur-md border border-amber-200 shadow-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl text-2xl md:text-3xl text-amber-900">
      {value}
    </div>
    <span className="text-xs md:text-sm mt-2 text-white uppercase tracking-wide">
      {label}
    </span>
  </div>
);

export default CountdownTimer;
