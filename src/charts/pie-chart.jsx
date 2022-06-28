import React from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(...registerables);

const PieChart = ({ labels=[], data=[] }) => {
    const dataSets = {
        labels: labels,
        datasets: [
            {
                label: "Total citizen",
                data: data,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        aspectRatio: 1,
        barThickness: 70,
        maintainAspectRatio: false,
    };
    return (
        <div className="h-full">
            <Pie data={dataSets} options={options} />
        </div>
    );
};

export default PieChart;
