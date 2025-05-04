import { useRef } from "react";
import { useNavigation } from "./NavContext";

interface DropdownNavItemProps {
  label: string;
  isMobile?: boolean;
}

export function DropdownNavItem({
  label,
  isMobile = false
}: DropdownNavItemProps) {
  const dropdownRef = useRef<HTMLLIElement>(null);
  const { toggleMegaMenu, megaMenuOpen, closeMegaMenu } = useNavigation();

  const handleToggle = () => {
    toggleMegaMenu();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    } else if (e.key === 'Escape' && megaMenuOpen) {
      closeMegaMenu();
    }
  };

  const buttonClasses = isMobile
    ? "block py-2 px-3 text-white rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 flex items-center w-full"
    : "flex items-center py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500";

  return (
    <li ref={dropdownRef} className={isMobile ? "" : "md:relative"}>
      <button
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={buttonClasses}
        aria-expanded={megaMenuOpen}
        aria-haspopup="true"
      >
        {label}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
    </li>
  );
}