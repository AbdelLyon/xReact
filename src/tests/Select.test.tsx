import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Select } from "@/select";

describe("Select", () => {
  it("should match the snapshot with default props", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];

    const { asFragment } = render(
      <Select
        isFetchingPage={false}
        label="Select an option"
        options={options}
        placeholder="Select..."
        selectedKeys={[]}
        onFetchPage={() => {}}
        onSearch={() => {}}
        onSelect={() => {}}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("should match the snapshot with search enabled and loading", () => {
    const options: Array<{ label: string; value: string }> = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];

    const { asFragment } = render(
      <Select
        isSearchable
        isFetchingPage={true}
        label="Searchable Select"
        options={options}
        placeholder="Search..."
        searchPlaceholder="Search options..."
        selectedKeys={[]}
        onFetchPage={() => {}}
        onSearch={() => {}}
        onSelect={() => {}}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("should match the snapshot with an error", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];

    const { asFragment } = render(
      <Select
        error="Something went wrong"
        isFetchingPage={false}
        label="Select with error"
        options={options}
        placeholder="Select..."
        selectedKeys={[]}
        onFetchPage={() => {}}
        onSearch={() => {}}
        onSelect={() => {}}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
