import React from 'react';
import { cn } from "@/lib/utils";

interface FlipTimerProps {
  time: string; // Format: "00:00:00" or "00:00"
  className?: string;
}

const FlipDigit: React.FC<{ digit: string }> = ({ digit }) => {
  return (
    <div className="relative w-12 h-16 mx-1">
      <div className="absolute inset-0 bg-gradient-card backdrop-blur-sm rounded-lg shadow-soft border border-white/20">
        <div className="flex items-center justify-center h-full">
          <span className="text-2xl font-bold text-foreground font-mono">
            {digit}
          </span>
        </div>
        {/* Subtle divider line for flip effect */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-border/30" />
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