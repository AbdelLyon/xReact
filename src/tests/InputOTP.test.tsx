import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { InputOTP } from "@/input";

vi.mock("@/ui/input-otp", () => ({
  InputOTPGroup: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="otp-group">{children}</div>
  ),
  InputOTPSeparator: () => <span data-testid="otp-separator">-</span>,
  InputOTPSlot: ({ index }: { index: number }) => (
    <input data-testid={`otp-slot-${index}`} />
  ),
  InputOTP: ({ children, onChange, ...props }: any) => (
    <div
      data-testid="otp-root"
      {...props}
      onChange={(e: any) => onChange?.(e.target.value)}
    >
      {children}
    </div>
  ),
}));

describe("InputOTP", () => {
  it("renders correctly with default props", () => {
    const { asFragment } = render(<InputOTP />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with custom props", () => {
    const { asFragment } = render(
      <InputOTP
        disabled
        defaultValue="1234"
        groupSize={2}
        label="Enter OTP"
        maxLength={4}
        separator={false}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct number of groups and separators", () => {
    render(<InputOTP groupSize={2} maxLength={6} />);
    expect(screen.getAllByTestId("otp-group")).toHaveLength(3);
    expect(screen.getAllByTestId("otp-separator")).toHaveLength(2);
  });

  it("renders label when provided", () => {
    render(<InputOTP label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });
});
