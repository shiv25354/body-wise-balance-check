
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MobileLeaderboardBanner = () => {
  const isMobile = useIsMobile();
  
  // Only render the banner on mobile devices
  if (!isMobile) return null;
  
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-2 pb-2">
      <div 
        className="bg-gradient-to-r from-bmi-primary to-bmi-accent rounded-md shadow-lg mx-auto flex items-center justify-between px-3"
        style={{ width: '320px', height: '50px' }}
      >
        <div className="text-white font-medium text-sm">
          <span>Calculate your BMI now!</span>
        </div>
        
        <Button 
          asChild 
          size="sm" 
          className="bg-white text-bmi-primary hover:bg-gray-100 hover:text-bmi-accent"
        >
          <Link to="/#calculator">
            <span>Try it</span>
            <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileLeaderboardBanner;
