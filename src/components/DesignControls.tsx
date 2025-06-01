
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DressConfig {
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
  const bodiceOptions = [
    { id: 'vneck', name: 'V-Neck', description: 'Classic elegant neckline' },
    { id: 'scoop', name: 'Scoop', description: 'Soft curved neckline' },
    { id: 'strapless', name: 'Strapless', description: 'Modern minimalist style' },
    { id: 'halter', name: 'Halter', description: 'Chic neck-tie design' }
  ];

  const skirtOptions = [
    { id: 'aline', name: 'A-Line', description: 'Universally flattering' },
    { id: 'pencil', name: 'Pencil', description: 'Sleek and fitted' },
    { id: 'ballgown', name: 'Ball Gown', description: 'Dramatic and full' },
    { id: 'mermaid', name: 'Mermaid', description: 'Figure-hugging glamour' }
  ];

  const sleeveOptions = [
    { id: 'none', name: 'Sleeveless', description: 'Clean and simple' },
    { id: 'cap', name: 'Cap', description: 'Delicate coverage' },
    { id: 'short', name: 'Short', description: 'Classic comfort' },
    { id: 'long', name: 'Long', description: 'Elegant sophistication' },
    { id: 'puff', name: 'Puff', description: 'Romantic volume' }
  ];

  const colorOptions = [
    { id: 'blush', name: 'Blush Pink', hex: '#f8b4b4' },
    { id: 'lavender', name: 'Lavender', hex: '#c4a4f4' },
    { id: 'mint', name: 'Mint Green', hex: '#a4f4c4' },
    { id: 'peach', name: 'Peach', hex: '#ffcc9a' },
    { id: 'powder', name: 'Powder Blue', hex: '#b4d4f8' },
    { id: 'rose', name: 'Rose', hex: '#f4a4c4' },
    { id: 'sage', name: 'Sage Green', hex: '#c4d4a4' },
    { id: 'cream', name: 'Cream', hex: '#f5f5dc' }
  ];

  const updateConfig = (key: keyof DressConfig, value: string) => {
    onConfigChange({ ...config, [key]: value });
  };

  const resetDesign = () => {
    onConfigChange({
      bodice: 'vneck',
      skirt: 'aline',
      sleeves: 'none',
      color: 'blush'
    });
  };

  return (
    <div className="space-y-6">
      {/* Bodice Selection */}
      <Card className="p-6">
        <h3 className="text-lg font-serif font-semibold mb-4 text-gray-900">Bodice Style</h3>
        <div className="grid grid-cols-2 gap-3">
          {bodiceOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => updateConfig('bodice', option.id)}
              className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:border-rose-300 ${
                config.bodice === option.id 
                  ? 'border-rose-400 bg-rose-50 text-rose-800' 
                  : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">{option.name}</div>
              <div className="text-xs text-gray-500 mt-1">{option.description}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Skirt Selection */}
      <Card className="p-6">
        <h3 className="text-lg font-serif font-semibold mb-4 text-gray-900">Skirt Style</h3>
        <div className="grid grid-cols-2 gap-3">
          {skirtOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => updateConfig('skirt', option.id)}
              className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:border-rose-300 ${
                config.skirt === option.id 
                  ? 'border-rose-400 bg-rose-50 text-rose-800' 
                  : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">{option.name}</div>
              <div className="text-xs text-gray-500 mt-1">{option.description}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Sleeve Selection */}
      <Card className="p-6">
        <h3 className="text-lg font-serif font-semibold mb-4 text-gray-900">Sleeve Style</h3>
        <div className="grid grid-cols-1 gap-2">
          {sleeveOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => updateConfig('sleeves', option.id)}
              className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:border-rose-300 ${
                config.sleeves === option.id 
                  ? 'border-rose-400 bg-rose-50 text-rose-800' 
                  : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">{option.name}</div>
              <div className="text-xs text-gray-500 mt-1">{option.description}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Color Selection */}
      <Card className="p-6">
        <h3 className="text-lg font-serif font-semibold mb-4 text-gray-900">Color Palette</h3>
        <div className="grid grid-cols-4 gap-3">
          {colorOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => updateConfig('color', option.id)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                config.color === option.id 
                  ? 'border-rose-400 ring-2 ring-rose-200' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              style={{ backgroundColor: option.hex }}
              title={option.name}
            >
              <div className="h-8 w-full rounded"></div>
              <div className="text-xs mt-2 text-gray-700 font-medium">{option.name.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Action Buttons */}
      <Card className="p-6">
        <div className="flex gap-3">
          <Button 
            onClick={resetDesign}
            variant="outline" 
            className="flex-1 hover:bg-gray-50"
          >
            Reset Design
          </Button>
          <Button 
            className="flex-1 bg-rose-500 hover:bg-rose-600"
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
