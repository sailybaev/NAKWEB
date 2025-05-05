import { NavItem } from "./NavItem";
import { DropdownNavItem } from "./Menu/DropdownNavItem";
import { useNavigation } from "./NavContext";
import { useTranslation } from 'react-i18next';

export function NavLinks() {
  const { config } = useNavigation();
  const { t } = useTranslation();
  
  return (
    <ul className="hidden md:flex md:space-x-8 rtl:space-x-reverse md:flex-row font-medium">
      
      <NavItem href="/">
        {t('navbar.home')}
      </NavItem>
      
      <NavItem href="#">
        {t('navbar.commerce')}
      </NavItem>
      
      <NavItem href="/about">
        {t('navbar.about')}
      </NavItem>
      
      <NavItem href="#">
        {t('navbar.campaigns')}
      </NavItem>
      
      <DropdownNavItem label={t('navbar.housing')} />
    </ul>
  );
}