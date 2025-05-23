import { ReactNode } from "react";

interface NavItemBoldProps {
  href: string;
  children: ReactNode;
}

export function NavItemBold({ href, children }: NavItemBoldProps) {
  return (
    <a 
      href={href} 
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {children}
    </a>
  );
}