import { createContext, useState, useContext, ReactNode } from 'react';
import { NavConfig } from './types';
import { navConfig } from './navConfig';
import { useTranslation } from 'react-i18next';

interface NavContextType {
  menuOpen: boolean;
  megaMenuOpen: boolean;
  toggleMainMenu: () => void;
  toggleMegaMenu: () => void;
  closeMegaMenu: () => void;
  closeMainMenu: () => void;
  config: NavConfig;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<boolean>(false);
  
  const toggleMainMenu = () => {
    setMenuOpen(prev => !prev);
    if (!menuOpen) {
      setMegaMenuOpen(false);
    }
  };
  
  const toggleMegaMenu = () => {
    setMegaMenuOpen(prev => !prev);
  };
  
  const closeMegaMenu = () => setMegaMenuOpen(false);
  const closeMainMenu = () => setMenuOpen(false);

  return (
    <NavContext.Provider value={{
      menuOpen,
      megaMenuOpen,
      toggleMainMenu,
      toggleMegaMenu,
      closeMegaMenu,
      closeMainMenu,
      config: navConfig
    }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavProvider');
  }
  return context;
}