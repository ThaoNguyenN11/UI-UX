// src/components/MyBarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Học trên lớp', 'Tự học', 'Thực hành', 'Làm bài tập'],
  datasets: [
    {
      label: 'Thực tế',
      data: [65, 59, 80, 81],
      backgroundColor: '#FF7039',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 0,
      barThickness: 30,
    },
    {
      label: 'Mục tiêu',
      data: [45, 39, 60, 71],
      backgroundColor: '#0FD186',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 0,
      barThickness: 30,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Biểu đồ thống kê tính đến thời điểm hiện tại',
    },
  },
  
};

const BarChart: React.FC = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
