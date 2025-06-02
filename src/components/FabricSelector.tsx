import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface FabricSelectorProps {
  selectedFabric: string;
  onFabricChange: (fabric: string) => void;
}

const fabrics = [
  {
    id: 'silk',
    name: 'Silk',
    description: 'Luxurious and smooth with a subtle sheen',
    characteristics: 'Lightweight, breathable, elegant drape'
  },
  {
    id: 'cotton',
    name: 'Cotton',
    description: 'Natural, comfortable, and versatile',
    characteristics: 'Breathable, soft, easy to maintain'
  },
  {
    id: 'linen',
    name: 'Linen',
    description: 'Natural fiber with a distinctive texture',
    characteristics: 'Lightweight, breathable, gets softer with wear'
  },
  {
    id: 'chiffon',
    name: 'Chiffon',
    description: 'Sheer and lightweight with a soft finish',
    characteristics: 'Delicate, flowing, perfect for layering'
  },
  {
    id: 'velvet',
    name: 'Velvet',
    description: 'Rich and luxurious with a plush surface',
    characteristics: 'Soft, warm, elegant appearance'
  },
  {
    id: 'satin',
    name: 'Satin',
    description: 'Smooth and glossy with a luxurious sheen',
    characteristics: 'Glamorous, flowing, perfect for formal wear'
  }
];

const FabricSelector = ({ selectedFabric, onFabricChange }: FabricSelectorProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-4">
        Choose Fabric
      </h3>
      
      <RadioGroup value={selectedFabric} onValueChange={onFabricChange} className="grid grid-cols-2 gap-4">
        {fabrics.map((fabric) => (
          <div key={fabric.id} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <RadioGroupItem value={fabric.id} id={fabric.id} />
            <Label htmlFor={fabric.id} className="flex-1 cursor-pointer">
              <div className="font-bold text-gray-900 dark:text-gray-100">{fabric.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {fabric.description}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {fabric.characteristics}
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FabricSelector;