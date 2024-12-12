import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';
export type Navigation = {
    hasAccess: boolean;
    link: ReactNode;
    icon: IconProp;
    name: string;
    pathname: string;
};
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
export type Notification = {
    name: string;
    icon: IconDefinition;
    onClick?: () => void;
};
export interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
}
export type Language = {
    flag: StaticImageData;
    label: string;
    value: string;
};
export type ProfileNavigation = {
    name: string;
    icon?: IconDefinition;
    onClick?: () => void;
};
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
export type DailyAppsLayoutProps = {
    header: NavbarProps;
    sidebar: SidebarProps;
    className?: string;
    children: ReactNode;
};
