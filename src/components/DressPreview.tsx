
import { useState, useEffect } from 'react';

interface DressConfig {
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
    <div className="dress-preview w-full h-96 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
      <div className="relative">
        {/* Dress SVG Illustration */}
        <svg width="200" height="280" viewBox="0 0 200 280" className="drop-shadow-lg">
          {/* Bodice */}
          <path
            d={getBodiceShape(config.bodice)}
            fill={getColorValue(config.color)}
            stroke="#666"
            strokeWidth="1"
            className="transition-all duration-300"
          />
          
          {/* Skirt */}
          <path
            d={getSkirtShape(config.skirt)}
            fill={getColorValue(config.color)}
            stroke="#666"
            strokeWidth="1"
            className="transition-all duration-300"
            opacity="0.9"
          />
          
          {/* Sleeves */}
          {config.sleeves !== 'none' && (
            <>
              <path
                d={getSleeveShape(config.sleeves, 'left')}
                fill={getColorValue(config.color)}
                stroke="#666"
                strokeWidth="1"
                className="transition-all duration-300"
                opacity="0.8"
              />
              <path
                d={getSleeveShape(config.sleeves, 'right')}
                fill={getColorValue(config.color)}
                stroke="#666"
                strokeWidth="1"
                className="transition-all duration-300"
                opacity="0.8"
              />
            </>
          )}
        </svg>
        
        {/* Design Label */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 font-medium">
            {config.bodice.charAt(0).toUpperCase() + config.bodice.slice(1)} Bodice
          </p>
          <p className="text-sm text-gray-600">
            {config.skirt.charAt(0).toUpperCase() + config.skirt.slice(1)} Skirt
          </p>
          {config.sleeves !== 'none' && (
            <p className="text-sm text-gray-600">
              {config.sleeves.charAt(0).toUpperCase() + config.sleeves.slice(1)} Sleeves
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const getBodiceShape = (bodiceType: string): string => {
  const shapes = {
    vneck: "M 70 60 L 130 60 L 140 80 L 140 120 L 60 120 L 60 80 L 70 60 L 100 80 L 130 60",
    scoop: "M 70 65 Q 100 50 130 65 L 140 80 L 140 120 L 60 120 L 60 80 Z",
    strapless: "M 60 80 L 140 80 L 140 120 L 60 120 Z",
    halter: "M 80 45 L 100 55 L 120 45 L 130 65 L 140 80 L 140 120 L 60 120 L 60 80 L 70 65 Z"
  };
  return shapes[bodiceType as keyof typeof shapes] || shapes.vneck;
};

const getSkirtShape = (skirtType: string): string => {
  const shapes = {
    aline: "M 60 120 L 140 120 L 160 250 L 40 250 Z",
    pencil: "M 60 120 L 140 120 L 135 250 L 65 250 Z",
    ballgown: "M 60 120 L 140 120 Q 180 180 170 250 L 30 250 Q 20 180 60 120",
    mermaid: "M 60 120 L 140 120 L 135 200 Q 145 230 160 250 L 40 250 Q 55 230 65 200 Z"
  };
  return shapes[skirtType as keyof typeof shapes] || shapes.aline;
};

const getSleeveShape = (sleeveType: string, side: 'left' | 'right'): string => {
  const isLeft = side === 'left';
  const shapes = {
    cap: isLeft ? "M 60 80 Q 45 75 40 90 Q 45 95 60 90 Z" : "M 140 80 Q 155 75 160 90 Q 155 95 140 90 Z",
    short: isLeft ? "M 60 80 Q 35 85 30 110 Q 35 115 50 110 L 60 100 Z" : "M 140 80 Q 165 85 170 110 Q 165 115 150 110 L 140 100 Z",
    long: isLeft ? "M 60 80 Q 25 90 20 160 Q 25 165 45 160 L 60 120 Z" : "M 140 80 Q 175 90 180 160 Q 175 165 155 160 L 140 120 Z",
    puff: isLeft ? "M 60 80 Q 30 70 25 100 Q 30 120 55 110 L 60 100 Z" : "M 140 80 Q 170 70 175 100 Q 170 120 145 110 L 140 100 Z"
  };
  return shapes[sleeveType as keyof typeof shapes] || '';
};

const getColorValue = (colorName: string): string => {
  const colors = {
    blush: '#f8b4b4',
    lavender: '#c4a4f4',
    mint: '#a4f4c4',
    peach: '#ffcc9a',
    powder: '#b4d4f8',
    rose: '#f4a4c4',
    sage: '#c4d4a4',
    cream: '#f5f5dc'
  };
  return colors[colorName as keyof typeof colors] || '#f8b4b4';
};

export default DressPreview;
