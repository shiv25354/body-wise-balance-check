
import React from 'react';
import AdBanner from './AdBanner';

interface LargeRectangleAdProps {
  className?: string;
  position?: 'inline' | 'fixed' | 'sticky';
}

const LargeRectangleAd = ({ className, position }: LargeRectangleAdProps) => {
  return (
    <AdBanner 
      width={336} 
      height={280} 
      className={className} 
      position={position} 
      format="rectangle" 
      label="Advertisement"
    />
  );
};

export default LargeRectangleAd;
