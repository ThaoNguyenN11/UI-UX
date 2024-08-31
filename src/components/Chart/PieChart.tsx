
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: ['Hoàn thành', 'Còn lại'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19 ],
      backgroundColor: [
        'rgba(15, 209, 134, 1)',
        'rgba(255, 212, 59, 1)',
      ],
      borderColor: [
        'rgba(15, 209, 134, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
};


const PieChart: React.FC = () => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
