import React from 'react';
import { cn } from "@/lib/utils";

interface CountdownBannerProps {
  daysLeft: number;
  examName?: string;
  className?: string;
}

export const CountdownBanner: React.FC<CountdownBannerProps> = ({
  daysLeft,
  examName = "省考",
  className
}) => {
  return (
    <div className={cn(
      "relative bg-gradient-blackboard rounded-2xl p-8 shadow-glow overflow-hidden border-4 border-amber-900/30",
      className
    )}>
      {/* Chalk dust particles */}
      <div className="absolute top-3 right-4 w-2 h-2 bg-white/20 rounded-full animate-float" />
      <div className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-8 w-1 h-1 bg-white/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-6 left-10 w-1.5 h-1.5 bg-white/10 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Chalk text effect */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-bold text-white tracking-wide filter drop-shadow-sm" style={{ 
          textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 8px rgba(255,255,255,0.1)',
          fontFamily: 'cursive'
        }}>
          距离
          <span className="mx-3 px-3 py-1 bg-white/15 rounded-lg backdrop-blur-sm border border-white/20 shadow-inner">
            {examName}
          </span>
          还剩
        </h1>
        <div className="mt-4 flex items-center justify-center">
          <div className="relative">
            <span className="text-6xl font-black text-white filter drop-shadow-lg" style={{ 
              textShadow: '3px 3px 6px rgba(0,0,0,0.4), 0 0 12px rgba(255,255,255,0.15)',
              fontFamily: 'cursive'
            }}>
              {daysLeft}
            </span>
            <div className="absolute -inset-3 bg-white/5 rounded-xl blur-lg animate-pulse" />
          </div>
          <span className="text-2xl font-bold text-white/90 ml-3" style={{ 
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontFamily: 'cursive'
          }}>天</span>
        </div>
        
        {/* Chalk marks and eraser marks */}
        <div className="mt-3 flex justify-center space-x-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 h-4 bg-white/30 rounded-full opacity-50"
              style={{ transform: `rotate(${(i - 2) * 15}deg)` }}
            />
          ))}
        </div>
        
        {/* Simple chalk traces */}
        <div className="absolute top-8 left-12 w-8 h-0.5 bg-white/15 rounded-full transform rotate-12" />
        <div className="absolute bottom-8 right-16 w-6 h-0.5 bg-white/10 rounded-full transform -rotate-6" />
        <div className="absolute top-16 right-20 w-4 h-0.5 bg-white/12 rounded-full transform rotate-45" />
      </div>
    </div>
  );
};