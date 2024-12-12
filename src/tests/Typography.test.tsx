import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Blockquote, InlineCode, Title } from "@/typography";

describe("Title component", () => {
  const loadingMock = vi.fn(() => <div>Loading...</div>);
  const titleText = "Test Title";

  it("should match snapshot when isLoading is false", () => {
    const { asFragment } = render(
      <Title loading={() => <p>...chargement</p>} title={titleText} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match snapshot when isLoading is true", () => {
    const { asFragment } = render(
      <Title isLoading={true} loading={loadingMock} title={titleText} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Blockquote component", () => {
  it("should match snapshot with given className", () => {
    const { asFragment } = render(
      <Blockquote className="extra-class">{'"Quote"'}</Blockquote>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("InlineCode component", () => {
  it("should match snapshot with given className", () => {
    const { asFragment } = render(
      <InlineCode className="code-extra">code</InlineCode>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
