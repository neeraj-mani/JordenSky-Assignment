import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph({ chartData, labels, title }) {
  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: title,
            data: [...chartData, 0],
            borderColor: "#4263eb88",
            backgroundColor: "#4263eb",
          },
        ],
      }}
    />
  );
}
