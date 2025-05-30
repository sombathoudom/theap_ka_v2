import React, { useState, useEffect } from "react";

const Countdown = () => {
    const targetDate = new Date("2025-05-31T09:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    function getTimeRemaining() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }


    const toKhmerNumber = (number: number): string => {
        const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
        return number
        .toString()
        .split('')
        .map((digit) => {
            const index = parseInt(digit, 10);
            return isNaN(index) ? digit : khmerDigits[index];
        })
        .join('');
    };

    useEffect(() => {
        const interval = setInterval(() => {
        setTimeLeft(getTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <div className="flex justify-between gap-6 text-xl md:gap-10">
                    <div className="flex flex-col items-center gap-y-2">
                        <span className="text-2xl font-bold text-nude2 moul-regular md:text-3xl">
                        {toKhmerNumber(timeLeft.days)}
                        </span>
                        <span className="text-nude2 moul-regular text-lg md:text-2xl">ថ្ងៃ</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <span className="text-2xl font-bold text-nude2 moul-regular md:text-3xl">
                        {toKhmerNumber(timeLeft.hours)}
                        </span>
                        <span className="text-nude2 moul-regular text-lg md:text-2xl">ម៉ោង</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <span className="text-2xl font-bold text-nude2 moul-regular md:text-3xl">
                        {toKhmerNumber(timeLeft.minutes)}
                        </span>
                        <span className="text-nude2 moul-regular text-lg md:text-2xl">នាទី</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <span className="text-2xl font-bold text-nude2 moul-regular md:text-3xl">
                        {toKhmerNumber(timeLeft.seconds)}
                        </span>
                        <span className="text-nude2 moul-regular text-lg md:text-2xl">វិនាទី</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
