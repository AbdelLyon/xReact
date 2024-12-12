import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  BarController,
  DoughnutController,
  ScatterController,
  PolarAreaController,
} from "chart.js";

import { Chart } from "@/chart";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  BarController,
  DoughnutController,
  ScatterController,
  PolarAreaController,
);

describe("XuiChart", () => {
  const mockGetContext = vi
    .fn()
    .mockReturnValue({} as CanvasRenderingContext2D);

  HTMLCanvasElement.prototype.getContext = mockGetContext;

  beforeEach(() => {
    vi.mock("react-chartjs-2", async () => {
      const originalModule = await vi.importActual("react-chartjs-2");

      return {
        ...originalModule,
        getElementAtEvent: () => {
          return [{ index: 0, datasetIndex: 0 }];
        },
      };
    });
  });

  it("should match the snapshot", () => {
    const data = {
      labels: ["January", "February", "March"],
      datasets: [
        {
          label: "Dataset 1",
          data: [10, 20, 30],
        },
      ],
    };

    const { asFragment } = render(<Chart data={data} type="bar" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should call getElementSelected when an element is clicked", () => {
    const data = {
      labels: ["January", "February", "March"],
      datasets: [
        {
          label: "Dataset 1",
          data: [10, 20, 30],
        },
      ],
    };

    const getElementSelected = vi.fn();

    render(
      <Chart data={data} getElementSelected={getElementSelected} type="bar" />,
    );

    const canvas = screen.getByRole("img");

    fireEvent.click(canvas);

    expect(getElementSelected).toHaveBeenCalledWith([
      { index: 0, datasetIndex: 0 },
    ]);
    expect(getElementSelected).toHaveBeenCalledTimes(1);
  });
});
