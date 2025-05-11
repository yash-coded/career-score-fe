'use client';

import { CategoryScore } from '@/types/assessment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface CategoryBreakdownProps {
  categories: CategoryScore[];
  className?: string;
}

const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({
  categories,
  className = '',
}) => {
  // Sort categories by score in descending order
  const sortedCategories = [...categories].sort((a, b) => b.score - a.score);

  // Shorten long category names for better display
  const shortenCategory = (category: string) => {
    if (category.length > 40) {
      return category.substring(0, 37) + '...';
    }
    return category;
  };

  const data = {
    labels: sortedCategories.map((cat) => shortenCategory(cat.category)),
    datasets: [
      {
        label: 'Score',
        data: sortedCategories.map((cat) => cat.score),
        backgroundColor: sortedCategories.map((cat) => {
          // Color based on score value
          if (cat.score >= 10) return 'rgba(39, 110, 241, 0.8)'; // Primary
          if (cat.score >= 5) return 'rgba(255, 180, 0, 0.8)'; // Warning
          return 'rgba(255, 77, 79, 0.8)'; // Danger
        }),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    scales: {
      x: {
        beginAtZero: true,
        max: 15,
        ticks: {
          stepSize: 3,
        },
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          // @ts-expect-error - Chart.js tooltip typings are complex
          title: function (tooltipItems) {
            if (tooltipItems && tooltipItems.length > 0) {
              const index = tooltipItems[0].dataIndex;
              return sortedCategories[index].category;
            }
            return '';
          },
        },
      },
    },
  };

  return (
    <div className={`${className}`}>
      <h3 className="text-2xl font-bold mb-4">Category Scores</h3>
      <div className="h-[500px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default CategoryBreakdown;
