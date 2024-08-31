import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type RadarProps = {
    data: ChartData<'radar'>;
    options: ChartOptions<'radar'>;
  };



function RadarChart({ data, options } : RadarProps){
  return (
    <div >
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
