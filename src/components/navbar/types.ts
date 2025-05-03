export interface NavItem {
    label: string;
    href: string;
    description?: string;
  }
  
  export interface MegaMenuItems {
    columnOne: NavItem[];
    columnTwo: NavItem[];
  }
  
  export interface NavConfig {
    mainItems: NavItem[];
    megaMenuItems: MegaMenuItems;
  }