
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
          {/* Ultra-realistic 3D Human Mannequin SVG */}
          <svg width="240" height="340" viewBox="0 0 240 340" className="drop-shadow-2xl">
            {/* Define realistic gradients */}
            <defs>
              <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD5B8" />
                <stop offset="30%" stopColor="#FFCBA4" />
                <stop offset="70%" stopColor="#E8B796" />
                <stop offset="100%" stopColor="#D4A373" />
              </linearGradient>
              
              <radialGradient id="faceGradient" cx="40%" cy="25%" r="80%">
                <stop offset="0%" stopColor="#FFE4C7" />
                <stop offset="40%" stopColor="#FFCBA4" />
                <stop offset="80%" stopColor="#E8B796" />
                <stop offset="100%" stopColor="#D4A373" />
              </radialGradient>
              
              <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B4513" />
                <stop offset="50%" stopColor="#654321" />
                <stop offset="100%" stopColor="#3E2723" />
              </linearGradient>
              
              <linearGradient id="muscleGradient" x1="30%" y1="0%" x2="70%" y2="100%">
                <stop offset="0%" stopColor="#FFCBA4" />
                <stop offset="50%" stopColor="#E8B796" />
                <stop offset="100%" stopColor="#D4A373" />
              </linearGradient>
              
              <linearGradient id="tshirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={color} />
                <stop offset="30%" stopColor={color} stopOpacity="0.95" />
                <stop offset="70%" stopColor={color} stopOpacity="0.8" />
                <stop offset="100%" stopColor={color} stopOpacity="0.7" />
              </linearGradient>
              
              <radialGradient id="shadowGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#000000" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
              </radialGradient>
            </defs>
            
            {/* Hair */}
            <g>
              {gender === 'M' ? (
                <path 
                  d="M 95 15 Q 120 5 145 15 Q 150 20 148 35 Q 145 45 140 50 L 100 50 Q 90 45 92 35 Q 90 20 95 15 Z"
                  fill="url(#hairGradient)"
                  stroke="#2D1B12"
                  strokeWidth="0.5"
                />
              ) : (
                <g>
                  {/* Female long hair */}
                  <path 
                    d="M 85 20 Q 120 0 155 20 Q 160 25 158 40 Q 155 60 150 80 L 145 100 Q 140 110 130 115 L 110 118 Q 100 115 95 110 L 90 100 Q 85 80 82 60 Q 80 40 82 25 Q 80 20 85 20 Z"
                    fill="url(#hairGradient)"
                    stroke="#2D1B12"
                    strokeWidth="0.5"
                  />
                  {/* Hair strands */}
                  <path d="M 95 25 Q 98 30 95 35" stroke="#2D1B12" strokeWidth="0.3" fill="none" />
                  <path d="M 145 25 Q 142 30 145 35" stroke="#2D1B12" strokeWidth="0.3" fill="none" />
                </g>
              )}
            </g>
            
            {/* Head with realistic proportions */}
            <g>
              {/* Head shadow */}
              <ellipse cx="122" cy="50" rx="24" ry="32" fill="url(#shadowGradient)" />
              
              {/* Main head shape */}
              <ellipse 
                cx="120" 
                cy="48" 
                rx="22" 
                ry="30" 
                fill="url(#faceGradient)" 
                stroke="#C4956C" 
                strokeWidth="1"
              />
              
              {/* Forehead highlight */}
              <ellipse cx="120" cy="35" rx="15" ry="8" fill="#FFE4C7" opacity="0.6" />
              
              {/* Cheekbones */}
              <ellipse cx="108" cy="50" rx="4" ry="6" fill="#E8B796" opacity="0.5" />
              <ellipse cx="132" cy="50" rx="4" ry="6" fill="#E8B796" opacity="0.5" />
              
              {/* Eyes with realistic details */}
              <g>
                {/* Eye sockets */}
                <ellipse cx="112" cy="42" rx="4" ry="2.5" fill="#E8B796" opacity="0.3" />
                <ellipse cx="128" cy="42" rx="4" ry="2.5" fill="#E8B796" opacity="0.3" />
                
                {/* Eyeballs */}
                <ellipse cx="112" cy="42" rx="3" ry="2" fill="#FFFFFF" />
                <ellipse cx="128" cy="42" rx="3" ry="2" fill="#FFFFFF" />
                
                {/* Iris */}
                <circle cx="112" cy="42" r="1.5" fill="#4A5568" />
                <circle cx="128" cy="42" r="1.5" fill="#4A5568" />
                
                {/* Pupils */}
                <circle cx="112" cy="42" r="0.8" fill="#000000" />
                <circle cx="128" cy="42" r="0.8" fill="#000000" />
                
                {/* Eye highlights */}
                <circle cx="112.5" cy="41.5" r="0.3" fill="#FFFFFF" />
                <circle cx="128.5" cy="41.5" r="0.3" fill="#FFFFFF" />
                
                {/* Eyelashes */}
                <path d="M 109 40.5 Q 112 39 115 40.5" stroke="#2D3748" strokeWidth="0.5" fill="none" />
                <path d="M 125 40.5 Q 128 39 131 40.5" stroke="#2D3748" strokeWidth="0.5" fill="none" />
              </g>
              
              {/* Eyebrows with individual hairs */}
              <g>
                <path d="M 108 38 Q 112 37 116 38" stroke="#654321" strokeWidth="1" fill="none" />
                <path d="M 124 38 Q 128 37 132 38" stroke="#654321" strokeWidth="1" fill="none" />
                <path d="M 109 37.5 L 110 38.5" stroke="#654321" strokeWidth="0.3" />
                <path d="M 111 37.2 L 112 38.2" stroke="#654321" strokeWidth="0.3" />
                <path d="M 129 37.5 L 130 38.5" stroke="#654321" strokeWidth="0.3" />
                <path d="M 131 37.2 L 132 38.2" stroke="#654321" strokeWidth="0.3" />
              </g>
              
              {/* Nose with nostrils */}
              <g>
                <path d="M 118 47 Q 120 52 122 47" fill="#E8B796" />
                <path d="M 120 48 L 118 51 Q 120 52 122 51 Z" fill="#FFCBA4" />
                <ellipse cx="119" cy="51" rx="0.5" ry="0.8" fill="#D4A373" />
                <ellipse cx="121" cy="51" rx="0.5" ry="0.8" fill="#D4A373" />
              </g>
              
              {/* Mouth with lips */}
              <g>
                <path d="M 116 55 Q 120 58 124 55" stroke="#B8860B" strokeWidth="1.5" fill="none" />
                <path d="M 117 56 Q 120 57 123 56" fill="#CD853F" />
                <path d="M 118 56.5 Q 120 57.2 122 56.5" stroke="#FFFFFF" strokeWidth="0.3" fill="none" opacity="0.6" />
              </g>
              
              {/* Chin definition */}
              <ellipse cx="120" cy="65" rx="8" ry="4" fill="#E8B796" opacity="0.3" />
            </g>
            
            {/* Neck with realistic proportions */}
            <path 
              d="M 110 75 L 130 75 Q 132 80 130 90 L 128 95 L 112 95 L 110 90 Q 108 80 110 75 Z"
              fill="url(#skinGradient)"
              stroke="#C4956C"
              strokeWidth="1"
            />
            
            {/* Adam's apple for male */}
            {gender === 'M' && (
              <ellipse cx="120" cy="87" rx="2" ry="3" fill="#E8B796" opacity="0.4" />
            )}
            
            {/* Realistic body with proper anatomy */}
            {gender === 'M' ? (
              <g>
                {/* Male torso with defined muscles */}
                <path
                  d="M 90 95 L 150 95 Q 155 100 152 110 L 148 220 L 92 220 Q 85 110 88 100 Q 85 100 90 95 Z"
                  fill="url(#muscleGradient)"
                  stroke="#C4956C"
                  strokeWidth="1.5"
                />
                
                {/* Pectoral muscles */}
                <ellipse cx="105" cy="125" rx="10" ry="15" fill="#E8B796" opacity="0.4" />
                <ellipse cx="135" cy="125" rx="10" ry="15" fill="#E8B796" opacity="0.4" />
                
                {/* Chest separation */}
                <path d="M 120 110 L 120 145" stroke="#D4A373" strokeWidth="1" opacity="0.6" />
                
                {/* Abdominal muscles */}
                <rect x="113" y="150" width="14" height="8" rx="3" fill="#E8B796" opacity="0.3" />
                <rect x="113" y="165" width="14" height="8" rx="3" fill="#E8B796" opacity="0.3" />
                <rect x="113" y="180" width="14" height="8" rx="3" fill="#E8B796" opacity="0.3" />
                
                {/* Side muscle definition */}
                <path d="M 92 140 Q 88 145 92 150" stroke="#D4A373" strokeWidth="1" opacity="0.4" />
                <path d="M 148 140 Q 152 145 148 150" stroke="#D4A373" strokeWidth="1" opacity="0.4" />
              </g>
            ) : (
              <g>
                {/* Female torso with curves */}
                <path
                  d="M 95 95 L 145 95 Q 148 105 145 120 Q 142 140 145 160 L 145 220 L 95 220 L 95 160 Q 98 140 95 120 Q 92 105 95 95 Z"
                  fill="url(#muscleGradient)"
                  stroke="#C4956C"
                  strokeWidth="1.5"
                />
                
                {/* Chest contour */}
                <ellipse cx="110" cy="120" rx="8" ry="12" fill="#E8B796" opacity="0.3" />
                <ellipse cx="130" cy="120" rx="8" ry="12" fill="#E8B796" opacity="0.3" />
                
                {/* Waist definition */}
                <path d="M 98 160 Q 120 155 142 160" stroke="#D4A373" strokeWidth="1" opacity="0.4" />
              </g>
            )}
            
            {/* Enhanced Arms with realistic muscle definition */}
            <g>
              {/* Left arm */}
              <ellipse cx="78" cy="130" rx="12" ry="35" fill="url(#skinGradient)" stroke="#C4956C" strokeWidth="1" />
              {/* Bicep muscle */}
              <ellipse cx="76" cy="115" rx="5" ry="12" fill="#E8B796" opacity="0.4" />
              {/* Forearm definition */}
              <ellipse cx="80" cy="145" rx="4" ry="15" fill="#E8B796" opacity="0.3" />
              {/* Elbow */}
              <ellipse cx="78" cy="130" rx="3" ry="4" fill="#D4A373" opacity="0.5" />
              
              {/* Right arm */}
              <ellipse cx="162" cy="130" rx="12" ry="35" fill="url(#skinGradient)" stroke="#C4956C" strokeWidth="1" />
              {/* Bicep muscle */}
              <ellipse cx="164" cy="115" rx="5" ry="12" fill="#E8B796" opacity="0.4" />
              {/* Forearm definition */}
              <ellipse cx="160" cy="145" rx="4" ry="15" fill="#E8B796" opacity="0.3" />
              {/* Elbow */}
              <ellipse cx="162" cy="130" rx="3" ry="4" fill="#D4A373" opacity="0.5" />
            </g>
            
            {/* Ultra-realistic T-Shirt with fabric physics */}
            <g>
              <path
                d={gender === 'M' 
                  ? "M 85 95 L 155 95 Q 157 100 155 105 L 150 170 L 90 170 Q 83 105 85 100 Q 83 100 85 95 Z"
                  : "M 90 95 L 150 95 Q 152 100 150 105 L 145 170 L 95 170 Q 88 105 90 100 Q 88 100 90 95 Z"
                }
                fill="url(#tshirtGradient)"
                stroke="#374151"
                strokeWidth="2"
                opacity="0.95"
              />
              
              {/* T-Shirt sleeves with realistic draping */}
              <ellipse cx="78" cy="110" rx="15" ry="25" fill={color} opacity="0.85" stroke="#374151" strokeWidth="1.5" />
              <ellipse cx="162" cy="110" rx="15" ry="25" fill={color} opacity="0.85" stroke="#374151" strokeWidth="1.5" />
              
              {/* Shirt collar with depth */}
              <path d="M 112 95 Q 120 100 128 95" stroke="#374151" strokeWidth="2.5" fill="none" />
              <path d="M 115 96 Q 120 98 125 96" stroke="#374151" strokeWidth="1" fill="none" opacity="0.6" />
              
              {/* Custom design with realistic perspective */}
              {customImage && (
                <g>
                  <defs>
                    <clipPath id="shirtClip">
                      <ellipse cx="120" cy="130" rx="22" ry="30" />
                    </clipPath>
                    <filter id="designShadow">
                      <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  <foreignObject x="98" y="105" width="44" height="50" clipPath="url(#shirtClip)" filter="url(#designShadow)">
                    <img 
                      src={customImage} 
                      alt="Custom design" 
                      className="w-full h-full object-cover rounded"
                      style={{ 
                        transform: 'perspective(200px) rotateY(3deg) rotateX(-2deg)',
                        filter: 'brightness(0.9) contrast(1.1)'
                      }}
                    />
                  </foreignObject>
                </g>
              )}
              
              {/* Realistic fabric wrinkles and shadows */}
              <path d="M 95 145 Q 120 147 145 145" stroke="#374151" strokeWidth="0.8" opacity="0.2" fill="none" />
              <path d="M 100 155 Q 120 156 140 155" stroke="#374151" strokeWidth="0.6" opacity="0.15" fill="none" />
              <path d="M 105 165 Q 120 166 135 165" stroke="#374151" strokeWidth="0.4" opacity="0.1" fill="none" />
              
              {/* Shirt hem */}
              <path d="M 90 170 Q 120 172 150 170" stroke="#374151" strokeWidth="1.5" opacity="0.4" />
            </g>
          </svg>
          
          {/* Enhanced size indicator with realistic styling */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl border border-slate-600">
              <span className="text-yellow-400">Size:</span> {size} ({gender === 'M' ? 'Male' : 'Female'})
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced preview details */}
      <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
        <h4 className="font-black text-gray-900 dark:text-gray-100 mb-3 text-lg">Design Summary</h4>
        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2 font-medium">
          <div className="flex justify-between">
            <span className="font-bold text-gray-800 dark:text-gray-200">Gender:</span> 
            <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200">
              {gender === 'M' ? 'Male' : 'Female'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-gray-800 dark:text-gray-200">Size:</span> 
            <span className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-green-800 dark:text-green-200">
              {size}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-800 dark:text-gray-200">Color:</span> 
            <div className="flex items-center gap-2">
              <div 
                className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm" 
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-gray-600 dark:text-gray-400">{color}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-gray-800 dark:text-gray-200">Custom Design:</span> 
            <span className={`px-2 py-1 rounded ${customImage 
              ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}>
              {customImage ? 'Uploaded ✓' : 'None'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MannequinPreview;
