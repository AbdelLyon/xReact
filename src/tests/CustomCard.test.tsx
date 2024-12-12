import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { CardImage, CustomCard } from "@/card/CustomCard";

describe("CardImage", () => {
  test("should match snapshot when rendering children", () => {
    const { asFragment } = render(<CardImage>Test Child</CardImage>);

    expect(asFragment()).toMatchSnapshot();
  });

  test("should match snapshot with custom classes", () => {
    const { asFragment } = render(
      <CardImage className="custom-class">Children</CardImage>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("should match snapshot when forwarded ref is used", () => {
    const ref = { current: null };
    const { asFragment } = render(<CardImage ref={ref}>Children</CardImage>);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("CustomCard", () => {
  test("should match snapshot when rendering children", () => {
    const { asFragment } = render(<CustomCard>Test Child</CustomCard>);

    expect(asFragment()).toMatchSnapshot();
  });

  test("should match snapshot with clickable styles", () => {
    const { asFragment } = render(<CustomCard clickable />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("should match snapshot with width and height styles", () => {
    const { asFragment } = render(<CustomCard height="100px" width="200px" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
