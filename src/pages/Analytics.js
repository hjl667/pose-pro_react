import React from 'react';
import './styles/analytics.css';
import ExerciseLog from './components/ExerciseLog'
import ExerciseChart from './components/ExerciseLog'
import {Line} from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Analytics = () => {

    const userActivity = new Array(72).fill(false).map((_, i) => Math.random() > 0.5);

    const chartData = {
        labels: Array.from({ length: 10 }, (_, i) => i + 1),
        datasets: [
            {
                label: "Push up",
                data: [9, 7, 8, 9, 10, 9, 10, 8, 8, 7],
                fill: false,
                backgroundColor: 'rgb(0, 128, 0)',
                borderColor: 'rgba(0, 128, 0, 0.2)',
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

    return (
        <div>
            <h1 className="exercise-analytics-title">Exercise Analytics</h1>
            <div className="analytics-content">
                <ExerciseLog userActivity={userActivity} />
                <div style={{ marginTop: '45px' }}> {/* Adding margin */}
                    <Line data={chartData} options={options} />
                </div>

            </div>
        </div>
    );
};

export default Analytics;



