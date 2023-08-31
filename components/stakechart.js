import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function App() {
  const canvasEl = useRef(null);

  const colors = {
    green: {
      default: "rgba(76, 233, 149, 1)",
      half: "rgba(76, 233, 149, 0.5)",
      quarter: "rgba(76, 233, 149, 0.25)",
      zero: "rgba(76, 233, 149, 0)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.green.half);
    gradient.addColorStop(0.65, colors.green.quarter);
    gradient.addColorStop(1, colors.green.zero);

    const weight = [10.0, 30.2, 35.1, 40.4, 35.9, 40.2, 50.8, 58.6, 59.6, 59.2];

    const labels = [
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: "Staked",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.green.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.green.default,
          pointRadius: 3
        }
      ]
    };
    const config = {
      type: "line",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  }, []);

  return (
    <div className="pp">
      <canvas id="myChart" ref={canvasEl} height="130" style={{padding:'80px 20px 0 20px'}} />
    </div>
  );
}
