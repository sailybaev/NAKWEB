import { NavItem } from "./NavItem";
import { NavItemBold } from "./NavItemBold";
import { DropdownNavItem } from "./DropdownNavItem";
import { MegaMenu } from "./MegaMenu";
import { useNavigation } from "./NavContext";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function MobileMenu() {
  const { menuOpen, megaMenuOpen, config } = useNavigation();
  const { t } = useTranslation();

  if (!menuOpen) return null;
  
  return (
    <div className="items-center justify-between w-full md:hidden" id="navbar-cta">
      <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-white">
        <li>
          <DropdownNavItem label={t('navbar.housing')} isMobile />
          
          {megaMenuOpen && (
            <MegaMenu isOpen={true} items={config.megaMenuItems} isMobile />
          )}
        </li>

        <NavItem href="/" isMobile>
          {t('navbar.home')}
        </NavItem>
        
        <NavItem href="#" isMobile>
          {t('navbar.commerce')}
        </NavItem>
        
        <NavItem href="/about" isMobile>
          {t('navbar.about')}
        </NavItem>
        
        <NavItem href="#" isMobile>
          {t('navbar.campaigns')}
        </NavItem>
        
        <LanguageSwitcher isMobile={true} />
        
        <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <NavItemBold href="#">
            {t('navbar.contact')}
          </NavItemBold>
        </div>
      </ul>
    </div>
  );
}