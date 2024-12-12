import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Tabs, TabsContent } from "@/tabs";

// Mock des dépendances
type Props = { children: React.ReactNode; [key: string]: any };
vi.mock("@/ui/card", () => ({
  Card: ({ children, ...props }: Props) => (
    <div data-testid="card" {...props}>
      {children}
    </div>
  ),
  CardContent: ({ children, ...props }: Props) => (
    <div data-testid="card-content" {...props}>
      {children}
    </div>
  ),
  CardDescription: ({ children, ...props }: Props) => (
    <div data-testid="card-description" {...props}>
      {children}
    </div>
  ),
  CardHeader: ({ children, ...props }: Props) => (
    <div data-testid="card-header" {...props}>
      {children}
    </div>
  ),
  CardTitle: ({ children, ...props }: Props) => (
    <div data-testid="card-title" {...props}>
      {children}
    </div>
  ),
}));

vi.mock("@/ui/tabs", () => ({
  Tabs: ({ children, ...props }: Props) => (
    <div data-testid="tabs" {...props}>
      {children}
    </div>
  ),
  TabsContent: ({ children, ...props }: Props) => (
    <div data-testid="tabs-content" {...props}>
      {children}
    </div>
  ),
  TabsList: ({ children, ...props }: Props) => (
    <div data-testid="tabs-list" {...props}>
      {children}
    </div>
  ),
  TabsTrigger: ({ children, ...props }: Props) => (
    <div data-testid="tabs-trigger" {...props}>
      {children}
    </div>
  ),
}));

describe("Tabs Component", () => {
  it("renders correctly", () => {
    const tabsConfig = [
      {
        value: "tab1",
        title: "Tab 1",
        description: "Description for Tab 1",
        titleTrigger: "Tab 1",
      },
      {
        value: "tab2",
        title: "Tab 2",
        description: "Description for Tab 2",
        titleTrigger: "Tab 2",
      },
    ];

    const { asFragment } = render(
      <Tabs defaultTab="tab1" tabs={tabsConfig}>
        <TabsContent value="tab1">
          <p>Content for Tab 1</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p>Content for Tab 2</p>
        </TabsContent>
      </Tabs>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with custom classNames", () => {
    const tabsConfig = [
      {
        value: "tab1",
        title: "Tab 1",
        description: "Description for Tab 1",
        titleTrigger: "Tab 1 Trigger",
      },
    ];

    const customClassNames = {
      root: "custom-root",
      tabsList: "custom-tabs-list",
      tabsTrigger: "custom-tabs-trigger",
      card: "custom-card",
      cardHeader: "custom-card-header",
      cardTitle: "custom-card-title",
      cardDescription: "custom-card-description",
      cardContent: "custom-card-content",
    };

    const { asFragment } = render(
      <Tabs classNames={customClassNames} defaultTab="tab1" tabs={tabsConfig}>
        <TabsContent value="tab1">
          <p>Content for Tab 1</p>
        </TabsContent>
      </Tabs>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
