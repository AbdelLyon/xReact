import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DateRange } from "react-day-picker";

import { RangePicker } from "@/date";

describe("RangePicker", () => {
  it("should match the snapshot with default props", () => {
    const { asFragment } = render(<RangePicker setDate={() => {}} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with selected date range", () => {
    const dateRange: DateRange = {
      from: new Date(2023, 8, 1),
      to: new Date(2023, 8, 15),
    };
    const { asFragment } = render(
      <RangePicker date={dateRange} setDate={() => {}} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with custom class names", () => {
    const dateRange: DateRange = {
      from: new Date(2023, 8, 1),
      to: new Date(2023, 8, 15),
    };
    const { asFragment } = render(
      <RangePicker
        classNames={{
          calendarIcon: "text-red-500",
          popoverContent: "bg-gray-100",
        }}
        date={dateRange}
        setDate={() => {}}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
