import { ChartData, ChartOptions, ChartTypeRegistry, InteractionItem } from 'chart.js';
import { ChartProps } from 'react-chartjs-2';
type ChartType = keyof ChartTypeRegistry;
type Props<T extends ChartType> = {
    data: ChartData<T>;
    options?: ChartOptions<T>;
    type: T;
    getElementSelected?: (elementSelected: InteractionItem[]) => void;
} & ChartProps<T>;
export declare const Chart: <T extends ChartType>({ type, data, options, getElementSelected, ...props }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
