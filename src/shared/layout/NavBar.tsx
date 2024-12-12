import { forwardRef, useEffect, useRef, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlignLeft, User } from "lucide-react";

import { SelectLanguage } from "../select/SelectLanguage";

import { SidebarMenu } from "./SidebarMenu";

import { ToggleTheme } from "@/theme/ToggleTheme";
import { cn } from "@/utils";
import { NavbarProps, ProfileNavigation } from "@/types/layoutTypes";
import { Popover } from "@/popover/Popover";
import { PopoverClose } from "@/ui/popover";

const MenuBarNavigation = memo(
  ({ navigation = [] }: { navigation: ProfileNavigation[] }) => (
    <nav className="border border-border bg-white p-2 shadow-none dark:bg-card">
      {navigation.map((item) => {
        const navItem = typeof item === "string" ? { name: item } : item;

        return (
          <PopoverClose
            key={item.name}
            className="flex w-full items-center gap-2 rounded-md p-2 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-background"
            onClick={navItem.onClick}
          >
            {navItem.icon && (
              <FontAwesomeIcon className="size-4" icon={navItem.icon} />
            )}

            <span>{navItem.name}</span>
          </PopoverClose>
        );
      })}
    </nav>
  ),
);

MenuBarNavigation.displayName = "MenuBarNavigation";

const UserPopover = memo(
  ({
    currentUser,
    profileNavigation,
  }: {
    currentUser: string;
    profileNavigation: ProfileNavigation[];
    onOpenChange?: (open: boolean) => void;
    open?: boolean;
  }) => {
    return (
      <Popover
        classNames={{ popover: "w-[200px]", trigger: "border-none" }}
        trigger={
          <>
            <div className="relative hidden cursor-pointer items-center gap-2 rounded-md px-3 py-2 font-medium dark:text-white lg:flex">
              <User className="size-5" />
              <p className="truncate">{currentUser}</p>
            </div>
            <div className="flex size-10 cursor-pointer items-center justify-center rounded-md dark:bg-background dark:text-white lg:hidden">
              <User className="size-5" />
            </div>
          </>
        }
      >
        <MenuBarNavigation navigation={profileNavigation} />
      </Popover>
    );
  },
);

UserPopover.displayName = "UserPopover";

const MobileMenu = forwardRef<
  HTMLDivElement,
  {
    isOpenDropdown: boolean;
    mobileNavigation: any;
    pathname: string;
    buttonAction?: () => React.ReactNode;
  }
>(({ isOpenDropdown, mobileNavigation, pathname, buttonAction }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out",
      isOpenDropdown
        ? "opacity-100 max-h-[var(--navbar-content-height)]"
        : "opacity-0 max-h-0",
    )}
  >
    <SidebarMenu
      isNavbar
      className="w-full"
      isOpenDropdown={isOpenDropdown}
      navigation={mobileNavigation}
      pathname={pathname}
    />
    {buttonAction && <div className="mb-4">{buttonAction()}</div>}
  </div>
));

MobileMenu.displayName = "MobileMenu";

export const Navbar = memo(
  ({
    applicationName,
    currentUser,
    profileNavigation,
    className,
    setOpenDropdown,
    isOpenDropdown,
    mobileNavigation,
    pathname,
    logo,
    buttonAction,
    languages,
    languageSelected,
    onLanguageChange,
    notification,
  }: NavbarProps) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (contentRef.current) {
        const height = isOpenDropdown ? contentRef.current.scrollHeight : 0;

        document.documentElement.style.setProperty(
          "--navbar-content-height",
          `${height}px`,
        );
      }
    }, [isOpenDropdown]);

    const headerClasses = cn(
      "fixed top-0 z-40 flex w-full flex-col border-b border-border bg-white dark:bg-sidebar shadow-lg dark:shadow-none px-4 transition-all duration-300 ease-in-out",
      isOpenDropdown ? "h-[calc(var(--navbar-content-height)+4rem)]" : "h-16",
      className,
    );

    const renderLogo = (className: string) =>
      logo && <div className={className}>{logo()}</div>;

    const renderMobileMenuButton = () => (
      <button
        className="rounded-md border border-border bg-white px-2.5 py-2 dark:bg-background sm:hidden"
        onClick={() => setOpenDropdown?.(!isOpenDropdown)}
      >
        <AlignLeft className="text-text size-5" />
      </button>
    );

    const renderNavItems = () => (
      <nav className="flex items-center justify-end gap-4 rounded-md border border-border bg-white dark:bg-background">
        {languages && (
          <SelectLanguage
            languages={languages}
            value={languageSelected?.value ?? ""}
            onLanguageChange={onLanguageChange}
          />
        )}
        <ToggleTheme className="dark:text-white" />
        <div className="h-10 w-[2px] bg-border" />
        {notification && (
          <FontAwesomeIcon
            className="size-4 cursor-pointer dark:text-white"
            icon={notification.icon}
            onClick={notification.onClick}
          />
        )}
        <UserPopover
          currentUser={currentUser}
          profileNavigation={profileNavigation}
        />
      </nav>
    );

    return (
      <header className={headerClasses}>
        <div className="flex h-16 w-full items-center justify-between">
          {renderLogo(
            "border-border w-[275px] justify-center border-r hidden lg:block",
          )}
          {renderMobileMenuButton()}
          <div className="flex w-full flex-1 items-center justify-end text-black lg:pl-8">
            {applicationName ? (
              <h1 className="hidden w-full cursor-default select-none text-2xl font-semibold dark:text-white sm:block">
                {applicationName}
              </h1>
            ) : (
              renderLogo(
                "border-border hidden sm:flex w-full justify-start border-r lg:hidden",
              )
            )}
            {renderNavItems()}
          </div>
        </div>
        <MobileMenu
          ref={contentRef}
          buttonAction={buttonAction}
          isOpenDropdown={isOpenDropdown || false}
          mobileNavigation={mobileNavigation}
          pathname={pathname}
        />
      </header>
    );
  },
);
Navbar.displayName = "Navbar";
