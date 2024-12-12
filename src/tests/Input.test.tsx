import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Input } from "@/input";

describe("Input", () => {
  it("should match the snapshot with default props", () => {
    const { asFragment } = render(
      <Input placeholder="Enter text" onChange={() => {}} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with a password field", () => {
    const { asFragment } = render(
      <Input placeholder="Password" type="password" onChange={() => {}} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with an icon", () => {
    const { asFragment } = render(
      <Input
        className="rounded border"
        iconSize={24}
        placeholder="Search"
        type="text"
        onChange={() => {}}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("should match the snapshot with error message", () => {
    const { asFragment } = render(
      <Input
        error="This field is required"
        placeholder="Enter text"
        type="text"
        onChange={() => {}}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with password strength indicator", () => {
    const { asFragment } = render(
      <Input
        isPasswordStrength
        placeholder="Password"
        type="password"
        onChange={() => {}}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with checkbox type", () => {
    const { asFragment } = render(
      <Input
        className="ml-2"
        label="I agree to the terms"
        type="checkbox"
        onChange={() => {}}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
