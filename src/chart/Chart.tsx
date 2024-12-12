import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  ChartTypeRegistry,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  BarController,
  DoughnutController,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  ScatterController,
  PolarAreaController,
  InteractionItem,
} from "chart.js";
import { useRef, useCallback } from "react";
import {
  Chart as ChartRoot,
  ChartProps,
  getElementAtEvent,
} from "react-chartjs-2";

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

type ChartType = keyof ChartTypeRegistry;

type Props<T extends ChartType> = {
  data: ChartData<T>;
  options?: ChartOptions<T>;
  type: T;
  getElementSelected?: (elementSelected: InteractionItem[]) => void;
} & ChartProps<T>;

export const Chart = <T extends ChartType>({
  type,
  data,
  options,
  getElementSelected,
  ...props
}: Props<T>) => {
  const chartRef = useRef(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (chartRef.current) {
        const element = getElementAtEvent(chartRef.current, event);

        if (element.length && getElementSelected) {
          getElementSelected(element);
        }
      }
    },
    [getElementSelected],
  );

  return (
    <ChartRoot
      ref={chartRef}
      data={data}
      options={options}
      type={type}
      onClick={handleClick}
      {...props}
    />
  );
};
