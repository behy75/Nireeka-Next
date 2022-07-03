import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const data = {
  stockFullName: "SW Limited.",
  stockShortName: "ASX:SFW",
  // price: {
  //   current: 2.32,
  //   open: 2.23,
  //   low: 2.215,
  //   high: 2.325,
  //   cap: 93765011,
  //   ratio: 20.1,
  //   dividend: 1.67,
  // },
  chartData1: {
    labels: [
      "sep 22",
      "sep 23",
      "sep 24",
      "sep 25",
      "sep 26",
      "sep 27",
      "sep 28",
    ],
    data: [0, 0, 0, 0, 0, 0, 0],
  },
  chartData2: {
    labels: [
      "sep 22",
      "sep 23",
      "sep 24",
      "sep 25",
      "sep 26",
      "sep 27",
      "sep 28",
    ],
    data: [0, 0, 0, 0, 0, 0, 0],
  },
  chartData3: {
    labels: [
      "sep 22",
      "sep 23",
      "sep 24",
      "sep 25",
      "sep 26",
      "sep 27",
      "sep 28",
    ],
    data: [0, 0, 0, 0, 0, 0, 0],
  },
  chartData4: {
    labels: [
      "sep 22",
      "sep 23",
      "sep 24",
      "sep 25",
      "sep 26",
      "sep 27",
      "sep 28",
    ],
    data: [0, 0, 0, 0, 0, 0, 0],
  },
};

const buildData = ({ chartData1, chartData2, chartData3, chartData4 }) => ({
  labels: chartData1.labels,
  datasets: [
    {
      label: "",
      data: chartData2.data,
      backgroundColor: "#eff6ff",
      borderColor: "rgba(255, 255, 255, 0.1)",
      pointBackgroundColor: "rgba(255, 255, 255, 0.1)",
      fill: "start",
      zIndex: 20,
      tension: 0,
    },
    {
      label: "",
      data: chartData1.data,
      backgroundColor: "#91b2ff",
      borderColor: "#91b2ff",
      // pointBackgroundColor: "#6366f1",
      zIndex: 10,
      fill: "start",
      tension: 0,
    },
    {
      label: "",
      data: chartData4.data,
      backgroundColor: "#eff6ff",
      borderColor: "rgba(255, 255, 255, 0.1)",
      pointBackgroundColor: "rgba(255, 255, 255, 0.1)",
      fill: "start",
      zIndex: 20,
      tension: 0,
    },
    {
      label: "",
      data: chartData3.data,
      backgroundColor: "#d4eeff",
      borderColor: "#d4eeff",
      // pointBackgroundColor: "#6366f1",
      zIndex: 10,
      fill: "start",
      tension: 0,
    },
  ],
});

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: {
      ticks: {
        color: "#6366f1",
      },
      grid: {
        display: false,
        drawBorder: true,
        borderColor: "#6366f1",
        circular: true,
        borderDash: [5, 5],
      },
    },

    xAxes: {
      ticks: {
        color: "#6366f1",
      },
      grid: {
        circular: true,
        borderColor: "#6366f1",
        color: "#6366f1",
        borderDash: [5, 5],
      },
    },
  },
  layout: {
    padding: {
      right: 10,
    },
  },
};

const StockChart = ({ info }) => {
  const data = buildData(info);

  return (
    <>
      <div className="overflow-hidden w-full">
        <div className="flex w-full px-5 pb-4 pt-8 bg-blue-50 text-white items-center">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

function HealthChart() {
  return <StockChart info={data} />;
}

export default HealthChart;
