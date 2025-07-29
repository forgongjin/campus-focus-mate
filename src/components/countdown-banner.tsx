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
      "relative bg-gradient-primary rounded-3xl p-8 shadow-glow overflow-hidden",
      className
    )}>
      {/* Background decorative elements */}
      <div className="absolute top-4 right-6 w-16 h-16 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-6 left-8 w-8 h-8 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-12 w-12 h-12 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-black text-white tracking-wider">
          距离
          <span className="mx-3 px-4 py-1 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
            {examName}
          </span>
          还剩
        </h1>
        <div className="mt-4 flex items-center justify-center">
          <div className="relative">
            <span className="text-6xl font-black text-white drop-shadow-lg">
              {daysLeft}
            </span>
            <div className="absolute -inset-2 bg-white/10 rounded-2xl blur-xl animate-pulse" />
          </div>
          <span className="text-2xl font-bold text-white/90 ml-3">天</span>
        </div>
        
        {/* Motivational sparkle */}
        <div className="mt-2 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white/60 rounded-full animate-ping"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};