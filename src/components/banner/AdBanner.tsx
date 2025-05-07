
import React from 'react';

interface AdBannerProps {
  width: number;
  height: number;
  className?: string;
  position?: 'inline' | 'fixed' | 'sticky';
  format: 'skyscraper' | 'rectangle' | 'leaderboard';
}

const AdBanner = ({ width, height, className = '', position = 'inline', format }: AdBannerProps) => {
  const getFormatName = () => {
    switch (format) {
      case 'skyscraper':
        return 'Wide Skyscraper';
      case 'rectangle':
        return 'Large Rectangle';
      case 'leaderboard':
        return 'Leaderboard Banner';
      default:
        return 'Advertisement';
    }
  };
  
  return (
    <div 
      className={`ad-banner ${position === 'sticky' ? 'sticky top-4' : ''} 
                 ${position === 'fixed' ? 'fixed' : ''} 
                 ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="bg-gray-100 border border-gray-200 rounded-md flex flex-col items-center justify-center h-full">
        <div className="text-gray-400 text-xs mb-2">ADVERTISEMENT</div>
        <div className="font-medium text-gray-500 text-center px-2">{getFormatName()}</div>
        <div className="text-gray-400 text-xs mt-1">{width} x {height}</div>
      </div>
    </div>
  );
};

export default AdBanner;
