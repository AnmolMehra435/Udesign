import { useState } from 'react';
import Navigation from '@/components/Navigation';
import SizeSelector from '@/components/SizeSelector';
import ColorPicker from '@/components/ColorPicker';
import ImageUploader from '@/components/ImageUploader';
import MannequinPreview from '@/components/MannequinPreview';
import ActionButtons from '@/components/ActionButtons';
import FabricSelector from '@/components/FabricSelector';

interface TShirtConfig {
  size: string;
  gender: 'M' | 'F';
  color: string;
  customImage: string | null;
  fabric: string;
}

const DressDesigner = () => {
  const [tshirtConfig, setTshirtConfig] = useState<TShirtConfig>({
    size: 'M',
    gender: 'M',
    color: '#000000',
    customImage: null,
    fabric: 'cotton'
  });

  const updateConfig = (updates: Partial<TShirtConfig>) => {
    setTshirtConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 mb-4">
            T-Shirt Designer Studio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-semibold">
            Create your perfect custom T-shirt with our advanced 3D preview. 
            Choose size, color, fabric, and upload your own design!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Design Controls */}
          <div className="space-y-6">
            <SizeSelector 
              size={tshirtConfig.size}
              gender={tshirtConfig.gender}
              onSizeChange={(size) => updateConfig({ size })}
              onGenderChange={(gender) => updateConfig({ gender })}
            />
            
            <ColorPicker
              selectedColor={tshirtConfig.color}
              onColorChange={(color) => updateConfig({ color })}
            />

            <FabricSelector
              selectedFabric={tshirtConfig.fabric}
              onFabricChange={(fabric) => updateConfig({ fabric })}
            />
            
            <ImageUploader
              onImageUpload={(image) => updateConfig({ customImage: image })}
              currentImage={tshirtConfig.customImage}
            />
          </div>

          {/* 3D Preview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">
              3D Preview
            </h2>
            <MannequinPreview config={tshirtConfig} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12">
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default DressDesigner;