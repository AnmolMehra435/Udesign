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

  // Size scaling factors for body dimensions
  const getSizeScale = (size: string) => {
    const scales = {
      'XS': 0.75,
      'S': 0.85,
      'M': 1.0,
      'L': 1.15,
      'XL': 1.3,
      'XXL': 1.45
    };
    return scales[size as keyof typeof scales] || 1.0;
  };

  const scale = getSizeScale(size);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 w-full h-96 rounded-xl flex items-center justify-center">
        <div className="relative">
          {/* Ultra-realistic 3D Bodybuilder Mannequin SVG with size scaling */}
          <svg width="280" height="380" viewBox="0 0 280 380" className="drop-shadow-2xl">
            {/* Define realistic gradients for muscular physique */}
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
              
              <linearGradient id="muscleGradient" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#FFCBA4" />
                <stop offset="30%" stopColor="#E8B796" />
                <stop offset="70%" stopColor="#D4A373" />
                <stop offset="100%" stopColor="#C4956C" />
              </linearGradient>
              
              <linearGradient id="muscleHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE4C7" />
                <stop offset="50%" stopColor="#FFCBA4" />
                <stop offset="100%" stopColor="#E8B796" />
              </linearGradient>
              
              <linearGradient id="muscleShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4A373" />
                <stop offset="100%" stopColor="#B8956C" />
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
            <g transform={`scale(${scale}) translate(${(280 - 280 * scale) / 2 / scale}, 0)`}>
              {gender === 'M' ? (
                <path 
                  d="M 115 15 Q 140 5 165 15 Q 170 20 168 35 Q 165 45 160 50 L 120 50 Q 110 45 112 35 Q 110 20 115 15 Z"
                  fill="url(#hairGradient)"
                  stroke="#2D1B12"
                  strokeWidth="0.5"
                />
              ) : (
                <g>
                  {/* Female long hair */}
                  <path 
                    d="M 105 20 Q 140 0 175 20 Q 180 25 178 40 Q 175 60 170 80 L 165 100 Q 160 110 150 115 L 130 118 Q 120 115 115 110 L 110 100 Q 105 80 102 60 Q 100 40 102 25 Q 100 20 105 20 Z"
                    fill="url(#hairGradient)"
                    stroke="#2D1B12"
                    strokeWidth="0.5"
                  />
                  <path d="M 115 25 Q 118 30 115 35" stroke="#2D1B12" strokeWidth="0.3" fill="none" />
                  <path d="M 165 25 Q 162 30 165 35" stroke="#2D1B12" strokeWidth="0.3" fill="none" />
                </g>
              )}
            
              {/* Head with realistic proportions */}
              <g>
                <ellipse cx="142" cy="50" rx="24" ry="32" fill="url(#shadowGradient)" />
                <ellipse 
                  cx="140" 
                  cy="48" 
                  rx="22" 
                  ry="30" 
                  fill="url(#faceGradient)" 
                  stroke="#C4956C" 
                  strokeWidth="1"
                />
                
                {/* Forehead highlight */}
                <ellipse cx="140" cy="35" rx="15" ry="8" fill="#FFE4C7" opacity="0.6" />
                
                {/* Cheekbones */}
                <ellipse cx="128" cy="50" rx="4" ry="6" fill="#E8B796" opacity="0.5" />
                <ellipse cx="152" cy="50" rx="4" ry="6" fill="#E8B796" opacity="0.5" />
                
                {/* Eyes */}
                <g>
                  <ellipse cx="132" cy="42" rx="4" ry="2.5" fill="#E8B796" opacity="0.3" />
                  <ellipse cx="148" cy="42" rx="4" ry="2.5" fill="#E8B796" opacity="0.3" />
                  <ellipse cx="132" cy="42" rx="3" ry="2" fill="#FFFFFF" />
                  <ellipse cx="148" cy="42" rx="3" ry="2" fill="#FFFFFF" />
                  <circle cx="132" cy="42" r="1.5" fill="#4A5568" />
                  <circle cx="148" cy="42" r="1.5" fill="#4A5568" />
                  <circle cx="132" cy="42" r="0.8" fill="#000000" />
                  <circle cx="148" cy="42" r="0.8" fill="#000000" />
                  <circle cx="132.5" cy="41.5" r="0.3" fill="#FFFFFF" />
                  <circle cx="148.5" cy="41.5" r="0.3" fill="#FFFFFF" />
                  <path d="M 129 40.5 Q 132 39 135 40.5" stroke="#2D3748" strokeWidth="0.5" fill="none" />
                  <path d="M 145 40.5 Q 148 39 151 40.5" stroke="#2D3748" strokeWidth="0.5" fill="none" />
                </g>
                
                {/* Eyebrows */}
                <g>
                  <path d="M 128 38 Q 132 37 136 38" stroke="#654321" strokeWidth="1" fill="none" />
                  <path d="M 144 38 Q 148 37 152 38" stroke="#654321" strokeWidth="1" fill="none" />
                </g>
                
                {/* Nose */}
                <g>
                  <path d="M 138 47 Q 140 52 142 47" fill="#E8B796" />
                  <path d="M 140 48 L 138 51 Q 140 52 142 51 Z" fill="#FFCBA4" />
                  <ellipse cx="139" cy="51" rx="0.5" ry="0.8" fill="#D4A373" />
                  <ellipse cx="141" cy="51" rx="0.5" ry="0.8" fill="#D4A373" />
                </g>
                
                {/* Mouth */}
                <g>
                  <path d="M 136 55 Q 140 58 144 55" stroke="#B8860B" strokeWidth="1.5" fill="none" />
                  <path d="M 137 56 Q 140 57 143 56" fill="#CD853F" />
                </g>
                
                {/* Chin definition */}
                <ellipse cx="140" cy="65" rx="8" ry="4" fill="#E8B796" opacity="0.3" />
              </g>
              
              {/* Muscular Neck */}
              <path 
                d="M 125 75 L 155 75 Q 160 80 157 90 L 154 95 L 126 95 L 123 90 Q 120 80 125 75 Z"
                fill="url(#skinGradient)"
                stroke="#C4956C"
                strokeWidth="1"
              />
              
              <ellipse cx="135" cy="85" rx="3" ry="8" fill="#E8B796" opacity="0.4" />
              <ellipse cx="145" cy="85" rx="3" ry="8" fill="#E8B796" opacity="0.4" />
              
              {gender === 'M' && (
                <ellipse cx="140" cy="87" rx="2" ry="3" fill="#E8B796" opacity="0.4" />
              )}
              
              {/* BODYBUILDER PHYSIQUE - scaled based on size */}
              {gender === 'M' ? (
                <g>
                  {/* Male bodybuilder torso - width adjusts with scale */}
                  <path
                    d={`M ${80 + (20 * (1 - scale))} 95 L ${200 - (20 * (1 - scale))} 95 Q ${210 - (10 * (1 - scale))} 100 ${205 - (15 * (1 - scale))} 115 L ${200 - (20 * (1 - scale))} 250 L ${80 + (20 * (1 - scale))} 250 Q ${70 + (10 * (1 - scale))} 115 ${75 + (15 * (1 - scale))} 100 Q ${70 + (10 * (1 - scale))} 100 ${80 + (20 * (1 - scale))} 95 Z`}
                    fill="url(#muscleGradient)"
                    stroke="#C4956C"
                    strokeWidth="1.5"
                  />
                  
                  {/* MASSIVE Pectoral muscles - scaled */}
                  <ellipse cx={115 + (25 * (scale - 1))} cy="125" rx={18 * scale} ry={22 * scale} fill="url(#muscleHighlight)" opacity="0.7" />
                  <ellipse cx={165 - (25 * (scale - 1))} cy="125" rx={18 * scale} ry={22 * scale} fill="url(#muscleHighlight)" opacity="0.7" />
                  
                  {/* Pectoral muscle separation */}
                  <path d="M 140 105 L 140 150" stroke="#C4956C" strokeWidth="2" opacity="0.8" />
                  
                  {/* Inner pectoral definition - scaled */}
                  <ellipse cx={125 + (15 * (scale - 1))} cy="130" rx={8 * scale} ry={15 * scale} fill="url(#muscleShadow)" opacity="0.4" />
                  <ellipse cx={155 - (15 * (scale - 1))} cy="130" rx={8 * scale} ry={15 * scale} fill="url(#muscleShadow)" opacity="0.4" />
                  
                  {/* SIX-PACK Abdominal muscles - scaled */}
                  <rect x={125 + (15 * (scale - 1))} y="160" width={12 * scale} height={12 * scale} rx="4" fill="url(#muscleHighlight)" opacity="0.6" />
                  <rect x={143 - (15 * (scale - 1))} y="160" width={12 * scale} height={12 * scale} rx="4" fill="url(#muscleHighlight)" opacity="0.6" />
                  <rect x={125 + (15 * (scale - 1))} y="178" width={12 * scale} height={12 * scale} rx="4" fill="url(#muscleHighlight)" opacity="0.6" />
                  <rect x={143 - (15 * (scale - 1))} y="178" width={12 * scale} height={12 * scale} rx="4" fill="url(#muscleHighlight)" opacity="0.6" />
                  <rect x={125 + (15 * (scale - 1))} y="196" width={12 * scale} height={12 * scale} rx="4" fill="url(#muscleHighlight)" opacity="0.6" />
                  <rect x={143 - (15 * (scale - 1))} y="196" width={12 * scale} height={12 * scale} rx="4" fill="url(#muscleHighlight)" opacity="0.6" />
                  
                  {/* Oblique muscles (V-taper) - scaled */}
                  <path d={`M ${95 + (30 * (1 - scale))} 180 Q ${125 + (15 * (scale - 1))} 190 140 220`} stroke="#C4956C" strokeWidth="3" opacity="0.6" fill="none" />
                  <path d={`M ${185 - (30 * (1 - scale))} 180 Q ${155 - (15 * (scale - 1))} 190 140 220`} stroke="#C4956C" strokeWidth="3" opacity="0.6" fill="none" />
                  
                  {/* Serratus anterior (side ribs) - scaled */}
                  <g opacity="0.5">
                    <ellipse cx={100 + (20 * (1 - scale))} cy="150" rx={3 * scale} ry={8 * scale} fill="url(#muscleShadow)" />
                    <ellipse cx={95 + (25 * (1 - scale))} cy="165" rx={3 * scale} ry={8 * scale} fill="url(#muscleShadow)" />
                    <ellipse cx={92 + (28 * (1 - scale))} cy="180" rx={3 * scale} ry={8 * scale} fill="url(#muscleShadow)" />
                    <ellipse cx={180 - (20 * (1 - scale))} cy="150" rx={3 * scale} ry={8 * scale} fill="url(#muscleShadow)" />
                    <ellipse cx={185 - (25 * (1 - scale))} cy="165" rx={3 * scale} ry={8 * scale} fill="url(#muscleShadow)" />
                    <ellipse cx={188 - (28 * (1 - scale))} cy="180" rx={3 * scale} ry={8 * scale} fill="url(#muscleShadow)" />
                  </g>
                  
                  {/* Lats (latissimus dorsi) - side muscles - scaled */}
                  <ellipse cx={88 + (25 * (1 - scale))} cy="160" rx={8 * scale} ry={25 * scale} fill="url(#muscleHighlight)" opacity="0.4" />
                  <ellipse cx={192 - (25 * (1 - scale))} cy="160" rx={8 * scale} ry={25 * scale} fill="url(#muscleHighlight)" opacity="0.4" />
                </g>
              ) : (
                <g>
                  {/* Female athletic torso - scaled */}
                  <path
                    d={`M ${105 + (15 * (1 - scale))} 95 L ${175 - (15 * (1 - scale))} 95 Q ${180 - (10 * (1 - scale))} 105 ${175 - (15 * (1 - scale))} 120 Q ${172 - (12 * (1 - scale))} 140 ${175 - (15 * (1 - scale))} 160 L ${175 - (15 * (1 - scale))} 250 L ${105 + (15 * (1 - scale))} 250 L ${105 + (15 * (1 - scale))} 160 Q ${108 + (12 * (1 - scale))} 140 ${105 + (15 * (1 - scale))} 120 Q ${102 + (10 * (1 - scale))} 105 ${105 + (15 * (1 - scale))} 95 Z`}
                    fill="url(#muscleGradient)"
                    stroke="#C4956C"
                    strokeWidth="1.5"
                  />
                  
                  {/* Athletic chest definition - scaled */}
                  <ellipse cx={125 + (15 * (scale - 1))} cy="120" rx={12 * scale} ry={18 * scale} fill="url(#muscleHighlight)" opacity="0.4" />
                  <ellipse cx={155 - (15 * (scale - 1))} cy="120" rx={12 * scale} ry={18 * scale} fill="url(#muscleHighlight)" opacity="0.4" />
                  
                  {/* Toned abs - scaled */}
                  <rect x={130 + (10 * (scale - 1))} y="160" width={8 * scale} height={10 * scale} rx="3" fill="url(#muscleHighlight)" opacity="0.4" />
                  <rect x={142 - (10 * (scale - 1))} y="160" width={8 * scale} height={10 * scale} rx="3" fill="url(#muscleHighlight)" opacity="0.4" />
                  <rect x={130 + (10 * (scale - 1))} y="175" width={8 * scale} height={10 * scale} rx="3" fill="url(#muscleHighlight)" opacity="0.4" />
                  <rect x={142 - (10 * (scale - 1))} y="175" width={8 * scale} height={10 * scale} rx="3" fill="url(#muscleHighlight)" opacity="0.4" />
                  
                  {/* Waist definition - scaled */}
                  <path d={`M ${108 + (12 * (1 - scale))} 160 Q 140 155 ${172 - (12 * (1 - scale))} 160`} stroke="#D4A373" strokeWidth="1" opacity="0.4" />
                </g>
              )}
              
              {/* MASSIVE BODYBUILDER ARMS - scaled */}
              <g>
                {/* Left arm - scaled */}
                <ellipse cx={60 + (30 * (1 - scale))} cy="140" rx={20 * scale} ry={45 * scale} fill="url(#skinGradient)" stroke="#C4956C" strokeWidth="1" />
                
                {/* HUGE Bicep peak - scaled */}
                <ellipse cx={55 + (32 * (1 - scale))} cy="115" rx={12 * scale} ry={20 * scale} fill="url(#muscleHighlight)" opacity="0.8" />
                <ellipse cx={52 + (34 * (1 - scale))} cy="110" rx={6 * scale} ry={12 * scale} fill="#FFE4C7" opacity="0.6" />
                
                {/* Tricep muscle - scaled */}
                <ellipse cx={65 + (25 * (1 - scale))} cy="120" rx={8 * scale} ry={18 * scale} fill="url(#muscleShadow)" opacity="0.6" />
                
                {/* Forearm muscles - scaled */}
                <ellipse cx={58 + (28 * (1 - scale))} cy="160" rx={8 * scale} ry={20 * scale} fill="url(#muscleHighlight)" opacity="0.5" />
                <ellipse cx={62 + (24 * (1 - scale))} cy="165" rx={5 * scale} ry={15 * scale} fill="url(#muscleShadow)" opacity="0.4" />
                
                {/* Right arm - scaled */}
                <ellipse cx={220 - (30 * (1 - scale))} cy="140" rx={20 * scale} ry={45 * scale} fill="url(#skinGradient)" stroke="#C4956C" strokeWidth="1" />
                
                <ellipse cx={225 - (32 * (1 - scale))} cy="115" rx={12 * scale} ry={20 * scale} fill="url(#muscleHighlight)" opacity="0.8" />
                <ellipse cx={228 - (34 * (1 - scale))} cy="110" rx={6 * scale} ry={12 * scale} fill="#FFE4C7" opacity="0.6" />
                
                <ellipse cx={215 - (25 * (1 - scale))} cy="120" rx={8 * scale} ry={18 * scale} fill="url(#muscleShadow)" opacity="0.6" />
                
                <ellipse cx={222 - (28 * (1 - scale))} cy="160" rx={8 * scale} ry={20 * scale} fill="url(#muscleHighlight)" opacity="0.5" />
                <ellipse cx={218 - (24 * (1 - scale))} cy="165" rx={5 * scale} ry={15 * scale} fill="url(#muscleShadow)" opacity="0.4" />
              </g>
              
              {/* Enhanced T-Shirt fitting the scaled bodybuilder physique */}
              <g>
                <path
                  d={gender === 'M' 
                    ? `M ${75 + (20 * (1 - scale))} 95 L ${205 - (20 * (1 - scale))} 95 Q ${210 - (10 * (1 - scale))} 100 ${205 - (15 * (1 - scale))} 108 L ${200 - (20 * (1 - scale))} 180 L ${80 + (20 * (1 - scale))} 180 Q ${70 + (10 * (1 - scale))} 108 ${75 + (15 * (1 - scale))} 100 Q ${70 + (10 * (1 - scale))} 100 ${75 + (20 * (1 - scale))} 95 Z`
                    : `M ${100 + (15 * (1 - scale))} 95 L ${180 - (15 * (1 - scale))} 95 Q ${185 - (10 * (1 - scale))} 100 ${180 - (15 * (1 - scale))} 108 L ${175 - (15 * (1 - scale))} 180 L ${105 + (15 * (1 - scale))} 180 Q ${95 + (10 * (1 - scale))} 108 ${100 + (15 * (1 - scale))} 100 Q ${95 + (10 * (1 - scale))} 100 ${100 + (15 * (1 - scale))} 95 Z`
                  }
                  fill="url(#tshirtGradient)"
                  stroke="#374151"
                  strokeWidth="2"
                  opacity="0.95"
                />
                
                {/* T-Shirt sleeves stretched over scaled arms */}
                <ellipse cx={60 + (30 * (1 - scale))} cy="120" rx={22 * scale} ry={35 * scale} fill={color} opacity="0.85" stroke="#374151" strokeWidth="1.5" />
                <ellipse cx={220 - (30 * (1 - scale))} cy="120" rx={22 * scale} ry={35 * scale} fill={color} opacity="0.85" stroke="#374151" strokeWidth="1.5" />
                
                {/* Shirt collar */}
                <path d={`M ${125 + (15 * (scale - 1))} 95 Q 140 100 ${155 - (15 * (scale - 1))} 95`} stroke="#374151" strokeWidth="2.5" fill="none" />
                
                {/* Custom design stretched over muscles - scaled */}
                {customImage && (
                  <g>
                    <defs>
                      <clipPath id="shirtClip">
                        <ellipse cx="140" cy="135" rx={35 * scale} ry={40 * scale} />
                      </clipPath>
                      <filter id="designShadow">
                        <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3"/>
                      </filter>
                    </defs>
                    <foreignObject 
                      x={105 + (35 * (1 - scale))} 
                      y="105" 
                      width={70 * scale} 
                      height={60 * scale} 
                      clipPath="url(#shirtClip)" 
                      filter="url(#designShadow)"
                    >
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
                
                {/* Fabric stress lines from muscles - scaled */}
                <path d={`M ${85 + (25 * (1 - scale))} 125 Q 140 127 ${195 - (25 * (1 - scale))} 125`} stroke="#374151" strokeWidth="0.8" opacity="0.3" fill="none" />
                <path d={`M ${90 + (20 * (1 - scale))} 145 Q 140 147 ${190 - (20 * (1 - scale))} 145`} stroke="#374151" strokeWidth="0.8" opacity="0.2" fill="none" />
                <path d={`M ${95 + (15 * (1 - scale))} 165 Q 140 166 ${185 - (15 * (1 - scale))} 165`} stroke="#374151" strokeWidth="0.6" opacity="0.15" fill="none" />
                
                {/* Shirt hem - scaled */}
                <path d={`M ${80 + (20 * (1 - scale))} 180 Q 140 182 ${200 - (20 * (1 - scale))} 180`} stroke="#374151" strokeWidth="1.5" opacity="0.4" />
              </g>
            </g>
          </svg>
          
          {/* Size indicator */}
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
