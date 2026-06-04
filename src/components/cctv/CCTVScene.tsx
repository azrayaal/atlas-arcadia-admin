import { useEffect, useRef } from "react"

/* ─── CCTV visual effect overlay ─────────────────────────── */
function CCTVOverlay() {
  return (
    <>
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)",
          mixBlendMode: "multiply",
        }}
      />
      {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.65) 100%)" }}
      />
    </>
  )
}

/* ─── 1. Main Gate ──────────────────────────────────────────── */
function MainGateScene() {
  return (
    <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2030" />
          <stop offset="100%" stopColor="#2d3548" />
        </linearGradient>
        <linearGradient id="road1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2430" />
          <stop offset="100%" stopColor="#2a3040" />
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect width="320" height="180" fill="url(#sky1)" />
      {/* Road with perspective */}
      <polygon points="90,90 230,90 320,180 0,180" fill="url(#road1)" />
      {/* Road center markings */}
      <line x1="155" y1="100" x2="140" y2="130" stroke="#ffffff20" strokeWidth="3" strokeDasharray="10 8">
        <animate attributeName="stroke-dashoffset" from="0" to="18" dur="0.6s" repeatCount="indefinite" />
      </line>
      <line x1="165" y1="100" x2="180" y2="130" stroke="#ffffff20" strokeWidth="3" strokeDasharray="10 8">
        <animate attributeName="stroke-dashoffset" from="0" to="18" dur="0.6s" repeatCount="indefinite" />
      </line>
      {/* Buildings in background */}
      <rect x="20" y="30" width="50" height="65" fill="#151c28" rx="1" />
      <rect x="25" y="35" width="6" height="6" fill="#3a4a5a" opacity="0.7" />
      <rect x="35" y="35" width="6" height="6" fill="#3a4a5a" opacity="0.5" />
      <rect x="45" y="35" width="6" height="6" fill="#f0c040" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="3.1s" repeatCount="indefinite" />
      </rect>
      <rect x="25" y="45" width="6" height="6" fill="#f0c040" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.4s" repeatCount="indefinite" />
      </rect>
      <rect x="35" y="45" width="6" height="6" fill="#3a4a5a" opacity="0.6" />
      <rect x="45" y="45" width="6" height="6" fill="#3a4a5a" opacity="0.4" />
      <rect x="255" y="20" width="45" height="75" fill="#151c28" rx="1" />
      <rect x="260" y="25" width="6" height="6" fill="#f0c040" opacity="0.9" />
      <rect x="270" y="25" width="6" height="6" fill="#3a4a5a" opacity="0.6" />
      <rect x="280" y="25" width="6" height="6" fill="#f0c040" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.8s" repeatCount="indefinite" />
      </rect>
      <rect x="260" y="35" width="6" height="6" fill="#3a4a5a" opacity="0.5" />
      <rect x="270" y="35" width="6" height="6" fill="#f0c040" opacity="0.9" />
      {/* Gate posts */}
      <rect x="130" y="55" width="8" height="40" fill="#3a4455" rx="2" />
      <rect x="182" y="55" width="8" height="40" fill="#3a4455" rx="2" />
      {/* Gate bar - animated open/close */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 130 57; -80 130 57; -80 130 57; 0 130 57"
          keyTimes="0; 0.15; 0.85; 1"
          dur="6s"
          repeatCount="indefinite"
        />
        <rect x="130" y="55" width="55" height="4" fill="#e8c84a" rx="2" />
        <rect x="138" y="55" width="6" height="4" fill="#000000" opacity="0.4" />
        <rect x="152" y="55" width="6" height="4" fill="#000000" opacity="0.4" />
        <rect x="166" y="55" width="6" height="4" fill="#000000" opacity="0.4" />
      </g>
      {/* Approaching car */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="-60,0; 0,0; 60,10"
          keyTimes="0; 0.5; 1"
          dur="6s"
          repeatCount="indefinite"
        />
        <rect x="135" y="110" width="40" height="20" fill="#2a3545" rx="3" />
        <rect x="140" y="105" width="28" height="14" fill="#1e2c3a" rx="2" />
        <ellipse cx="143" cy="132" rx="6" ry="6" fill="#1a1a1a" />
        <ellipse cx="143" cy="132" rx="3" ry="3" fill="#333" />
        <ellipse cx="167" cy="132" rx="6" ry="6" fill="#1a1a1a" />
        <ellipse cx="167" cy="132" rx="3" ry="3" fill="#333" />
        {/* Headlights */}
        <rect x="173" y="114" width="3" height="5" fill="#ffffaa" opacity="0.9" />
        <circle cx="174.5" cy="116.5" r="6" fill="#ffffaa" opacity="0.15" />
      </g>
      {/* Streetlight */}
      <line x1="260" y1="90" x2="260" y2="35" stroke="#3a4455" strokeWidth="2" />
      <line x1="260" y1="35" x2="275" y2="35" stroke="#3a4455" strokeWidth="2" />
      <circle cx="275" cy="35" r="4" fill="#ffffaa" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.7;0.9" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="275" cy="35" r="10" fill="#ffffaa" opacity="0.08">
        <animate attributeName="opacity" values="0.08;0.04;0.08" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

/* ─── 2. Lobby Tower A ─────────────────────────────────────── */
function LobbyScene() {
  return (
    <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lobby-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a3040" />
          <stop offset="100%" stopColor="#1a2030" />
        </linearGradient>
        <linearGradient id="ceiling" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2535" />
          <stop offset="100%" stopColor="#2a3444" />
        </linearGradient>
      </defs>
      {/* Ceiling */}
      <rect width="320" height="60" fill="url(#ceiling)" />
      {/* Ceiling lights */}
      {[60, 160, 260].map((x, i) => (
        <g key={i}>
          <rect x={x - 15} y="10" width="30" height="5" fill="#3a4455" rx="1" />
          <rect x={x - 12} y="15" width="24" height="2" fill="#ffffee" opacity="0.9" />
          <ellipse cx={x} cy="16" rx="30" ry="20" fill="#ffffee" opacity="0.05" />
        </g>
      ))}
      {/* Back wall */}
      <rect x="0" y="60" width="320" height="70" fill="#232c3a" />
      {/* Reception desk */}
      <rect x="100" y="95" width="120" height="35" fill="#2a3445" rx="2" />
      <rect x="100" y="90" width="120" height="8" fill="#3a4558" rx="1" />
      {/* Person at desk */}
      <ellipse cx="160" cy="86" rx="8" ry="9" fill="#3a4a5a" />
      <rect x="153" y="94" width="14" height="18" fill="#3a4a5a" rx="2" />
      {/* Elevator doors */}
      <rect x="15" y="62" width="50" height="68" fill="#1e2535" rx="1" />
      <rect x="255" y="62" width="50" height="68" fill="#1e2535" rx="1" />
      {/* Animated elevator left */}
      <g>
        <animate attributeName="opacity" values="1;1;0;0;1;1" keyTimes="0;0.3;0.32;0.68;0.7;1" dur="7s" repeatCount="indefinite" />
        <rect x="15" y="62" width="25" height="68" fill="#2a3545">
          <animate attributeName="x" values="15;0;0;15;15" keyTimes="0;0.3;0.7;0.9;1" dur="7s" repeatCount="indefinite" />
          <animate attributeName="width" values="25;0;0;25;25" keyTimes="0;0.3;0.7;0.9;1" dur="7s" repeatCount="indefinite" />
        </rect>
        <rect x="40" y="62" width="25" height="68" fill="#2a3545">
          <animate attributeName="x" values="40;65;65;40;40" keyTimes="0;0.3;0.7;0.9;1" dur="7s" repeatCount="indefinite" />
        </rect>
      </g>
      {/* Floor */}
      <rect x="0" y="130" width="320" height="50" fill="url(#lobby-floor)" />
      {/* Floor tiles */}
      {[0, 40, 80, 120, 160, 200, 240, 280].map((x, i) => (
        <line key={i} x1={x} y1="130" x2={x} y2="180" stroke="#ffffff08" strokeWidth="1" />
      ))}
      {[140, 155, 165, 175].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="320" y2={y} stroke="#ffffff08" strokeWidth="1" />
      ))}
      {/* Walking person 1 */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="-20,0; 340,0"
          dur="9s"
          repeatCount="indefinite"
        />
        <ellipse cx="90" cy="118" rx="7" ry="8" fill="#3a4a5a" />
        <rect x="83" y="125" width="14" height="22" fill="#3a4a5a" rx="2" />
        <line x1="87" y1="130" x2="84" y2="147" stroke="#3a4a5a" strokeWidth="2">
          <animate attributeName="x2" values="84;90;84" dur="0.6s" repeatCount="indefinite" />
        </line>
        <line x1="93" y1="130" x2="96" y2="147" stroke="#3a4a5a" strokeWidth="2">
          <animate attributeName="x2" values="96;90;96" dur="0.6s" repeatCount="indefinite" />
        </line>
      </g>
      {/* Walking person 2 - going other direction */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="340,5; -20,5"
          dur="12s"
          repeatCount="indefinite"
        />
        <ellipse cx="210" cy="116" rx="6" ry="7" fill="#2a3a4a" />
        <rect x="204" y="122" width="12" height="20" fill="#2a3a4a" rx="2" />
      </g>
    </svg>
  )
}

/* ─── 3. Social Hub Area ───────────────────────────────────── */
function SocialHubScene() {
  return (
    <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hub-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2535" />
          <stop offset="100%" stopColor="#141b27" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#hub-bg)" />
      {/* Back wall with large window */}
      <rect x="60" y="20" width="200" height="100" fill="#1a2232" rx="2" />
      <rect x="70" y="28" width="180" height="84" fill="#0d1520" rx="1" />
      {/* City view through window */}
      {[80, 100, 130, 155, 180, 210, 230].map((x, i) => (
        <rect
          key={i}
          x={x}
          y={35 + (i % 3) * 10}
          width={8 + (i % 2) * 5}
          height={40 + (i % 4) * 12}
          fill="#1a2535"
          rx="1"
        />
      ))}
      {/* Window frame dividers */}
      <line x1="160" y1="28" x2="160" y2="112" stroke="#2a3545" strokeWidth="3" />
      <line x1="70" y1="70" x2="250" y2="70" stroke="#2a3545" strokeWidth="3" />
      {/* Tables */}
      {[70, 190].map((x, i) => (
        <g key={i}>
          <ellipse cx={x} cy="145" rx="28" ry="8" fill="#2a3545" />
          <rect x={x - 28} y="128" width="56" height="18" fill="#2a3545" rx="2" />
          <ellipse cx={x} cy="128" rx="28" ry="6" fill="#3a4558" />
          {/* Chairs */}
          <rect x={x - 40} y="130" width="10" height="15" fill="#232c3c" rx="2" />
          <rect x={x + 30} y="130" width="10" height="15" fill="#232c3c" rx="2" />
          {/* People sitting */}
          <ellipse cx={x - 35} cy="124" rx="7" ry="8" fill="#3a4a5a" />
          <rect x={x - 42} y="130" width="14" height="14" fill="#3a4a5a" rx="2" />
          <ellipse cx={x + 35} cy="124" rx="6" ry="7" fill="#2a3a4a" />
          <rect x={x + 29} y="130" width="12" height="14" fill="#2a3a4a" rx="2" />
        </g>
      ))}
      {/* Standing person near window */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 10,0; 0,0"
          dur="4s"
          repeatCount="indefinite"
        />
        <ellipse cx="160" cy="112" rx="7" ry="8" fill="#3a4a5a" />
        <rect x="153" y="119" width="14" height="22" fill="#3a4a5a" rx="2" />
      </g>
      {/* Floor */}
      <rect x="0" y="160" width="320" height="20" fill="#12192a" />
      {/* Potted plant */}
      <rect x="295" y="130" width="16" height="20" fill="#1a2535" rx="2" />
      <ellipse cx="303" cy="125" rx="14" ry="16" fill="#1a3020" />
      <ellipse cx="298" cy="118" rx="6" ry="8" fill="#1a3a20" />
      <ellipse cx="308" cy="120" rx="5" ry="7" fill="#1a3020" />
      <rect x="8" y="130" width="14" height="20" fill="#1a2535" rx="2" />
      <ellipse cx="15" cy="124" rx="12" ry="14" fill="#1a3020" />
      {/* Ambient light glow */}
      <ellipse cx="160" cy="20" rx="80" ry="20" fill="#3050a0" opacity="0.08">
        <animate attributeName="opacity" values="0.08;0.04;0.08" dur="3s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  )
}

/* ─── 4. Parkir B1 (Parking Basement) ──────────────────────── */
function ParkingScene() {
  return (
    <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="parking-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#191f2a" />
          <stop offset="100%" stopColor="#121820" />
        </linearGradient>
        <linearGradient id="parking-ceiling" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141a24" />
          <stop offset="100%" stopColor="#1e2535" />
        </linearGradient>
      </defs>
      {/* Ceiling */}
      <rect width="320" height="45" fill="url(#parking-ceiling)" />
      {/* Fluorescent lights */}
      {[50, 160, 270].map((x, i) => (
        <g key={i}>
          <rect x={x - 25} y="8" width="50" height="6" fill="#2a3445" rx="1" />
          <rect x={x - 22} y="14" width="44" height="3" fill="#aaccff" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.4;0.7" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </rect>
          <ellipse cx={x} cy="15" rx="40" ry="25" fill="#aaccff" opacity="0.04">
            <animate attributeName="opacity" values="0.04;0.02;0.04" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </ellipse>
        </g>
      ))}
      {/* Concrete columns */}
      {[70, 250].map((x, i) => (
        <g key={i}>
          <rect x={x} y="45" width="16" height="135" fill="#1e2535" />
          <rect x={x} y="45" width="2" height="135" fill="#2a3545" opacity="0.5" />
        </g>
      ))}
      {/* Floor */}
      <rect x="0" y="45" width="320" height="135" fill="url(#parking-floor)" />
      {/* Parking bays - left row */}
      {[55, 100, 145].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="45" x2={x} y2="120" stroke="#ffffff15" strokeWidth="1" />
          {/* Parked car */}
          <rect x={x + 2} y="55" width="40" height="22" fill="#1e2a38" rx="3" />
          <rect x={x + 7} y="51" width="28" height="12" fill="#161e2c" rx="2" />
          <ellipse cx={x + 12} cy="79" rx="7" ry="7" fill="#111820" />
          <ellipse cx={x + 12} cy="79" rx="3.5" ry="3.5" fill="#1e2535" />
          <ellipse cx={x + 32} cy="79" rx="7" ry="7" fill="#111820" />
          <ellipse cx={x + 32} cy="79" rx="3.5" ry="3.5" fill="#1e2535" />
        </g>
      ))}
      {/* Right row parking */}
      {[175, 220].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="45" x2={x} y2="120" stroke="#ffffff15" strokeWidth="1" />
          <rect x={x + 2} y="55" width="40" height="22" fill="#1e2a38" rx="3" />
          <rect x={x + 7} y="51" width="28" height="12" fill="#161e2c" rx="2" />
          <ellipse cx={x + 12} cy="79" rx="7" ry="7" fill="#111820" />
          <ellipse cx={x + 12} cy="79" rx="3.5" ry="3.5" fill="#1e2535" />
          <ellipse cx={x + 32} cy="79" rx="7" ry="7" fill="#111820" />
          <ellipse cx={x + 32} cy="79" rx="3.5" ry="3.5" fill="#1e2535" />
        </g>
      ))}
      {/* Moving car entering */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="330,25; 0,25; 0,25; 0,25"
          keyTimes="0; 0.3; 0.7; 1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="270" y="100" width="42" height="22" fill="#253040" rx="3" />
        <rect x="276" y="96" width="29" height="12" fill="#1a2535" rx="2" />
        <ellipse cx="280" cy="124" rx="7" ry="7" fill="#0d1520" />
        <ellipse cx="280" cy="124" rx="3.5" ry="3.5" fill="#1e2535" />
        <ellipse cx="304" cy="124" rx="7" ry="7" fill="#0d1520" />
        <ellipse cx="304" cy="124" rx="3.5" ry="3.5" fill="#1e2535" />
        {/* Headlights beam */}
        <polygon points="265,99 265,107 225,90 225,116" fill="#ffffaa" opacity="0.08" />
      </g>
      {/* Parking number on floor */}
      <text x="78" y="140" fill="#ffffff18" fontSize="14" fontFamily="monospace">B1</text>
      <text x="118" y="140" fill="#ffffff18" fontSize="14" fontFamily="monospace">B2</text>
      <text x="158" y="140" fill="#ffffff18" fontSize="14" fontFamily="monospace">B3</text>
      {/* Emergency exit sign */}
      <rect x="280" y="45" width="35" height="12" fill="#1a3020" rx="1" />
      <rect x="282" y="47" width="31" height="8" fill="#00aa44" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}

/* ─── 5. RTH / Taman (Outdoor Garden) ──────────────────────── */
function GardenScene() {
  return (
    <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1525" />
          <stop offset="100%" stopColor="#1a2535" />
        </linearGradient>
        <linearGradient id="grass-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1e10" />
          <stop offset="100%" stopColor="#081408" />
        </linearGradient>
      </defs>
      {/* Sky / background */}
      <rect width="320" height="180" fill="url(#sky-g)" />
      {/* Moon */}
      <circle cx="270" cy="30" r="15" fill="#c8d8e8" opacity="0.5" />
      <circle cx="276" cy="26" r="12" fill="#0a1525" opacity="0.7" />
      {/* Stars */}
      {[[30, 20], [80, 15], [140, 25], [200, 12], [50, 40], [120, 8], [230, 35]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1" fill="white" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* Path */}
      <polygon points="130,110 190,110 240,180 80,180" fill="#1e2a35" />
      <line x1="155" y1="115" x2="130" y2="175" stroke="#ffffff10" strokeWidth="2" />
      <line x1="165" y1="115" x2="190" y2="175" stroke="#ffffff10" strokeWidth="2" />
      {/* Grass */}
      <rect x="0" y="100" width="130" height="80" fill="url(#grass-g)" />
      <rect x="190" y="100" width="130" height="80" fill="url(#grass-g)" />
      {/* Trees - left */}
      {[20, 60].map((x, i) => (
        <g key={i}>
          <rect x={x + 10} y="80" width="6" height="25" fill="#0e1a10" />
          <ellipse cx={x + 13} cy="68" rx="18" ry="22" fill="#0a1e0e">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 2,0; 0,0; -2,0; 0,0"
              dur={`${3 + i}s`}
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx={x + 7} cy="72" rx="12" ry="16" fill="#0d2212">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -2,0; 0,0; 2,0; 0,0"
              dur={`${2.5 + i * 0.5}s`}
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
      ))}
      {/* Trees - right */}
      {[240, 290].map((x, i) => (
        <g key={i}>
          <rect x={x + 10} y="75" width="6" height="30" fill="#0e1a10" />
          <ellipse cx={x + 13} cy="62" rx="20" ry="24" fill="#0a1e0e">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 3,0; 0,0; -3,0; 0,0"
              dur={`${2.8 + i * 0.7}s`}
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
      ))}
      {/* Bench */}
      <rect x="90" y="128" width="40" height="5" fill="#1e2a35" rx="1" />
      <rect x="93" y="133" width="4" height="12" fill="#1a2430" />
      <rect x="123" y="133" width="4" height="12" fill="#1a2430" />
      {/* Person on bench */}
      <ellipse cx="105" cy="122" rx="6" ry="7" fill="#2a3a4a" />
      <rect x="99" y="128" width="12" height="8" fill="#2a3a4a" rx="2" />
      {/* Walking person */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 30,0; 60,0"
          dur="8s"
          repeatCount="indefinite"
        />
        <ellipse cx="155" cy="125" rx="5" ry="6" fill="#2a3a4a" />
        <rect x="150" y="130" width="10" height="16" fill="#2a3a4a" rx="2" />
        <line x1="152" y1="134" x2="149" y2="146" stroke="#2a3a4a" strokeWidth="1.5">
          <animate attributeName="x2" values="149;155;149" dur="0.7s" repeatCount="indefinite" />
        </line>
        <line x1="158" y1="134" x2="161" y2="146" stroke="#2a3a4a" strokeWidth="1.5">
          <animate attributeName="x2" values="161;155;161" dur="0.7s" repeatCount="indefinite" />
        </line>
      </g>
      {/* Lamppost */}
      <line x1="200" y1="180" x2="200" y2="90" stroke="#1e2a35" strokeWidth="3" />
      <circle cx="200" cy="88" r="5" fill="#ffffaa" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="88" r="18" fill="#ffffaa" opacity="0.06">
        <animate attributeName="opacity" values="0.06;0.03;0.06" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

/* ─── 6. Koridor Lt. 3 (Corridor) ──────────────────────────── */
function CorridorScene() {
  return (
    <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="corridor-vanish" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#0d1525" />
          <stop offset="100%" stopColor="#1a2535" />
        </linearGradient>
        <linearGradient id="floor-c" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2535" />
          <stop offset="100%" stopColor="#0d1520" />
        </linearGradient>
      </defs>
      {/* Back wall (vanishing point) */}
      <polygon points="120,60 200,60 200,120 120,120" fill="#0d1525" />
      {/* Floor perspective */}
      <polygon points="0,180 320,180 200,120 120,120" fill="url(#floor-c)" />
      {/* Floor tiles */}
      {[0, 1, 2, 3, 4].map(i => (
        <line
          key={i}
          x1={120 + i * 20}
          y1={120 + i * 15}
          x2={320 - (i * 20)}
          y2={180}
          stroke="#ffffff08"
          strokeWidth="1"
        />
      ))}
      {/* Ceiling perspective */}
      <polygon points="0,0 320,0 200,60 120,60" fill="url(#corridor-vanish)" />
      {/* Left wall */}
      <polygon points="0,0 120,60 120,120 0,180" fill="#141d2a" />
      {/* Right wall */}
      <polygon points="320,0 200,60 200,120 320,180" fill="#141d2a" />
      {/* Left doors */}
      {[30, 65].map((y, i) => (
        <g key={i}>
          <polygon
            points={`0,${y} 40,${y + 15} 40,${y + 55} 0,${y + 42}`}
            fill="#1a2535"
            stroke="#2a3545"
            strokeWidth="1"
          />
          <ellipse cx="35" cy={y + 35} rx="2" ry="2" fill="#3a4a5a" />
        </g>
      ))}
      {/* Right doors */}
      {[30, 65].map((y, i) => (
        <g key={i}>
          <polygon
            points={`320,${y} 280,${y + 15} 280,${y + 55} 320,${y + 42}`}
            fill="#1a2535"
            stroke="#2a3545"
            strokeWidth="1"
          />
          <ellipse cx="285" cy={y + 35} rx="2" ry="2" fill="#3a4a5a" />
        </g>
      ))}
      {/* Ceiling lights */}
      {[0.3, 0.5, 0.7].map((t, i) => {
        const lx = 120 + (200 - 120) * t
        const ly = 60 + (120 - 60) * t
        return (
          <g key={i}>
            <ellipse cx={lx} cy={ly - 2} rx={8 - i * 2} ry="2" fill="#aaccff" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.25;0.5" dur={`${1.8 + i * 0.4}s`} repeatCount="indefinite" />
            </ellipse>
            <ellipse cx={lx} cy={ly} rx={30 - i * 6} ry={20 - i * 4} fill="#aaccff" opacity="0.03">
              <animate attributeName="opacity" values="0.03;0.015;0.03" dur={`${1.8 + i * 0.4}s`} repeatCount="indefinite" />
            </ellipse>
          </g>
        )
      })}
      {/* Walking person coming towards camera */}
      <g>
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.3; 1.2; 1.2"
          keyTimes="0; 0.7; 1"
          dur="7s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="142,80; 108,118; 60,155"
          keyTimes="0; 0.7; 1"
          dur="7s"
          repeatCount="indefinite"
        />
        <ellipse cx="18" cy="0" rx="7" ry="8" fill="#2a3a4a" />
        <rect x="11" y="8" width="14" height="20" fill="#2a3a4a" rx="2" />
        <line x1="14" y1="12" x2="10" y2="28" stroke="#2a3a4a" strokeWidth="2">
          <animate attributeName="x2" values="10;18;10" dur="0.7s" repeatCount="indefinite" />
        </line>
        <line x1="22" y1="12" x2="26" y2="28" stroke="#2a3a4a" strokeWidth="2">
          <animate attributeName="x2" values="26;18;26" dur="0.7s" repeatCount="indefinite" />
        </line>
      </g>
      {/* Second person - unit number on door */}
      <text x="8" y="78" fill="#ffffff18" fontSize="9" fontFamily="monospace">301</text>
      <text x="8" y="115" fill="#ffffff18" fontSize="9" fontFamily="monospace">302</text>
      <text x="295" y="78" fill="#ffffff18" fontSize="9" fontFamily="monospace">303</text>
      <text x="295" y="115" fill="#ffffff18" fontSize="9" fontFamily="monospace">304</text>
    </svg>
  )
}

/* ─── Scene router ─────────────────────────────────────────── */
type CameraId = "cam1" | "cam2" | "cam3" | "cam4" | "cam5" | "cam6"

const SCENES: Record<CameraId, React.FC> = {
  cam1: MainGateScene,
  cam2: LobbyScene,
  cam3: SocialHubScene,
  cam4: ParkingScene,
  cam5: GardenScene,
  cam6: CorridorScene,
}

export function CCTVScene({ cameraId }: { cameraId: string }) {
  const Scene = SCENES[cameraId as CameraId]
  if (!Scene) return null
  return (
    <div className="absolute inset-0">
      <Scene />
      <CCTVOverlay />
    </div>
  )
}
