import React from "react";
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

//  register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//  opts for show beter text and hints
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },

    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

// labels
const labels = [
  "Dec 13",
  "Dec 14",
  "Dec 15",
  "Dec 16",
  "Dec 17",
  "Dec 18",
  "Dec 19",
];

// data (structure is important) -> labels  | datasets **** datasets is one or more items #6f8cfe
export const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "My First Dataset",
      data: [12, 23, 67, 34, 45, 53, 35],
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(255, 255, 235, 1)",
      tension: 0.1,
    },
  ],
};

// Line one of types in chart js (search for find other types)
function Chart() {
  return <Line options={options} data={data} click="onClick" />;
}

export default Chart;
