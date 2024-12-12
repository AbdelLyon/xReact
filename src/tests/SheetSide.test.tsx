import { describe } from "node:test";

import { render } from "@testing-library/react";
import { expect, it } from "vitest";

import { SheetSide } from "@/sheet";

describe("SheetSide Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <SheetSide
        classNames={{ content: "custom-content", trigger: "custom-trigger" }}
        direction="right"
        title="Test Title"
        trigger={<button>Open</button>}
      >
        <div>Content of the sheet</div>
      </SheetSide>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
