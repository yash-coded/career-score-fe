'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface OverallScoreProps {
  score: number;
  className?: string;
}

const OverallScore: React.FC<OverallScoreProps> = ({
  score,
  className = '',
}) => {
  const data = {
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: [
          score >= 75 ? '#276EF1' : score >= 50 ? '#FFB400' : '#ff4d4f', // Primary, Warning or Danger
          '#f5f5f5',
        ],
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  // Calculate the percentile text based on score
  const getPercentileText = (score: number) => {
    if (score >= 90) return 'top 10%';
    if (score >= 75) return 'top 25%';
    if (score >= 50) return 'top 50%';
    return 'bottom 50%';
  };

  const percentileText = getPercentileText(score);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative h-[200px] w-[200px]">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{score}</span>
          <span className="text-lg">/ 100</span>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-medium">
          You are in the <span className="font-bold">{percentileText}</span> of
          candidates
        </p>
      </div>
    </div>
  );
};

export default OverallScore;
