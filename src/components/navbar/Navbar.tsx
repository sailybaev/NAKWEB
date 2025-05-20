import { Logo } from "../reusable/Logo";
import { MegaMenu } from "./Menu/MegaMenu";
import { NavItemBold } from "./NavItemBold";
import { HamburgerButton } from "./mobile/HamburgerButton";
import { MobileMenu } from "./mobile/MobileMenu";
import { NavLinks } from "./NavLinks";
import { NavProvider, useNavigation } from "./NavContext";
import { LanguageSwitcher } from "../../utils/LanguageSwitcher"; 
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react'; 

function NavBarContent() {
  const { menuOpen, megaMenuOpen, config } = useNavigation();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  
  return (
    <nav className={`bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 sticky top-0 z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2 ">
        <Logo logo="/logo.png"/>
        
        {/* Only Mobile version */}
        <HamburgerButton />
        
        <div className="hidden md:flex md:items-center md:gap-4 md:order-2">
          <LanguageSwitcher /> 
          <NavItemBold href="/contacts">
            {t('navbar.contact')}
          </NavItemBold>
        </div>
        
        {/* Mobilka */}
        <MobileMenu />
        
        <div className="hidden md:flex md:w-auto md:order-1 hover:cursor-pointer "> 
          <NavLinks />
        </div>
      </div>
      
      {megaMenuOpen && !menuOpen && (
        <div className="hidden md:block">
          <MegaMenu isOpen={true} items={config.megaMenuItems} />
        </div>
      )}
    </nav>
  );
}

export function NavBar() {
  return (
    <NavProvider>
      <NavBarContent />
    </NavProvider>
  );
}