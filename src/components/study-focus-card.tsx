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
        "relative bg-gradient-card backdrop-blur-md rounded-3xl p-6 shadow-medium border border-white/20 hover:shadow-glow transition-all duration-300",
        className
      )}
      style={style}
    >
      {/* Floating decorative elements */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent/30 rounded-full animate-float" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2 tracking-wide">
          {title}
        </h3>
      </div>

      <div className="flex items-center justify-between gap-6">
        {/* Timer Section */}
        <div className="flex-1">
          <FlipTimer time={time} className="mb-3" />
          <p className="text-xs text-muted-foreground text-center font-medium">
            上次{variant === 'study' ? '专注学习' : '专注备考'}时长{lastSessionTime}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0">
          <Button
            variant={variant === 'study' ? 'focus' : 'study'}
            size="focus"
            onClick={onStart}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10">{title}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};