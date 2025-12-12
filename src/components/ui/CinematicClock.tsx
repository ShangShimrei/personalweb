import React, { useEffect, useState } from 'react';

// Single Digit Component handles the vertical sliding animation
const AnimatedDigit = ({ value }: { value: string }) => {
  const numValue = parseInt(value);
  const isNumber = !isNaN(numValue);
  
  if (!isNumber) {
    return <span className="inline-block mx-0.5 text-zinc-400">{value}</span>;
  }

  // We render a column of numbers 0-9 and translate the column
  return (
    <div className="relative h-4 w-3 md:h-5 md:w-4 overflow-hidden inline-block align-top">
      <div 
        className="flex flex-col transition-transform duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)"
        style={{ transform: `translateY(-${numValue * 10}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div key={num} className="h-4 md:h-5 flex items-center justify-center text-white">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CinematicClock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="font-mono text-xs md:text-sm font-bold tracking-widest flex items-center select-none text-white leading-none">
       <div className="flex"><AnimatedDigit value={hours[0]} /><AnimatedDigit value={hours[1]} /></div>
       <span className="text-emerald-400 animate-pulse mx-1 mt-[-2px]">:</span>
       <div className="flex"><AnimatedDigit value={minutes[0]} /><AnimatedDigit value={minutes[1]} /></div>
       <span className="text-emerald-400 animate-pulse mx-1 mt-[-2px]">:</span>
       <div className="flex text-emerald-400"><AnimatedDigit value={seconds[0]} /><AnimatedDigit value={seconds[1]} /></div>
    </div>
  );
};

export const CinematicDate: React.FC = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 60000); 
        return () => clearInterval(timer);
    }, []);

    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).toUpperCase();

    return <span className="text-zinc-400 font-mono text-xs md:text-sm tracking-widest">{formattedDate}</span>;
}