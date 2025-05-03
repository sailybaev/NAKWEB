import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  children: ReactNode;
  isMobile?: boolean;
}

export function NavItem({ href, children, isMobile = false }: NavItemProps) {
  const baseClasses = "block py-2 px-3 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white";
  
  const mobileClasses = baseClasses;
  
  const desktopClasses = `${baseClasses} md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500`;
  
  const classes = isMobile ? mobileClasses : desktopClasses;
  
  return (
    <li>
      <a href={href} className={classes}>
        {children}
      </a>
    </li>
  );
}