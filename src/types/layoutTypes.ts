import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

// Type pour les éléments de navigation
export type Navigation = {
  hasAccess: boolean;
  link: ReactNode;
  icon: IconProp;
  name: string;
  pathname: string;
};

// Props pour le composant Sidebar
export type SidebarProps = {
  navigation: Navigation[];
  iconSidebar?: string;
  pathname: string;
  className?: string;
  setOpenDropdown?: (isOpen: boolean) => void;
  isOpenDropdown?: boolean;
  buttonSidebar?: () => ReactNode;
  isNavbar?: boolean;
};

// Type pour les notifications
export type Notification = {
  name: string;
  icon: IconDefinition;
  onClick?: () => void;
};

// Interface pour les données d'image statique
export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

// Type pour les langues
export type Language = {
  flag: StaticImageData;
  label: string;
  value: string;
};

// Type pour la navigation du profil
export type ProfileNavigation = {
  name: string;
  icon?: IconDefinition;
  onClick?: () => void;
};

// Props pour le composant Navbar
export type NavbarProps = {
  profileNavigation: ProfileNavigation[];
  className?: string;
  toggleTheme?: boolean;
  setOpenDropdown?: (isOpen: boolean) => void;
  isOpenDropdown?: boolean;
  logo?: () => ReactNode;
  ToggleTheme: React.ComponentType;
  notification?: Notification;
  languages?: Language[];
  languageSelected?: Language;
  applicationName?: string;
  mobileNavigation: Navigation[];
  pathname: string;
  currentUser: string;
  onLanguageChange?: (language: Language) => void;
  buttonAction?: () => ReactNode;
};

// Props pour le layout DailyApps
export type DailyAppsLayoutProps = {
  header: NavbarProps;
  sidebar: SidebarProps;
  className?: string;
  children: ReactNode;
};
