import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
    percent: number;
    color: string
  }
  
function DoughnutChart({ percent, color } : PieChartProps){
    const data = {
      labels: ['Completed', 'Remaining'],
      datasets: [
        {
          data: [percent, 100 - percent],
          backgroundColor: [
            `rgba(${color})`,
            `rgba(${color}, 30%)`,
          ],
          borderColor: 'transparent',
          borderRadius: 10,
          cutout: '80%',
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
    
    return <Doughnut data={data} options={options} />;
  };
  
  export default DoughnutChart;
  