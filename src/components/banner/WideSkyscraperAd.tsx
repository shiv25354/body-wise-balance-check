
import React from 'react';
import AdBanner from './AdBanner';

interface WideSkyscraperAdProps {
  className?: string;
  position?: 'inline' | 'fixed' | 'sticky';
}

const WideSkyscraperAd = ({ className, position }: WideSkyscraperAdProps) => {
  return (
    <AdBanner 
      width={160} 
      height={600} 
      className={className} 
      position={position} 
      format="skyscraper" 
    />
  );
};

export default WideSkyscraperAd;
