
import { Label } from '@/components/ui/label';

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const colors = [
  // Basic Colors
  '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
  // Grays
  '#808080', '#C0C0C0', '#404040', '#A0A0A0', '#606060', '#E0E0E0', '#202020', '#F0F0F0',
  // Reds
  '#FF6B6B', '#FF4757', '#FF3838', '#FF4545', '#DC143C', '#B22222', '#8B0000', '#CD5C5C',
  // Blues
  '#4ECDC4', '#45B7D1', '#3742FA', '#2F3542', '#1E90FF', '#0066CC', '#000080', '#191970',
  // Greens
  '#55A3FF', '#2ED573', '#20BF6B', '#00A8FF', '#32CD32', '#228B22', '#006400', '#8FBC8F',
  // Yellows/Oranges
  '#FFD93D', '#FF9F43', '#FF6348', '#FF7675', '#FFA500', '#FFD700', '#FFFF99', '#F0E68C',
  // Purples
  '#A55EEA', '#8E44AD', '#9B59B6', '#663399', '#800080', '#4B0082', '#9370DB', '#BA55D3',
  // Pinks
  '#FF6B9D', '#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#C71585', '#DB7093', '#F8BBD9',
  // Browns
  '#8B4513', '#A0522D', '#CD853F', '#D2691E', '#DEB887', '#F4A460', '#BC8F8F', '#D2B48C',
  // Special Colors
  '#FF4081', '#00BCD4', '#4CAF50', '#FFC107', '#9C27B0', '#607D8B', '#795548', '#FF5722'
];

const ColorPicker = ({ selectedColor, onColorChange }: ColorPickerProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-4">
        Choose T-Shirt Color
      </h3>
      
      <div className="mb-4">
        <Label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
          Selected Color: {selectedColor}
        </Label>
        <div 
          className="w-full h-8 rounded-lg border-2 border-gray-300"
          style={{ backgroundColor: selectedColor }}
        />
      </div>

      <div className="grid grid-cols-8 gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={`w-8 h-8 rounded-lg border-2 hover:scale-110 transition-transform ${
              selectedColor === color 
                ? 'border-gray-900 dark:border-gray-100 ring-2 ring-offset-2 ring-gray-900 dark:ring-gray-100' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
