import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const data: ChartData<'line'> = {
    labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4', 'Tuần 5', 'Tuần 6'],
    datasets: [
        {
            label: 'Học tập',
            data: [17,40, 58, 23, 89, 34],
            fill: false,
            backgroundColor: '#FF7039',
            borderColor: '#FF7039',
            borderCapStyle: 'round',
            borderDash: [0, 0],
            borderDashOffset: 2.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            tension: 0,
            spanGaps: false,
        },
        {
            label: 'Kỹ năng',
            data: [15, 50, 48, 63, 21, 92],
            fill: false,
            backgroundColor: '#0FD186',
            borderColor: '#0FD186',
            borderCapStyle: 'round',
            borderDash: [0, 0],
            borderDashOffset: 2.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            tension: 0,
            spanGaps: false,
        },
        {
            label: 'Rèn luyện',
            data: [80, 60, 77, 64, 50, 85],
            fill: false,
            backgroundColor: '#D4CCAF',
            borderColor: '#D4CCAF',
            borderCapStyle: 'round',
            borderDash: [0, 0],
            borderDashOffset: 1.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            tension: 0,
            spanGaps: false,
        },
    ],
};

const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Theo dõi mức độ hoàn thành',
        },
    },
};

const LineChart: React.FC = () => {
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
