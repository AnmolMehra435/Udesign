import { useState, useEffect } from 'react';

interface DressConfig {
  garmentType: string;
  bodice: string;
  skirt: string;
  sleeves: string;
  color: string;
}

interface DressPreviewProps {
  config: DressConfig;
}

const DressPreview = ({ config }: DressPreviewProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 w-full h-96 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
      <div className="relative">
        {/* Garment SVG Illustration */}
        <svg width="200" height="280" viewBox="0 0 200 280" className="drop-shadow-lg">
          {renderGarment(config)}
        </svg>
        
        {/* Design Label */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
            {config.garmentType.charAt(0).toUpperCase() + config.garmentType.slice(1)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {config.bodice.charAt(0).toUpperCase() + config.bodice.slice(1)} Bodice
          </p>
          {config.garmentType === 'dress' && (
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {config.skirt.charAt(0).toUpperCase() + config.skirt.slice(1)} Skirt
            </p>
          )}
          {config.sleeves !== 'none' && (
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {config.sleeves.charAt(0).toUpperCase() + config.sleeves.slice(1)} Sleeves
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const renderGarment = (config: DressConfig) => {
  const color = getColorValue(config.color);
  
  switch (config.garmentType) {
    case 'dress':
      return (
        <>
          <path
            d={getBodiceShape(config.bodice)}
            fill={color}
            stroke="#374151"
            strokeWidth="2"
            className="transition-all duration-300"
          />
          <path
            d={getSkirtShape(config.skirt)}
            fill={color}
            stroke="#374151"
            strokeWidth="2"
            className="transition-all duration-300"
            opacity="0.9"
          />
          {config.sleeves !== 'none' && renderSleeves(config.sleeves, color)}
        </>
      );
    case 'top':
      return (
        <>
          <path
            d={getBodiceShape(config.bodice)}
            fill={color}
            stroke="#374151"
            strokeWidth="2"
            className="transition-all duration-300"
          />
          {config.sleeves !== 'none' && renderSleeves(config.sleeves, color)}
        </>
      );
    case 'skirt':
      return (
        <path
          d="M 60 100 L 140 100 L 160 250 L 40 250 Z"
          fill={color}
          stroke="#374151"
          strokeWidth="2"
          className="transition-all duration-300"
        />
      );
    case 'jumpsuit':
      return (
        <>
          <path
            d={getBodiceShape(config.bodice)}
            fill={color}
            stroke="#374151"
            strokeWidth="2"
            className="transition-all duration-300"
          />
          <path
            d="M 60 120 L 85 250 L 70 250 L 50 120 M 140 120 L 115 250 L 130 250 L 150 120"
            fill={color}
            stroke="#374151"
            strokeWidth="2"
            className="transition-all duration-300"
          />
          {config.sleeves !== 'none' && renderSleeves(config.sleeves, color)}
        </>
      );
    case 'coat':
      return (
        <>
          <path
            d="M 50 80 L 150 80 L 155 250 L 45 250 Z"
            fill={color}
            stroke="#374151"
            strokeWidth="2"
            className="transition-all duration-300"
          />
          <path
            d="M 40 85 Q 30 90 25 160 Q 30 165 45 160 L 50 120 M 160 85 Q 170 90 175 160 Q 170 165 155 160 L 150 120"
            fill={color}
            stroke="#374151"
            strokeWidth="2"
            className="transition-all duration-300"
          />
        </>
      );
    case 'pants':
      return (
        <>
          <path
            d="M 70 50 L 130 50 L 135 120 L 65 120 Z"
            fill={color}
            stroke="#374151"
            strokeWidth="2"
            className="transition-all duration-300"
          />
          <path
            d="M 65 120 L 85 250 L 70 250 L 55 120 M 135 120 L 115 250 L 130 250 L 145 120"
            fill={color}
            stroke="#374151"
            strokeWidth="2"
            className="transition-all duration-300"
          />
        </>
      );
    default:
      return renderGarment({ ...config, garmentType: 'dress' });
  }
};

const renderSleeves = (sleeveType: string, color: string) => {
  return (
    <>
      <path
        d={getSleeveShape(sleeveType, 'left')}
        fill={color}
        stroke="#374151"
        strokeWidth="2"
        className="transition-all duration-300"
        opacity="0.8"
      />
      <path
        d={getSleeveShape(sleeveType, 'right')}
        fill={color}
        stroke="#374151"
        strokeWidth="2"
        className="transition-all duration-300"
        opacity="0.8"
      />
    </>
  );
};

const getBodiceShape = (bodiceType: string): string => {
  const shapes = {
    vneck: "M 70 60 L 130 60 L 140 80 L 140 120 L 60 120 L 60 80 L 70 60 L 100 80 L 130 60",
    scoop: "M 70 65 Q 100 50 130 65 L 140 80 L 140 120 L 60 120 L 60 80 Z",
    strapless: "M 60 80 L 140 80 L 140 120 L 60 120 Z",
    halter: "M 80 45 L 100 55 L 120 45 L 130 65 L 140 80 L 140 120 L 60 120 L 60 80 L 70 65 Z",
    offShoulder: "M 70 85 Q 100 70 130 85 L 140 95 L 140 120 L 60 120 L 60 95 Z",
    boatneck: "M 65 75 L 135 75 L 140 85 L 140 120 L 60 120 L 60 85 Z"
  };
  return shapes[bodiceType as keyof typeof shapes] || shapes.vneck;
};

const getSkirtShape = (skirtType: string): string => {
  const shapes = {
    aline: "M 60 120 L 140 120 L 160 250 L 40 250 Z",
    pencil: "M 60 120 L 140 120 L 135 250 L 65 250 Z",
    ballgown: "M 60 120 L 140 120 Q 180 180 170 250 L 30 250 Q 20 180 60 120",
    mermaid: "M 60 120 L 140 120 L 135 200 Q 145 230 160 250 L 40 250 Q 55 230 65 200 Z",
    pleated: "M 60 120 L 140 120 L 150 250 L 50 250 Z",
    wrap: "M 60 120 L 140 120 L 155 200 L 165 250 L 35 250 L 45 200 Z"
  };
  return shapes[skirtType as keyof typeof shapes] || shapes.aline;
};

const getSleeveShape = (sleeveType: string, side: 'left' | 'right'): string => {
  const isLeft = side === 'left';
  const shapes = {
    cap: isLeft ? "M 60 80 Q 45 75 40 90 Q 45 95 60 90 Z" : "M 140 80 Q 155 75 160 90 Q 155 95 140 90 Z",
    short: isLeft ? "M 60 80 Q 35 85 30 110 Q 35 115 50 110 L 60 100 Z" : "M 140 80 Q 165 85 170 110 Q 165 115 150 110 L 140 100 Z",
    long: isLeft ? "M 60 80 Q 25 90 20 160 Q 25 165 45 160 L 60 120 Z" : "M 140 80 Q 175 90 180 160 Q 175 165 155 160 L 140 120 Z",
    puff: isLeft ? "M 60 80 Q 30 70 25 100 Q 30 120 55 110 L 60 100 Z" : "M 140 80 Q 170 70 175 100 Q 170 120 145 110 L 140 100 Z",
    bell: isLeft ? "M 60 80 Q 35 85 20 130 Q 15 150 35 145 L 60 120 Z" : "M 140 80 Q 165 85 180 130 Q 185 150 165 145 L 140 120 Z",
    bishop: isLeft ? "M 60 80 Q 25 90 20 150 Q 30 155 50 150 L 60 120 Z" : "M 140 80 Q 175 90 180 150 Q 170 155 150 150 L 140 120 Z"
  };
  return shapes[sleeveType as keyof typeof shapes] || '';
};

const getColorValue = (colorName: string): string => {
  const colors = {
    charcoal: '#374151',
    slate: '#64748b',
    stone: '#78716c',
    zinc: '#71717a',
    neutral: '#737373',
    black: '#000000',
    white: '#ffffff',
    lightGray: '#d1d5db'
  };
  return colors[colorName as keyof typeof colors] || '#374151';
};

export default DressPreview;
