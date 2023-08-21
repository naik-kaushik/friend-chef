import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "username",
      backgroundColor: "rgb(255, 255, 255)",
      borderColor: "#614BC3",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = (props) => {
  const gotArray = props.data;
  const usernameArray = props.data.map((line) => line.username);
  const ratingsArray = props.data.map((line) => line.rating);
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "USERNAME",
          font: {
            size: 24, // Increase font size for x-label
            weight: "semi-bold", // Make x-label bold
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "RATING",
          font: {
            size: 24, // Increase font size for x-label
            weight: "semi-bold", // Make x-label bold
          },
        },
      },
    },
  };
  return (
    <div className="w-auto mx-16 px-8">
      <Line
        data={{
          labels: usernameArray,
          datasets: [
            {
              label: "rating",
              backgroundColor: "rgb(255, 255, 255)",
              borderColor: "#614BC3",
              data: ratingsArray,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default LineChart;
