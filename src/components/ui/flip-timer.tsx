import React from 'react';
import { cn } from "@/lib/utils";

interface FlipTimerProps {
  time: string; // Format: "00:00:00" or "00:00"
  className?: string;
}

const FlipDigit: React.FC<{ digit: string }> = ({ digit }) => {
  return (
    <div className="relative w-12 h-16 mx-1">
      {/* 3D flip card effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-200 rounded-lg shadow-lg border-2 border-slate-300/50">
        {/* Top shadow for depth */}
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg" />
        
        {/* Main digit display */}
        <div className="flex items-center justify-center h-full relative">
          <span className="text-2xl font-bold text-slate-800 font-mono drop-shadow-sm">
            {digit}
          </span>
        </div>
        
        {/* Flip divider line with 3D effect */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-slate-400/50 via-slate-500/70 to-slate-400/50 shadow-sm" />
        
        {/* Bottom shadow for depth */}
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-slate-400/20 to-transparent rounded-b-lg" />
        
        {/* Side highlight for 3D effect */}
        <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-white/60 rounded-l-lg" />
        <div className="absolute right-0 top-1 bottom-1 w-0.5 bg-slate-500/30 rounded-r-lg" />
      </div>
    </div>
  );
};

const TimeSeparator: React.FC = () => (
  <div className="flex flex-col justify-center items-center h-16 mx-2">
    <div className="w-2 h-2 bg-primary/60 rounded-full mb-1" />
    <div className="w-2 h-2 bg-primary/60 rounded-full" />
  </div>
);

export const FlipTimer: React.FC<FlipTimerProps> = ({ time, className }) => {
  const timeDigits = time.replace(/:/g, '').split('');
  const isHourFormat = time.split(':').length === 3;

  return (
    <div className={cn("flex items-center justify-center", className)}>
      {isHourFormat ? (
        <>
          <FlipDigit digit={timeDigits[0]} />
          <FlipDigit digit={timeDigits[1]} />
          <TimeSeparator />
          <FlipDigit digit={timeDigits[2]} />
          <FlipDigit digit={timeDigits[3]} />
          <TimeSeparator />
          <FlipDigit digit={timeDigits[4]} />
          <FlipDigit digit={timeDigits[5]} />
        </>
      ) : (
        <>
          <FlipDigit digit={timeDigits[0]} />
          <FlipDigit digit={timeDigits[1]} />
          <TimeSeparator />
          <FlipDigit digit={timeDigits[2]} />
          <FlipDigit digit={timeDigits[3]} />
        </>
      )}
    </div>
  );
};