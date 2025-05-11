'use client';

import { CategoryScore } from '@/types/assessment';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

interface ScoreChartProps {
  categories: CategoryScore[];
}

const ScoreChart: React.FC<ScoreChartProps> = ({ categories }) => {
  // Sort categories by score in descending order
  const sortedCategories = [...categories].sort((a, b) => b.score - a.score);

  const data = {
    labels: sortedCategories.map((cat) => cat.category),
    datasets: [
      {
        label: 'Score',
        data: sortedCategories.map((cat) => cat.score),
        backgroundColor: 'rgba(39, 110, 241, 0.2)',
        borderColor: 'rgba(39, 110, 241, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(39, 110, 241, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(39, 110, 241, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 15,
        ticks: {
          stepSize: 5,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[400px] w-full">
      <Radar data={data} options={options} />
    </div>
  );
};

export default ScoreChart;
