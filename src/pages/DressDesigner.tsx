
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import DressPreview from '@/components/DressPreview';
import DesignControls from '@/components/DesignControls';

interface DressConfig {
  garmentType: string;
  bodice: string;
  skirt: string;
  sleeves: string;
  color: string;
}

const DressDesigner = () => {
  const [dressConfig, setDressConfig] = useState<DressConfig>({
    garmentType: 'dress',
    bodice: 'vneck',
    skirt: 'aline',
    sleeves: 'none',
    color: 'charcoal'
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 mb-4">
            Design Studio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-semibold">
            Create your perfect garment by selecting different styles, colors, and details. 
            Watch your design come to life in real-time!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Design Controls */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">
              Design Options
            </h2>
            <DesignControls 
              config={dressConfig} 
              onConfigChange={setDressConfig} 
            />
          </div>

          {/* Dress Preview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">
              Live Preview
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <DressPreview config={dressConfig} />
              
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-black text-gray-900 dark:text-gray-100 mb-2">Your Design Summary</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 font-medium">
                  <p><span className="font-bold">Type:</span> {dressConfig.garmentType.charAt(0).toUpperCase() + dressConfig.garmentType.slice(1)}</p>
                  <p><span className="font-bold">Bodice:</span> {dressConfig.bodice.charAt(0).toUpperCase() + dressConfig.bodice.slice(1)}</p>
                  <p><span className="font-bold">Skirt:</span> {dressConfig.skirt.charAt(0).toUpperCase() + dressConfig.skirt.slice(1)}</p>
                  <p><span className="font-bold">Sleeves:</span> {dressConfig.sleeves === 'none' ? 'Sleeveless' : dressConfig.sleeves.charAt(0).toUpperCase() + dressConfig.sleeves.slice(1)}</p>
                  <p><span className="font-bold">Color:</span> {dressConfig.color.charAt(0).toUpperCase() + dressConfig.color.slice(1)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressDesigner;
