import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { CustomButton } from "@/button/Button";

describe("CustomButton", () => {
  it("should match the snapshot with default props", () => {
    const { asFragment } = render(<CustomButton>Click me</CustomButton>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with icon", () => {
    const { asFragment } = render(
      <CustomButton icon={<i>icon</i>} iconPosition="left">
        Click me
      </CustomButton>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with different variant and size", () => {
    const { asFragment } = render(
      <CustomButton
        icon={<i>icon</i>}
        iconPosition="right"
        size="lg"
        variant="outline"
      >
        Click me
      </CustomButton>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
