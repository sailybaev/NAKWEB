import { ReactNode } from 'react';

interface DropdownProps {
  isOpen: boolean;
  toggle: (e: React.MouseEvent) => void;
  label: string | ReactNode;
  children: ReactNode;
  active?: boolean;
  variant?: 'primary' | 'secondary';
}

export function Dropdown({ isOpen, toggle, label, children, active = false, variant = 'primary' }: DropdownProps) {
  const getBorderClass = () => {
    if (active) return 'border-gray-900';
    return variant === 'primary' ? 'border-gary-900' : 'border-gray-300';
  };
  
  const getTextClass = () => {
    return variant === 'primary' ? 'text-gary-900' : 'text-gray-800';
  };

  return (
    <div className="relative">
      <button 
        className={`border ${getBorderClass()} ${getTextClass()} py-2 px-4 rounded-md flex items-center gap-2`}
        onClick={toggle}
      >
        {label}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      )}
    </div>
  );
}