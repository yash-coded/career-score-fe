'use client';

import { RadarCategories } from '@/types/assessment';
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
  radarCategories: RadarCategories;
}

const ScoreChart: React.FC<ScoreChartProps> = ({ radarCategories }) => {
  // Format category names for better display
  const formatCategoryName = (name: string): string => {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  // Convert the radar categories object to arrays for the chart
  const categoryNames = Object.keys(radarCategories).map((key) =>
    formatCategoryName(key),
  );
  const categoryScores = Object.values(radarCategories).map(
    (category) => category.score,
  );

  const data = {
    labels: categoryNames,
    datasets: [
      {
        label: 'Score',
        data: categoryScores,
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
