import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";

import { Accordion, AccordionItemData } from "@/accordion";

describe("Accordion Component", () => {
  it("renders correctly with data and matches snapshot", () => {
    const items: AccordionItemData[] = [
      {
        title: () => <span>Item 1</span>,
        description: () => <span>Description 1</span>,
        value: "item-1",
        content: () => <div>Content 1</div>,
      },
      {
        title: () => <span>Item 2</span>,
        description: () => <span>Description 2</span>,
        value: "item-2",
        content: () => <div>Content 2</div>,
      },
    ];

    const { container } = render(<Accordion items={items} />);

    expect(container).toMatchSnapshot();
  });

  it("renders without data and matches snapshot", () => {
    const { container } = render(<Accordion items={[]} />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with custom renderHeader", () => {
    const items: AccordionItemData[] = [
      {
        title: () => <span>Item 1</span>,
        description: () => <span>Description 1</span>,
        value: "item-1",
        content: () => <div>Content 1</div>,
      },
    ];

    const renderHeader = ({ title, description }: AccordionItemData) => (
      <div>
        <h3>{title()}</h3>
        {description && <p>{description()}</p>}
      </div>
    );

    const { container } = render(
      <Accordion items={items} renderHeader={renderHeader} />,
    );

    expect(container).toMatchSnapshot();
  });
});
