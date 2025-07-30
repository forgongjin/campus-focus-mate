import React from 'react';
import { Button } from '@/components/ui/button';
import { FlipTimer } from '@/components/ui/flip-timer';
import { Play } from 'lucide-react';
import { cn } from "@/lib/utils";

interface StudyFocusCardProps {
  title: string;
  time: string;
  lastSessionTime: string;
  variant: 'study' | 'exam';
  onStart: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const StudyFocusCard: React.FC<StudyFocusCardProps> = ({
  title,
  time,
  lastSessionTime,
  variant,
  onStart,
  className,
  style
}) => {
  return (
    <div 
      className={cn(
        "relative bg-gradient-desk backdrop-blur-sm rounded-2xl p-6 shadow-medium border-2 border-amber-800/20 hover:shadow-glow transition-all duration-300",
        className
      )}
      style={style}
    >
      {/* Wood grain texture effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-amber-200/10 rounded-2xl" />
      <div className="absolute inset-0 opacity-30 rounded-2xl" style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(139, 69, 19, 0.1) 2px,
          rgba(139, 69, 19, 0.1) 4px
        ), repeating-linear-gradient(
          0deg,
          transparent,
          transparent 8px,
          rgba(160, 82, 45, 0.1) 8px,
          rgba(160, 82, 45, 0.1) 16px
        )`
      }} />
      
      {/* Desk items decoration */}
      <div className="absolute top-3 right-4 w-3 h-3 bg-red-400/40 rounded-full shadow-sm" /> {/* 橡皮擦 */}
      <div className="absolute bottom-3 left-4 w-8 h-1 bg-yellow-600/50 rounded-full shadow-sm" /> {/* 铅笔 */}
      <div className="absolute top-4 left-6 w-2 h-2 bg-blue-400/30 rounded-full shadow-sm" /> {/* 钉子 */}
      
      {/* Title */}
      <div className="text-center mb-6 relative z-10">
        <h3 className="text-xl font-bold text-amber-900 mb-2 tracking-wide drop-shadow-sm">
          {title}
        </h3>
      </div>

      <div className="flex items-center justify-center gap-6 relative z-10">
        {/* Timer Section */}
        <div className="flex flex-col items-center">
          <FlipTimer time={time} className="mb-2" />
          <p className="text-xs text-amber-800/70 text-center font-medium">
            上次{variant === 'study' ? '专注学习' : '专注备考'}时长{lastSessionTime}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-center">
          <Button
            variant={variant === 'study' ? 'focus' : 'study'}
            size="focus"
            onClick={onStart}
            className="group relative overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-white/10 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300 fill-current" />
            <span className="relative z-10">{title}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};