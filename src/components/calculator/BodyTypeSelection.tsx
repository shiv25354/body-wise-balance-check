
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { User } from 'lucide-react';

interface BodyTypeSelectionProps {
  bodyType: string;
  setBodyType: (bodyType: string) => void;
}

const BodyTypeSelection = ({ bodyType, setBodyType }: BodyTypeSelectionProps) => {
  return (
    <div className="space-y-2">
      <Label>Body Type</Label>
      <RadioGroup 
        defaultValue="average" 
        value={bodyType}
        onValueChange={setBodyType}
        className="grid grid-cols-3 gap-2"
      >
        <div className="flex flex-col items-center p-3 border rounded-lg hover:border-bmi-primary cursor-pointer">
          <RadioGroupItem value="slim" id="slim" className="sr-only" />
          <Label htmlFor="slim" className="cursor-pointer text-center">
            <User className="h-8 w-8 mx-auto mb-1" />
            <span className="text-sm">Slim</span>
          </Label>
        </div>
        
        <div className="flex flex-col items-center p-3 border rounded-lg hover:border-bmi-primary cursor-pointer">
          <RadioGroupItem value="average" id="average" className="sr-only" />
          <Label htmlFor="average" className="cursor-pointer text-center">
            <User className="h-8 w-8 mx-auto mb-1" />
            <span className="text-sm">Average</span>
          </Label>
        </div>
        
        <div className="flex flex-col items-center p-3 border rounded-lg hover:border-bmi-primary cursor-pointer">
          <RadioGroupItem value="muscular" id="muscular" className="sr-only" />
          <Label htmlFor="muscular" className="cursor-pointer text-center">
            <User className="h-8 w-8 mx-auto mb-1" />
            <span className="text-sm">Muscular</span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default BodyTypeSelection;
