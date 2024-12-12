import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Slider } from "@/slider";

describe("Slider component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Slider values={{ min: 20, max: 80 }} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onChange with correct values when dragging", async () => {
    const mockOnChange = vi.fn();

    render(<Slider values={{ min: 20, max: 80 }} onChange={mockOnChange} />);

    const sliders = screen.getAllByRole("slider");
    const leftSlider = sliders[0];

    fireEvent.keyDown(leftSlider, { key: "ArrowRight" });
    fireEvent.keyDown(leftSlider, { key: "ArrowRight" });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled();
    });

    const lastCall =
      mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];

    expect(lastCall.min).toBeGreaterThan(20);
    expect(lastCall.max).toBe(80);
  });

  it("updates value on keyboard interaction", async () => {
    const mockOnChange = vi.fn();

    render(<Slider values={{ min: 20, max: 80 }} onChange={mockOnChange} />);

    const sliders = screen.getAllByRole("slider");
    const minSlider = sliders[0];

    fireEvent.keyDown(minSlider, { key: "ArrowRight" });
    fireEvent.keyDown(minSlider, { key: "ArrowRight" });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled();
    });

    const lastCall =
      mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];

    expect(lastCall.min).toBeGreaterThan(20);
    expect(lastCall.max).toBe(80);
  });
});
