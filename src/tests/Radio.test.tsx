import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Radio } from "@/input";

describe("Radio", () => {
  it("renders correctly", () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];

    const { container } = render(
      <Radio
        defaultValue="option1"
        name="test-radio"
        options={options}
        onChange={() => {}}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
