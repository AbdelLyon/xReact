import { render, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Progress } from "@/progressbar";

vi.useFakeTimers();

describe("Progress", () => {
  it("renders correctly without animation", () => {
    const segments = [
      { value: 30, color: "red" },
      { value: 50, color: "blue" },
      { value: 20, color: "green" },
    ];

    const { container } = render(<Progress segments={segments} />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with animation", () => {
    const segments = [
      { value: 30, color: "red" },
      { value: 50, color: "blue" },
      { value: 20, color: "green" },
    ];

    const { container } = render(
      <Progress animate={true} animationDuration={500} segments={segments} />,
    );

    act(() => {
      vi.runAllTimers();
    });

    expect(container).toMatchSnapshot();
  });
});
