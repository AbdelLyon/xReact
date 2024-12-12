import { memo } from "react";

import { SidebarMenu } from "./SidebarMenu";

import { cn } from "@/utils";
import { SidebarProps } from "@/types/layoutTypes";

export const Sidebar = memo(
  ({
    navigation,
    pathname,
    className,
    isOpenDropdown,
    buttonSidebar,
  }: SidebarProps) => {
    return (
      <aside
        className={cn(
          "border-border bg-sidebar fixed inset-y-0 z-10 mt-16 flex min-h-screen",
          className,
        )}
      >
        <div className="sticky left-2 top-16 lg:fixed lg:w-[270px]">
          <nav className="mt-4 flex w-full flex-col items-center justify-center gap-4">
            {buttonSidebar?.()}
            <SidebarMenu
              className="w-full"
              isOpenDropdown={isOpenDropdown}
              navigation={navigation}
              pathname={pathname}
            />
          </nav>
        </div>
      </aside>
    );
  },
);

Sidebar.displayName = "Sidebar";
