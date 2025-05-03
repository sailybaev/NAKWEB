import { NavItem } from "./NavItem";
import { NavItemBold } from "./NavItemBold";
import { DropdownNavItem } from "./DropdownNavItem";
import { MegaMenu } from "./MegaMenu";
import { useNavigation } from "./NavContext";

export function MobileMenu() {
  const { menuOpen, megaMenuOpen, config } = useNavigation();

  if (!menuOpen) return null;
  
  return (
    <div className="items-center justify-between w-full md:hidden" id="navbar-cta">
      <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          
          <DropdownNavItem label="Тұрғын Үй" isMobile />
          
          {megaMenuOpen && (
            <MegaMenu isOpen={true} items={config.megaMenuItems} isMobile />
          )}
          
        </li>

        {config.mainItems
          .filter(item => item.label !== "Байланыс")
          .map((item, index) => (
            <NavItem key={index} href={item.href} isMobile>
              {item.label}
            </NavItem>
          ))}
        
        <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <NavItemBold href="#">
            {config.mainItems.find(item => item.label === "Байланыс")?.label || "Байланыс"}
          </NavItemBold>
        </div>
      </ul>
    </div>
  );
}