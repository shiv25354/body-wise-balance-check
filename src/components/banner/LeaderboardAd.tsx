
import React from 'react';
import AdBanner from './AdBanner';

interface LeaderboardAdProps {
  className?: string;
  position?: 'inline' | 'fixed' | 'sticky';
}

const LeaderboardAd = ({ className, position }: LeaderboardAdProps) => {
  return (
    <AdBanner 
      width={728} 
      height={90} 
      className={className} 
      position={position} 
      format="leaderboard" 
    />
  );
};

export default LeaderboardAd;
