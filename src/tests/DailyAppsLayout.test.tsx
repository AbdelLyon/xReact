import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { AlignLeft } from "lucide-react";

import { Layout } from "@/layout";
import { ToggleTheme } from "@/theme";

// Mock props for Layout
const mockProps = {
  header: {
    Logo: <div>App Logo</div>,
    profileNavigation: [
      {
        name: "Profile",
        icon: faHome,
        onClick: () => {},
      },
      {
        name: "Settings",
        icon: faHome,
        onClick: () => {},
      },
    ],
    applicationName: "My App",
    className: "header-class",
    navigation: [
      {
        name: "Home",
        link: <a href="/">/home</a>,
        pathname: "/",
        icon: faHome,
        hasAccess: true,
      },
    ],
    pathname: "/",
    toggleTheme: () => {},
    user: "John Doe",
    buttonNavbar: () => <button />,
  },
  sidebar: {
    buttonSidebar: "Menu",
    btnIcon: <AlignLeft />,
    className: "sidebar-class",
    navigation: [
      {
        name: "Dashboard",
        link: <a href="/dashboard">/dashboard</a>,
        pathname: "/dashboard",
        icon: faHome,
        hasAccess: true,
      },
    ],
    pathname: "/",
  },
  children: <div>Content goes here</div>,
  className: "layout-class",
};

// Snapshot test for Layout
describe("Layout", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <Layout
        className={mockProps.className}
        header={{
          ...mockProps.header,
          toggleTheme: true,
          logo: () => mockProps.header.Logo,
          currentUser: "",
          mobileNavigation: [],
          ToggleTheme: ToggleTheme,
        }}
        sidebar={{
          ...mockProps.sidebar,
          buttonSidebar: () => mockProps.sidebar.buttonSidebar,
        }}
      >
        {mockProps.children}
      </Layout>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
