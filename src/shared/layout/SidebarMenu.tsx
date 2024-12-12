import { cloneElement, isValidElement, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/utils";
import { Navigation, SidebarProps } from "@/types/layoutTypes";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
}

export const SidebarMenu = ({
  navigation,
  pathname,
  className,
  isOpenDropdown,
  isNavbar,
}: Partial<SidebarProps>) => {
  const getLinkClassName = (item: Navigation) => {
    const isActive = pathname === item.pathname;

    return cn(
      "flex items-center justify-center p-3 cursor-pointer my-2 menu-transition transition-all duration-300 ease-in-out rounded-md line-transition w-full text-white lg:justify-start lg:gap-4",
      isNavbar ? "hover:bg-background" : "hover:bg-sidebarHoverLink",
      isActive ? "border-l border-primary" : "",
      isActive && (isNavbar ? "bg-background" : "bg-sidebarHoverLink"),
      { "justify-start gap-4 text-text": isOpenDropdown },
    );
  };

  return (
    <div className={className}>
      {navigation?.map(
        (item: Navigation) =>
          item.hasAccess && (
            <div key={item.name} className={getLinkClassName(item)}>
              {isValidElement(item.link)
                ? cloneElement(item.link as ReactElement<LinkProps>, {
                    className: cn(
                      "flex items-center w-full",
                      (item.link as ReactElement<LinkProps>).props.className,
                    ),
                    children: (
                      <div className="flex items-center gap-2">
                        {item.icon && (
                          <FontAwesomeIcon
                            className={cn("size-5", {
                              "text-primary": pathname === item.pathname,
                            })}
                            icon={item.icon}
                          />
                        )}
                        <span
                          className={cn("sr-only lg:not-sr-only", {
                            "not-sr-only": isOpenDropdown,
                          })}
                        >
                          {item.name}
                        </span>
                      </div>
                    ),
                  })
                : item.link}
            </div>
          ),
      )}
    </div>
  );
};
