import React from 'react';

interface OSLogoProps {
  className?: string;
  size?: number | string;
}

export const OSLogo: React.FC<OSLogoProps> = ({ className = "w-8 h-8", size }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <defs>
        {/* Top cyan/sky blue gradient */}
        <linearGradient id="os-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d2ff" />
          <stop offset="60%" stopColor="#0084ff" />
          <stop offset="100%" stopColor="#0047ba" />
        </linearGradient>

        {/* Deep royal blue gradient for O */}
        <linearGradient id="os-blue-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#0066ff" />
          <stop offset="60%" stopColor="#003db3" />
          <stop offset="100%" stopColor="#001a66" />
        </linearGradient>

        {/* Dynamic S gradient */}
        <linearGradient id="os-s-grad" x1="30%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#00c8ff" />
          <stop offset="45%" stopColor="#0077ff" />
          <stop offset="100%" stopColor="#002b80" />
        </linearGradient>

        {/* Orbital Swoosh Top Gradient */}
        <linearGradient id="os-swoosh-top" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0077ff" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#00b4ff" />
          <stop offset="100%" stopColor="#00e1ff" />
        </linearGradient>

        {/* Orbital Swoosh Bottom Gradient */}
        <linearGradient id="os-swoosh-bottom" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0047ba" />
          <stop offset="60%" stopColor="#002b80" />
          <stop offset="100%" stopColor="#00144d" />
        </linearGradient>
      </defs>

      {/* Top Orbital Swoosh */}
      <path
        d="M 180 120 C 230 80, 360 65, 430 135 C 445 150, 450 165, 435 168 C 420 170, 410 155, 390 140 C 340 105, 230 105, 175 140 Z"
        fill="url(#os-swoosh-top)"
      />

      {/* Letter 'O' */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 175 130 C 240 130, 275 175, 275 255 C 275 335, 235 380, 170 380 C 105 380, 60 335, 60 255 C 60 175, 105 130, 175 130 Z M 172 195 C 135 195, 115 220, 115 255 C 115 290, 135 315, 172 315 C 210 315, 225 290, 225 255 C 225 220, 208 195, 172 195 Z"
        fill="url(#os-blue-grad)"
      />

      {/* Letter 'S' */}
      <path
        d="M 270 185 C 330 140, 440 140, 455 185 C 460 200, 450 215, 430 215 L 340 215 C 320 215, 310 225, 310 240 C 310 255, 320 265, 340 265 L 400 265 C 445 265, 465 295, 465 330 C 465 375, 420 405, 335 405 C 265 405, 240 375, 230 355 L 290 325 C 300 340, 315 355, 345 355 C 375 355, 395 345, 395 325 C 395 310, 380 300, 355 300 L 305 300 C 260 300, 240 270, 240 235 C 240 200, 260 185, 270 185 Z"
        fill="url(#os-s-grad)"
      />

      {/* Bottom Swoosh Wrap */}
      <path
        d="M 50 365 C 90 415, 180 435, 250 395 C 280 375, 310 345, 325 325 L 300 305 C 280 330, 250 355, 220 370 C 160 395, 95 375, 65 345 C 55 335, 50 345, 50 365 Z"
        fill="url(#os-swoosh-bottom)"
      />
    </svg>
  );
};
