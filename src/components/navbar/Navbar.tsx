import { Logo } from "./Logo";
import { MegaMenu } from "./MegaMenu";
import { NavItemBold } from "./NavItemBold";
import { HamburgerButton } from "./HamburgerButton";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { NavProvider, useNavigation } from "./NavContext";

function NavBarContent() {
  const { menuOpen, megaMenuOpen, config } = useNavigation();
  
  const contactItem = config.mainItems.find(item => item.label === "Байланыс");

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Logo logo="logo.png"/>
        
        <HamburgerButton />
        
        <div className="hidden md:flex md:order-2">
          <NavItemBold href={contactItem?.href || "#"}>
            {contactItem?.label || "Байланыс"}
          </NavItemBold>
        </div>
        
        <MobileMenu />
        
        <div className="hidden md:flex md:w-auto md:order-1">
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