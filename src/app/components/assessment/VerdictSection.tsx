'use client';

import { VerdictItem } from '@/types/assessment';

interface VerdictSectionProps {
  title: string;
  items: VerdictItem[];
  className?: string;
}

const VerdictSection: React.FC<VerdictSectionProps> = ({
  title,
  items,
  className = '',
}) => {
  const getVerdictColor = (verdict: string) => {
    switch (verdict.toLowerCase()) {
      case 'strong':
        return 'text-[#276EF1]';
      case 'medium':
        return 'text-[#FFB400]';
      case 'light':
        return 'text-gray-500';
      case 'extensive':
        return 'text-[#2EC4B6]';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className={`mb-6 ${className}`}>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="border-l-4 border-[#276EF1] pl-4 py-1">
            <div className="text-lg">
              {item.item}
              <span
                className={`ml-2 font-semibold ${getVerdictColor(
                  item.verdict,
                )}`}
              >
                {item.verdict.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerdictSection;
