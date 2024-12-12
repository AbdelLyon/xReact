import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

import { ColumnDefinition, DataGrid } from "@/datagrid";

type Columns = ColumnDefinition<{
  id: string | number;
}>;

vi.mock("@/ui/accordion", () => ({
  Accordion: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="accordion">{children}</div>
  ),
  AccordionItem: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="accordion-item">{children}</div>
  ),
  AccordionTrigger: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="accordion-trigger">{children}</div>
  ),
  AccordionContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="accordion-content">{children}</div>
  ),
}));

vi.mock("@/hooks", () => ({
  useInfiniteScroll: vi.fn(),
}));

vi.mock("react-intersection-observer", () => ({
  useInView: () => ({ ref: vi.fn(), inView: false }),
}));

vi.mock("@/hooks/useDataGridState", () => ({
  useDataGridState: () => ({
    checkedRows: new Set(),
    isAllChecked: false,
    sortConfig: { key: null, direction: "asc" },
    handleCheckboxChange: vi.fn(),
    handleSelectAll: vi.fn(),
    handleSort: vi.fn(),
  }),
}));

vi.mock("./Skeleton", () => ({
  SkeletonRowAccordion: () => <div data-testid="skeleton-row" />,
}));

vi.mock("./Body", () => ({
  Body: () => <div data-testid="body-row" />,
}));

vi.mock("./Header", () => ({
  Header: ({ columns, isAllChecked, checkboxSelection }: any) => (
    <div data-testid="header">
      <span>Columns: {columns.length}</span>
      <span>Is All Checked: {isAllChecked.toString()}</span>
      <span>Checkbox Selection: {checkboxSelection.toString()}</span>
    </div>
  ),
}));

vi.mock("@/shared/input/LoadingSpinner", () => ({
  LoadingSpinner: () => <div data-testid="loading-spinner" />,
}));

vi.mock("@/utils", () => ({
  cn: (...args: any[]) => args.join(" "),
}));

// Tests
describe("DataGrid", () => {
  const mockColumns = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
  ];

  const mockRows = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];

  it("renders correctly with basic props", () => {
    const { container } = render(
      <DataGrid columns={mockColumns as Columns[]} rows={mockRows} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders loading state correctly", () => {
    const { container } = render(
      <DataGrid
        columns={mockColumns as Columns[]}
        isLoading={true}
        rows={[]}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders with caption and footer", () => {
    const { container } = render(
      <DataGrid
        caption="Test Caption"
        columns={mockColumns as Columns[]}
        footerContent={<div>Footer Content</div>}
        rows={mockRows}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders with fetching state", () => {
    const { container } = render(
      <DataGrid
        columns={mockColumns as Columns[]}
        isFetching={true}
        rows={mockRows}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
