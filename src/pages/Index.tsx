import React, { useState } from 'react';
import { CountdownBanner } from '@/components/countdown-banner';
import { StudyFocusCard } from '@/components/study-focus-card';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import campusBackground from '@/assets/campus-background.jpg';

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [studyTime, setStudyTime] = useState("00:00:00");
  const [examTime, setExamTime] = useState("00:30:00");

  const handleStudyStart = () => {
    navigate('/focus/study');
  };

  const handleExamStart = () => {
    navigate('/focus/exam');
  };

  return (
    <div 
      className="min-h-screen bg-gradient-background relative overflow-hidden"
      style={{
        backgroundImage: `url(${campusBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'soft-light'
      }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-background/80 backdrop-blur-[1px]" />
      
      <div className="relative z-10 max-w-md mx-auto px-6 py-8 space-y-6">
        {/* Countdown Banner */}
        <CountdownBanner 
          daysLeft={68} 
          examName="省考"
          className="animate-scale-bounce"
        />

        {/* Study Focus Section */}
        <StudyFocusCard
          title="专注学习"
          time={studyTime}
          lastSessionTime="03:30:00"
          variant="study"
          onStart={handleStudyStart}
          className="animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        />

        {/* Exam Focus Section */}
        <StudyFocusCard
          title="专注备考"
          time={examTime}
          lastSessionTime="03:30:00"
          variant="exam"
          onStart={handleExamStart}
          className="animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        />

        {/* Decorative floating elements */}
        <div className="fixed top-20 left-6 w-3 h-3 bg-accent/40 rounded-full animate-float" />
        <div className="fixed top-40 right-8 w-5 h-5 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />
        <div className="fixed bottom-32 left-4 w-4 h-4 bg-secondary/50 rounded-full animate-float" style={{ animationDelay: '1.8s' }} />
      </div>
    </div>
  );
};

export default Index;
