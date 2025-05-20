import { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ children, content, position = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2'
  };
  
  return (
    <div className="relative inline-block" 
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && (
        <div className={`absolute ${positionClasses[position]} z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700 transition-opacity duration-300 opacity-100 whitespace-nowrap`}
             role="tooltip">
          {content}
          <div className={`tooltip-arrow ${position === 'top' ? 'bottom-[-5px]' : position === 'bottom' ? 'top-[-5px]' : ''}`}></div>
        </div>
      )}
    </div>
  );
}