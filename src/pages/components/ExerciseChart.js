import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Necessary for Chart.js 3
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ExerciseChart = () => {
    const chartData = {
        labels: Array.from({ length: 10 }, (_, i) => i + 1),
        datasets: [
            {
                label: "push up",
                data: [9, 7, 8, 9, 10, 9, 10, 8, 8, 7],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return <Line data={chartData} options={options} />;
};

export default ExerciseChart;
