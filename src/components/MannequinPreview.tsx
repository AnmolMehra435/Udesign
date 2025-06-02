
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
          {/* Enhanced 3D Mannequin SVG */}
          <svg width="220" height="320" viewBox="0 0 220 320" className="drop-shadow-2xl">
            {/* Define gradients for 3D effect */}
            <defs>
              <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDBCB4" />
                <stop offset="50%" stopColor="#F4A393" />
                <stop offset="100%" stopColor="#E09F96" />
              </linearGradient>
              <linearGradient id="muscleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F4A393" />
                <stop offset="50%" stopColor="#E09F96" />
                <stop offset="100%" stopColor="#D2847A" />
              </linearGradient>
              <radialGradient id="faceGradient" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#FDBCB4" />
                <stop offset="70%" stopColor="#F4A393" />
                <stop offset="100%" stopColor="#E09F96" />
              </radialGradient>
              <linearGradient id="tshirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={color} />
                <stop offset="50%" stopColor={color} stopOpacity="0.9" />
                <stop offset="100%" stopColor={color} stopOpacity="0.7" />
              </linearGradient>
            </defs>
            
            {/* Head with facial features */}
            <g>
              {/* Head shape */}
              <ellipse 
                cx="110" 
                cy="45" 
                rx="22" 
                ry="28" 
                fill="url(#faceGradient)" 
                stroke="#D2847A" 
                strokeWidth="1.5"
              />
              
              {/* Eyes */}
              <ellipse cx="102" cy="40" rx="2" ry="1.5" fill="#2D3748" />
              <ellipse cx="118" cy="40" rx="2" ry="1.5" fill="#2D3748" />
              <circle cx="102" cy="39.5" r="0.5" fill="#FFFFFF" />
              <circle cx="118" cy="39.5" r="0.5" fill="#FFFFFF" />
              
              {/* Nose */}
              <path d="M 110 45 L 108 48 L 110 49 L 112 48 Z" fill="#E09F96" />
              
              {/* Mouth */}
              <path d="M 107 52 Q 110 54 113 52" stroke="#D2847A" strokeWidth="1" fill="none" />
              
              {/* Eyebrows */}
              <path d="M 99 37 Q 102 36 105 37" stroke="#8B5A3C" strokeWidth="1" fill="none" />
              <path d="M 115 37 Q 118 36 121 37" stroke="#8B5A3C" strokeWidth="1" fill="none" />
            </g>
            
            {/* Neck with definition */}
            <path 
              d="M 105 70 L 115 70 L 117 85 L 103 85 Z"
              fill="url(#skinGradient)"
              stroke="#D2847A"
              strokeWidth="1"
            />
            
            {/* Body shape with muscles based on gender */}
            {gender === 'M' ? (
              <g>
                {/* Male torso with muscle definition */}
                <path
                  d="M 85 85 L 135 85 Q 140 90 138 100 L 135 200 L 85 200 Q 80 90 85 85 Z"
                  fill="url(#muscleGradient)"
                  stroke="#D2847A"
                  strokeWidth="1.5"
                />
                {/* Chest muscles */}
                <ellipse cx="100" cy="110" rx="8" ry="12" fill="#E09F96" opacity="0.6" />
                <ellipse cx="120" cy="110" rx="8" ry="12" fill="#E09F96" opacity="0.6" />
                {/* Abs definition */}
                <rect x="105" y="130" width="10" height="8" rx="2" fill="#E09F96" opacity="0.4" />
                <rect x="105" y="145" width="10" height="8" rx="2" fill="#E09F96" opacity="0.4" />
                <rect x="105" y="160" width="10" height="8" rx="2" fill="#E09F96" opacity="0.4" />
              </g>
            ) : (
              <g>
                {/* Female torso */}
                <path
                  d="M 90 85 L 130 85 Q 135 100 130 120 L 130 200 L 90 200 L 90 120 Q 85 100 90 85 Z"
                  fill="url(#muscleGradient)"
                  stroke="#D2847A"
                  strokeWidth="1.5"
                />
                {/* Chest contour */}
                <ellipse cx="102" cy="108" rx="6" ry="10" fill="#E09F96" opacity="0.5" />
                <ellipse cx="118" cy="108" rx="6" ry="10" fill="#E09F96" opacity="0.5" />
              </g>
            )}
            
            {/* Enhanced Arms with muscle definition */}
            <g>
              {/* Left arm */}
              <ellipse cx="75" cy="115" rx="10" ry="28" fill="url(#skinGradient)" stroke="#D2847A" strokeWidth="1" />
              <ellipse cx="73" cy="105" rx="4" ry="8" fill="#E09F96" opacity="0.6" /> {/* Bicep */}
              <ellipse cx="77" cy="125" rx="3" ry="6" fill="#E09F96" opacity="0.4" /> {/* Forearm */}
              
              {/* Right arm */}
              <ellipse cx="145" cy="115" rx="10" ry="28" fill="url(#skinGradient)" stroke="#D2847A" strokeWidth="1" />
              <ellipse cx="147" cy="105" rx="4" ry="8" fill="#E09F96" opacity="0.6" /> {/* Bicep */}
              <ellipse cx="143" cy="125" rx="3" ry="6" fill="#E09F96" opacity="0.4" /> {/* Forearm */}
            </g>
            
            {/* Enhanced T-Shirt with 3D effect */}
            <g>
              <path
                d={gender === 'M' 
                  ? "M 80 85 L 140 85 Q 142 90 140 95 L 135 150 L 85 150 Q 78 90 80 85 Z"
                  : "M 85 85 L 135 85 Q 137 90 135 95 L 130 150 L 90 150 Q 83 90 85 85 Z"
                }
                fill="url(#tshirtGradient)"
                stroke="#374151"
                strokeWidth="2"
                opacity="0.95"
              />
              
              {/* T-Shirt sleeves with 3D effect */}
              <ellipse cx="75" cy="95" rx="13" ry="18" fill={color} opacity="0.8" stroke="#374151" strokeWidth="1.5" />
              <ellipse cx="145" cy="95" rx="13" ry="18" fill={color} opacity="0.8" stroke="#374151" strokeWidth="1.5" />
              
              {/* Shirt collar */}
              <path d="M 105 85 Q 110 88 115 85" stroke="#374151" strokeWidth="2" fill="none" />
              
              {/* Custom design overlay with perspective */}
              {customImage && (
                <g>
                  <defs>
                    <clipPath id="shirtClip">
                      <ellipse cx="110" cy="115" rx="18" ry="25" />
                    </clipPath>
                  </defs>
                  <foreignObject x="92" y="95" width="36" height="40" clipPath="url(#shirtClip)">
                    <img 
                      src={customImage} 
                      alt="Custom design" 
                      className="w-full h-full object-cover rounded"
                      style={{ transform: 'perspective(100px) rotateY(5deg)' }}
                    />
                  </foreignObject>
                </g>
              )}
              
              {/* Shirt wrinkles for realism */}
              <path d="M 90 130 Q 110 132 130 130" stroke="#374151" strokeWidth="0.5" opacity="0.3" fill="none" />
              <path d="M 95 140 Q 110 141 125 140" stroke="#374151" strokeWidth="0.5" opacity="0.3" fill="none" />
            </g>
          </svg>
          
          {/* Enhanced size indicator */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Size: {size} ({gender === 'M' ? 'Male' : 'Female'})
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
