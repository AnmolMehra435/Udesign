import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DressConfig {
  garmentType: string;
  bodice: string;
  skirt: string;
  sleeves: string;
  color: string;
}

interface DesignControlsProps {
  config: DressConfig;
  onConfigChange: (newConfig: DressConfig) => void;
}

const DesignControls = ({ config, onConfigChange }: DesignControlsProps) => {
  const garmentTypes = [
    { id: 'dress', name: 'Dress', description: 'Classic full dress' },
    { id: 'top', name: 'Top', description: 'Stylish blouse or shirt' },
    { id: 'skirt', name: 'Skirt', description: 'Standalone skirt' },
    { id: 'jumpsuit', name: 'Jumpsuit', description: 'One-piece outfit' },
    { id: 'coat', name: 'Coat', description: 'Elegant outerwear' },
    { id: 'pants', name: 'Pants', description: 'Tailored trousers' }
  ];

  const bodiceOptions = [
    { id: 'vneck', name: 'V-Neck', description: 'Classic elegant neckline' },
    { id: 'scoop', name: 'Scoop', description: 'Soft curved neckline' },
    { id: 'strapless', name: 'Strapless', description: 'Modern minimalist style' },
    { id: 'halter', name: 'Halter', description: 'Chic neck-tie design' },
    { id: 'offShoulder', name: 'Off-Shoulder', description: 'Romantic shoulder exposure' },
    { id: 'boatneck', name: 'Boat Neck', description: 'Wide horizontal neckline' }
  ];

  const skirtOptions = [
    { id: 'aline', name: 'A-Line', description: 'Universally flattering' },
    { id: 'pencil', name: 'Pencil', description: 'Sleek and fitted' },
    { id: 'ballgown', name: 'Ball Gown', description: 'Dramatic and full' },
    { id: 'mermaid', name: 'Mermaid', description: 'Figure-hugging glamour' },
    { id: 'pleated', name: 'Pleated', description: 'Textured movement' },
    { id: 'wrap', name: 'Wrap', description: 'Adjustable and comfortable' }
  ];

  const sleeveOptions = [
    { id: 'none', name: 'Sleeveless', description: 'Clean and simple' },
    { id: 'cap', name: 'Cap', description: 'Delicate coverage' },
    { id: 'short', name: 'Short', description: 'Classic comfort' },
    { id: 'long', name: 'Long', description: 'Elegant sophistication' },
    { id: 'puff', name: 'Puff', description: 'Romantic volume' },
    { id: 'bell', name: 'Bell', description: 'Flared dramatic style' },
    { id: 'bishop', name: 'Bishop', description: 'Gathered at wrist' }
  ];

  const colorOptions = [
    { id: 'charcoal', name: 'Charcoal', hex: '#374151' },
    { id: 'slate', name: 'Slate', hex: '#64748b' },
    { id: 'stone', name: 'Stone', hex: '#78716c' },
    { id: 'zinc', name: 'Zinc', hex: '#71717a' },
    { id: 'neutral', name: 'Neutral', hex: '#737373' },
    { id: 'black', name: 'Black', hex: '#000000' },
    { id: 'white', name: 'White', hex: '#ffffff' },
    { id: 'lightGray', name: 'Light Gray', hex: '#d1d5db' },
    { id: 'navy', name: 'Navy', hex: '#1e3a8a' },
    { id: 'emerald', name: 'Emerald', hex: '#047857' },
    { id: 'purple', name: 'Purple', hex: '#7c2d92' },
    { id: 'rose', name: 'Rose', hex: '#e11d48' },
    { id: 'amber', name: 'Amber', hex: '#d97706' },
    { id: 'teal', name: 'Teal', hex: '#0f766e' },
    { id: 'indigo', name: 'Indigo', hex: '#4338ca' },
    { id: 'crimson', name: 'Crimson', hex: '#dc143c' },
    { id: 'forest', name: 'Forest', hex: '#228b22' },
    { id: 'royal', name: 'Royal', hex: '#4169e1' },
    { id: 'burgundy', name: 'Burgundy', hex: '#800020' },
    { id: 'coral', name: 'Coral', hex: '#ff7f50' }
  ];

  const updateConfig = (key: keyof DressConfig, value: string) => {
    onConfigChange({ ...config, [key]: value });
  };

  const resetDesign = () => {
    onConfigChange({
      garmentType: 'dress',
      bodice: 'vneck',
      skirt: 'aline',
      sleeves: 'none',
      color: 'charcoal'
    });
  };

  return (
    <div className="space-y-6">
      {/* Garment Type Selection */}
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-black mb-4 text-gray-900 dark:text-gray-100">Garment Type</h3>
        <div className="grid grid-cols-2 gap-3">
          {garmentTypes.map((option) => (
            <button
              key={option.id}
              onClick={() => updateConfig('garmentType', option.id)}
              className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500 ${
                config.garmentType === option.id 
                  ? 'border-gray-600 dark:border-gray-400 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100' 
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="font-bold">{option.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{option.description}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Bodice Selection */}
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-black mb-4 text-gray-900 dark:text-gray-100">Bodice Style</h3>
        <div className="grid grid-cols-2 gap-3">
          {bodiceOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => updateConfig('bodice', option.id)}
              className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500 ${
                config.bodice === option.id 
                  ? 'border-gray-600 dark:border-gray-400 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100' 
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="font-bold">{option.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{option.description}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Skirt Selection */}
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-black mb-4 text-gray-900 dark:text-gray-100">Skirt Style</h3>
        <div className="grid grid-cols-2 gap-3">
          {skirtOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => updateConfig('skirt', option.id)}
              className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500 ${
                config.skirt === option.id 
                  ? 'border-gray-600 dark:border-gray-400 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100' 
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="font-bold">{option.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{option.description}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Sleeve Selection */}
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-black mb-4 text-gray-900 dark:text-gray-100">Sleeve Style</h3>
        <div className="grid grid-cols-1 gap-2">
          {sleeveOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => updateConfig('sleeves', option.id)}
              className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500 ${
                config.sleeves === option.id 
                  ? 'border-gray-600 dark:border-gray-400 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100' 
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="font-bold">{option.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{option.description}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Color Selection */}
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-black mb-4 text-gray-900 dark:text-gray-100">Color Palette</h3>
        <div className="grid grid-cols-4 gap-3">
          {colorOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => updateConfig('color', option.id)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                config.color === option.id 
                  ? 'border-gray-600 dark:border-gray-400 ring-2 ring-gray-400 dark:ring-gray-300' 
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
              style={{ backgroundColor: option.hex }}
              title={option.name}
            >
              <div className="h-8 w-full rounded"></div>
              <div className={`text-xs mt-2 font-bold ${['#000000', '#374151', '#1e3a8a', '#047857', '#7c2d92', '#0f766e', '#4338ca', '#800020'].includes(option.hex) ? 'text-white' : 'text-gray-700'}`}>{option.name.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Action Buttons */}
      <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="flex gap-3">
          <Button 
            onClick={resetDesign}
            variant="outline" 
            className="flex-1 hover:bg-gray-50 dark:hover:bg-gray-700 font-bold border-gray-300 dark:border-gray-600"
          >
            Reset Design
          </Button>
          <Button 
            className="flex-1 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 font-bold"
            onClick={() => console.log('Saving design:', config)}
          >
            Save Design
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DesignControls;
