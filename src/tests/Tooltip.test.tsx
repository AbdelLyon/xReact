import { HTMLAttributes, PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { Tooltip } from "@/tooltip";

// Mock des dépendances
vi.mock("@/ui/tooltip", () => ({
  Tooltip: ({ children }: PropsWithChildren) => (
    <div data-testid="tooltip-root">{children}</div>
  ),
  TooltipContent: ({
    children,
    ...props
  }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
    <div data-testid="tooltip-content" {...props}>
      {children}
    </div>
  ),
  TooltipProvider: ({ children }: PropsWithChildren) => (
    <div data-testid="tooltip-provider">{children}</div>
  ),
  TooltipTrigger: ({
    children,
    ...props
  }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
    <div data-testid="tooltip-trigger" {...props}>
      {children}
    </div>
  ),
}));

vi.mock("@/utils", () => ({
  cn: (...args: any[]) => args.filter(Boolean).join(" "),
}));

describe("Tooltip Component", () => {
  it("renders correctly with default props", () => {
    const { asFragment } = render(
      <Tooltip
        content="This is a tooltip"
        trigger={<button>Hover me</button>}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with custom props", () => {
    const { asFragment } = render(
      <Tooltip
        align="start"
        classNames={{
          trigger: "custom-trigger",
          content: "custom-content",
        }}
        content={<div>Custom content</div>}
        delayDuration={500}
        side="right"
        sideOffset={10}
        trigger={<span>Custom trigger</span>}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with triggerAsChild prop", () => {
    const { asFragment } = render(
      <Tooltip
        content="Child content"
        trigger={<button>Child trigger</button>}
        triggerAsChild={true}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with open and onOpenChange props", () => {
    const onOpenChange = vi.fn();
    const { asFragment } = render(
      <Tooltip
        content="Controlled content"
        open={true}
        trigger={<button>Controlled tooltip</button>}
        onOpenChange={onOpenChange}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
