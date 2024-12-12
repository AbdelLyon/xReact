import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Popover } from "@/popover/Popover";

describe("Popover", () => {
  it("matches the snapshot", () => {
    const triggerText = "Click me";
    const popoverContent = "Popover content";
    const { asFragment } = render(
      <Popover
        classNames={{ trigger: "custom-trigger", popover: "custom-popover" }}
        trigger={<button>{triggerText}</button>}
      >
        <div>{popoverContent}</div>
      </Popover>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
