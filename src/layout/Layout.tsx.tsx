import { useState, useCallback, useEffect } from "react";

import { Navbar } from "@/shared/layout/NavBar";
import { Sidebar } from "@/shared/layout/Sidebar";
import { DailyAppsLayoutProps } from "@/types/layoutTypes";
import { cn } from "@/utils";

export const Layout = ({
  header,
  children,
  className,
  sidebar,
}: DailyAppsLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpenDropdown = useCallback((isOpen: boolean) => {
    setIsOpen(isOpen);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaQueryChange = () => setIsOpen(false);

    if (mediaQuery.matches) setIsOpen(false);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const sidebarProps = {
    buttonSidebar: sidebar.buttonSidebar,
    className: cn(
      "w-16 px-1.5 flex-col lg:px-3 border-r transition-all duration-300 ease-in-out",
      "lg:w-[290px] lg:min-w-[290px] lg:mt-0 md:sticky",
      "hidden sm:flex",
      className,
    ),
    isOpenDropdown: isOpen,
    navigation: sidebar.navigation,
    pathname: sidebar.pathname,
  };

  return (
    <div className=" min-h-screen w-full overflow-x-auto">
      <Navbar
        ToggleTheme={header.ToggleTheme}
        applicationName={header.applicationName}
        buttonAction={header.buttonAction}
        className={header.className}
        currentUser={header.currentUser}
        isOpenDropdown={isOpen}
        languageSelected={header.languageSelected}
        languages={header.languages}
        logo={header.logo}
        mobileNavigation={header.mobileNavigation}
        notification={header.notification}
        pathname={header.pathname}
        profileNavigation={header.profileNavigation}
        setOpenDropdown={setOpenDropdown}
        onLanguageChange={header.onLanguageChange}
      />
      <div className="relative z-20 flex w-full">
        {!isOpen && <Sidebar {...sidebarProps} />}

        <main
          className={cn(
            "mx-auto w-full mt-20 mb-4 sm:ml-16 md:ml-0",
            className,
          )}
        >
          {children}
        </main>

        {isOpen && (
          <button
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
};
