import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Modal } from "@/modal";

describe("Modal Component", () => {
  it("renders correctly with title, description, trigger, and matches snapshot", () => {
    const { container } = render(
      <Modal
        description="This is a test description"
        title="Test Modal Title"
        trigger={<button>Open Modal</button>}
      >
        <div>Modal Content</div>
      </Modal>,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders with custom footer and matches snapshot", () => {
    const { container } = render(
      <Modal
        footer={<button>Confirm</button>}
        title="Modal with Footer"
        trigger={<button>Open Modal</button>}
      >
        <div>Modal Content</div>
      </Modal>,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders without description and matches snapshot", () => {
    const { container } = render(
      <Modal
        title="Modal without Description"
        trigger={<button>Open Modal</button>}
      >
        <div>Modal Content</div>
      </Modal>,
    );

    expect(container).toMatchSnapshot();
  });
});
