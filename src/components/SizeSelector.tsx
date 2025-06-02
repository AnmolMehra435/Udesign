
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

interface SizeSelectorProps {
  size: string;
  gender: 'M' | 'F';
  onSizeChange: (size: string) => void;
  onGenderChange: (gender: 'M' | 'F') => void;
}

const sizeData = {
  XS: { chest: 81, length: 66 },
  S: { chest: 86, length: 69 },
  M: { chest: 91, length: 71 },
  L: { chest: 96, length: 74 },
  XL: { chest: 101, length: 76 },
  XXL: { chest: 106, length: 79 }
};

const SizeSelector = ({ size, gender, onSizeChange, onGenderChange }: SizeSelectorProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-4">
        Size & Gender Selection
      </h3>
      
      {/* Gender Selection */}
      <div className="mb-6">
        <Label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 block">
          Gender
        </Label>
        <div className="flex gap-2">
          <Button
            variant={gender === 'M' ? 'default' : 'outline'}
            onClick={() => onGenderChange('M')}
            className="flex-1"
          >
            Male
          </Button>
          <Button
            variant={gender === 'F' ? 'default' : 'outline'}
            onClick={() => onGenderChange('F')}
            className="flex-1"
          >
            Female
          </Button>
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <Label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 block">
          T-Shirt Size
        </Label>
        <RadioGroup value={size} onValueChange={onSizeChange} className="grid grid-cols-2 gap-4">
          {Object.entries(sizeData).map(([sizeKey, measurements]) => (
            <div key={sizeKey} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <RadioGroupItem value={sizeKey} id={sizeKey} />
              <Label 
                htmlFor={sizeKey} 
                className="flex-1 cursor-pointer font-medium text-gray-900 dark:text-gray-100"
              >
                <div className="font-bold">{sizeKey}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Chest: {measurements.chest}cm
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Length: {measurements.length}cm
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default SizeSelector;
