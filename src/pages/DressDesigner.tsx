
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import DressPreview from '@/components/DressPreview';
import DesignControls from '@/components/DesignControls';

interface DressConfig {
  bodice: string;
  skirt: string;
  sleeves: string;
  color: string;
}

const DressDesigner = () => {
  const [dressConfig, setDressConfig] = useState<DressConfig>({
    bodice: 'vneck',
    skirt: 'aline',
    sleeves: 'none',
    color: 'blush'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Dress Designer Studio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create your perfect dress by selecting different styles, colors, and details. 
            Watch your design come to life in real-time!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Design Controls */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-gray-900">
              Design Options
            </h2>
            <DesignControls 
              config={dressConfig} 
              onConfigChange={setDressConfig} 
            />
          </div>

          {/* Dress Preview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold text-gray-900">
              Live Preview
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <DressPreview config={dressConfig} />
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Your Design Summary</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium">Bodice:</span> {dressConfig.bodice.charAt(0).toUpperCase() + dressConfig.bodice.slice(1)}</p>
                  <p><span className="font-medium">Skirt:</span> {dressConfig.skirt.charAt(0).toUpperCase() + dressConfig.skirt.slice(1)}</p>
                  <p><span className="font-medium">Sleeves:</span> {dressConfig.sleeves === 'none' ? 'Sleeveless' : dressConfig.sleeves.charAt(0).toUpperCase() + dressConfig.sleeves.slice(1)}</p>
                  <p><span className="font-medium">Color:</span> {dressConfig.color.charAt(0).toUpperCase() + dressConfig.color.slice(1)}</p>
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
