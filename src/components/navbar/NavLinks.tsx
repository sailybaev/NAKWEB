import { NavItem } from "./NavItem";
import { DropdownNavItem } from "./DropdownNavItem";
import { useNavigation } from "./NavContext";

export function NavLinks() {
  const { config } = useNavigation();
  
  return (
    <ul className="hidden md:flex md:space-x-8 rtl:space-x-reverse md:flex-row font-medium">
      
      
      {config.mainItems
        .filter(item => item.label !== "Байланыс")
        .map((item, index) => (
          <NavItem key={index} href={item.href}>
            {item.label}
          </NavItem>
        ))}

      <DropdownNavItem label="Тұрғын үй" />
    </ul>
  );
}