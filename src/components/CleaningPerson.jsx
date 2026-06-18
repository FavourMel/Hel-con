export default function CleaningPerson() {
  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Background glow */}
      <circle
        cx="200"
        cy="250"
        r="180"
        fill="rgba(0, 102, 204, 0.08)"
        style={{ animation: 'pulse 3s ease-in-out infinite' }}
      />

      {/* Head */}
      <circle cx="200" cy="100" r="40" fill="#8B6F47" />

      {/* Hair */}
      <path
        d="M 160 100 Q 160 60 200 55 Q 240 60 240 100"
        fill="#2d1b0f"
        stroke="#1a0f08"
        strokeWidth="2"
      />

      {/* Hair curls detail */}
      <circle cx="165" cy="75" r="8" fill="#1a0f08" opacity="0.3" />
      <circle cx="235" cy="75" r="8" fill="#1a0f08" opacity="0.3" />
      <circle cx="200" cy="65" r="8" fill="#1a0f08" opacity="0.3" />

      {/* Face */}
      {/* Left eye */}
      <circle cx="185" cy="95" r="5" fill="#ffffff" />
      <circle cx="185" cy="95" r="3" fill="#1a0f08" />
      <circle cx="186" cy="93" r="1.5" fill="#ffffff" />

      {/* Right eye */}
      <circle cx="215" cy="95" r="5" fill="#ffffff" />
      <circle cx="215" cy="95" r="3" fill="#1a0f08" />
      <circle cx="216" cy="93" r="1.5" fill="#ffffff" />

      {/* Smile */}
      <path
        d="M 185 110 Q 200 120 215 110"
        stroke="#d4746b"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Nose */}
      <path
        d="M 200 100 L 200 108"
        stroke="#8B6F47"
        strokeWidth="1.5"
      />

      {/* Neck */}
      <rect x="190" y="135" width="20" height="15" fill="#8B6F47" />

      {/* Body - Torso in work outfit */}
      <rect
        x="160"
        y="150"
        width="80"
        height="100"
        rx="8"
        fill="#ff6b9d"
        stroke="#e84a6a"
        strokeWidth="1.5"
      />

      {/* Apron */}
      <rect
        x="170"
        y="155"
        width="60"
        height="90"
        rx="4"
        fill="#ffffff"
        opacity="0.8"
      />

      {/* Apron pockets */}
      <rect x="180" y="190" width="15" height="20" fill="none" stroke="#0066cc" strokeWidth="1" opacity="0.5" />
      <rect x="205" y="190" width="15" height="20" fill="none" stroke="#0066cc" strokeWidth="1" opacity="0.5" />

      {/* Left arm */}
      <g>
        {/* Upper arm */}
        <rect
          x="120"
          y="155"
          width="40"
          height="18"
          rx="9"
          fill="#8B6F47"
          transform="rotate(-25 140 164)"
        />

        {/* Lower arm holding spray bottle */}
        <rect
          x="85"
          y="160"
          width="38"
          height="16"
          rx="8"
          fill="#8B6F47"
          transform="rotate(-55 123 168)"
        />

        {/* Hand */}
        <circle cx="70" cy="145" r="12" fill="#8B6F47" />

        {/* Spray bottle */}
        <g>
          {/* Bottle body */}
          <rect x="50" y="125" width="25" height="35" rx="3" fill="#ff6b9d" stroke="#e84a6a" strokeWidth="1.5" />
          {/* Bottle liquid */}
          <rect x="52" y="135" width="21" height="22" fill="#87ceeb" opacity="0.6" />
          {/* Spray trigger */}
          <path
            d="M 70 125 Q 75 120 78 122"
            stroke="#666"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Spray nozzle */}
          <circle cx="75" cy="118" r="3" fill="#666" />
        </g>
      </g>

      {/* Right arm */}
      <g>
        {/* Upper arm */}
        <rect
          x="240"
          y="155"
          width="40"
          height="18"
          rx="9"
          fill="#8B6F47"
          transform="rotate(25 260 164)"
        />

        {/* Lower arm holding broom */}
        <rect
          x="277"
          y="160"
          width="38"
          height="16"
          rx="8"
          fill="#8B6F47"
          transform="rotate(55 296 168)"
        />

        {/* Hand */}
        <circle cx="330" cy="145" r="12" fill="#8B6F47" />

        {/* Broom */}
        <g>
          {/* Handle */}
          <line x1="325" y1="85" x2="330" y2="155" stroke="#8B4513" strokeWidth="4" strokeLinecap="round" />
          
          {/* Bristles */}
          <g>
            <line x1="320" y1="155" x2="310" y2="165" stroke="#FFD700" strokeWidth="2" />
            <line x1="325" y1="158" x2="318" y2="172" stroke="#FFD700" strokeWidth="2" />
            <line x1="330" y1="160" x2="330" y2="175" stroke="#FFD700" strokeWidth="2" />
            <line x1="335" y1="158" x2="342" y2="172" stroke="#FFD700" strokeWidth="2" />
            <line x1="340" y1="155" x2="350" y2="165" stroke="#FFD700" strokeWidth="2" />
          </g>
        </g>
      </g>

      {/* Legs */}
      <rect x="185" y="250" width="14" height="50" rx="7" fill="#2d2d2d" />
      <rect x="201" y="250" width="14" height="50" rx="7" fill="#2d2d2d" />

      {/* Shoes */}
      <ellipse cx="192" cy="310" rx="16" ry="10" fill="#ff6b9d" stroke="#e84a6a" strokeWidth="1.5" />
      <ellipse cx="208" cy="310" rx="16" ry="10" fill="#ff6b9d" stroke="#e84a6a" strokeWidth="1.5" />

      {/* Shine effect on shoes */}
      <ellipse cx="190" cy="307" rx="6" ry="3" fill="#ffffff" opacity="0.4" />
      <ellipse cx="206" cy="307" rx="6" ry="3" fill="#ffffff" opacity="0.4" />

      {/* Sparkles around person */}
      <g opacity="0.6">
        <circle cx="100" cy="100" r="3" fill="#0066cc" style={{ animation: 'sparkle 2s ease-in-out infinite' }} />
        <circle cx="300" cy="120" r="2.5" fill="#0066cc" style={{ animation: 'sparkle 2s ease-in-out infinite 0.4s' }} />
        <circle cx="80" cy="200" r="2" fill="#0066cc" style={{ animation: 'sparkle 2s ease-in-out infinite 0.8s' }} />
        <circle cx="320" cy="250" r="2.5" fill="#0066cc" style={{ animation: 'sparkle 2s ease-in-out infinite 1.2s' }} />
      </g>

      {/* SVG Animations */}
      <defs>
        <style>{`
          @keyframes pulse {
            0%, 100% { r: 180; opacity: 0.08; }
            50% { r: 190; opacity: 0.12; }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}</style>
      </defs>
    </svg>
  )
}
