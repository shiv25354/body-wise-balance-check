
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface GenderSelectionProps {
  gender: string;
  setGender: (gender: string) => void;
}

const GenderSelection = ({ gender, setGender }: GenderSelectionProps) => {
  return (
    <div className="space-y-2">
      <Label>Gender</Label>
      <RadioGroup 
        defaultValue="male" 
        value={gender}
        onValueChange={setGender}
        className="flex space-x-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="male" id="male" />
          <Label htmlFor="male">Male</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="female" id="female" />
          <Label htmlFor="female">Female</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default GenderSelection;
