import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ColumnChart({ chartData, labels, title }) {
  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: title,
            data: [...chartData, 0],
            borderColor: "#4263eb88",
            backgroundColor: ["#4263eb", "#e64980"],
          },
        ],
      }}
    />
  );
}
