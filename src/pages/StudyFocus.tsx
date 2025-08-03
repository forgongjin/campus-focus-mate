import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FlipTimer } from "@/components/ui/flip-timer";
import { useNavigate, useParams } from 'react-router-dom';
import { Coffee, Square } from 'lucide-react';
import studyDeskBackground from '@/assets/study-desk-background.jpg';

const StudyFocus = () => {
  const navigate = useNavigate();
  const { type } = useParams<{ type: 'study' | 'exam' }>();
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 默认25分钟

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRest = () => {
    // 休息逻辑
    console.log('Rest clicked');
  };

  const handleEnd = () => {
    navigate('/');
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col justify-between items-center p-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${studyDeskBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 背景叠加层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-transparent to-amber-100/30" />
      
      {/* 左上角艺术字 */}
      <div className="relative z-10 self-start">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          今日份专注，离上岸更进一步！
        </h1>
      </div>

      {/* 中央时间显示 */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <div className="mb-8">
          <div className="text-lg text-amber-700/80 font-medium text-center mb-4">
            {type === 'study' ? '专注学习中' : '专注备考中'}
          </div>
          <FlipTimer 
            time={formatTime(timeLeft)} 
            className="scale-150 md:scale-200" 
          />
        </div>
      </div>

      {/* 右下角按钮 */}
      <div className="relative z-10 self-end flex gap-4">
        <Button
          variant="study"
          size="lg"
          onClick={handleRest}
          className="bg-gradient-to-r from-blue-500/90 to-blue-600/90 hover:from-blue-600/90 hover:to-blue-700/90 backdrop-blur-sm border border-white/20 shadow-xl"
        >
          <Coffee className="w-5 h-5 mr-2" />
          休息
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={handleEnd}
          className="bg-gradient-to-r from-gray-500/90 to-gray-600/90 hover:from-gray-600/90 hover:to-gray-700/90 backdrop-blur-sm border border-white/20 shadow-xl text-white"
        >
          <Square className="w-5 h-5 mr-2" />
          结束
        </Button>
      </div>
    </div>
  );
};

export default StudyFocus;