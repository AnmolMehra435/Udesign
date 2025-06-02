
interface MannequinPreviewProps {
  config: {
    size: string;
    gender: 'M' | 'F';
    color: string;
    customImage: string | null;
  };
}

const MannequinPreview = ({ config }: MannequinPreviewProps) => {
  const { size, gender, color, customImage } = config;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 w-full h-96 rounded-xl flex items-center justify-center">
        <div className="relative">
          {/* Mannequin SVG */}
          <svg width="200" height="300" viewBox="0 0 200 300" className="drop-shadow-lg">
            {/* Head */}
            <ellipse 
              cx="100" 
              cy="40" 
              rx="20" 
              ry="25" 
              fill="#FDBCB4" 
              stroke="#E09F96" 
              strokeWidth="1"
            />
            
            {/* Neck */}
            <rect 
              x="95" 
              y="60" 
              width="10" 
              height="15" 
              fill="#FDBCB4"
            />
            
            {/* Body shape based on gender */}
            {gender === 'M' ? (
              /* Male torso */
              <path
                d="M 75 75 L 125 75 L 120 180 L 80 180 Z"
                fill="#F4A393"
                stroke="#E09F96"
                strokeWidth="1"
              />
            ) : (
              /* Female torso */
              <path
                d="M 80 75 L 120 75 Q 125 100 115 120 L 115 180 L 85 180 L 85 120 Q 75 100 80 75 Z"
                fill="#F4A393"
                stroke="#E09F96"
                strokeWidth="1"
              />
            )}
            
            {/* Arms */}
            <ellipse cx="65" cy="110" rx="8" ry="25" fill="#FDBCB4" />
            <ellipse cx="135" cy="110" rx="8" ry="25" fill="#FDBCB4" />
            
            {/* T-Shirt */}
            <path
              d={gender === 'M' 
                ? "M 70 75 L 130 75 L 125 140 L 75 140 Z"
                : "M 75 75 L 125 75 L 120 140 L 80 140 Z"
              }
              fill={color}
              stroke="#374151"
              strokeWidth="2"
              opacity="0.9"
            />
            
            {/* T-Shirt sleeves */}
            <ellipse cx="65" cy="90" rx="12" ry="15" fill={color} opacity="0.8" />
            <ellipse cx="135" cy="90" rx="12" ry="15" fill={color} opacity="0.8" />
            
            {/* Custom design overlay */}
            {customImage && (
              <foreignObject x="85" y="90" width="30" height="30">
                <img 
                  src={customImage} 
                  alt="Custom design" 
                  className="w-full h-full object-contain rounded"
                />
              </foreignObject>
            )}
          </svg>
          
          {/* Size indicator */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold">
              Size: {size}
            </div>
          </div>
        </div>
      </div>
      
      {/* Preview details */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-black text-gray-900 dark:text-gray-100 mb-2">Design Summary</h4>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 font-medium">
          <p><span className="font-bold">Gender:</span> {gender === 'M' ? 'Male' : 'Female'}</p>
          <p><span className="font-bold">Size:</span> {size}</p>
          <p><span className="font-bold">Color:</span> {color}</p>
          <p><span className="font-bold">Custom Design:</span> {customImage ? 'Uploaded' : 'None'}</p>
        </div>
      </div>
    </div>
  );
};

export default MannequinPreview;
