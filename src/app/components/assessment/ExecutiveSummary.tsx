'use client';

interface ExecutiveSummaryProps {
  name: string;
  score: number;
  className?: string;
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
  name,
  score,
  className = '',
}) => {
  const getStrengthLevel = (score: number) => {
    if (score >= 85) return 'EXCEPTIONAL';
    if (score >= 75) return 'STRONG';
    if (score >= 60) return 'GOOD';
    if (score >= 50) return 'MODERATE';
    return 'DEVELOPING';
  };

  const strengthLevel = getStrengthLevel(score);

  return (
    <div className={`bg-gray-100 p-6 rounded-lg shadow ${className}`}>
      <h2 className="text-2xl font-bold text-center mb-6">
        We believe you are a{' '}
        <span className="text-[#276EF1]">{strengthLevel}</span> candidate for
        the Software Engineer position.
      </h2>
      <p className="text-lg text-center">
        Based on our analysis of your profile,{' '}
        <span className="font-semibold">{name}</span>, you
        {score >= 75 ? (
          <span>
            {' '}
            belong to the <span className="font-bold">top 25 percent</span> of
            candidates in our database.
          </span>
        ) : score >= 50 ? (
          <span>
            {' '}
            belong to the <span className="font-bold">top 50 percent</span> of
            candidates in our database.
          </span>
        ) : (
          <span>
            {' '}
            show potential, but would benefit from addressing the
            recommendations in this report.
          </span>
        )}
      </p>
    </div>
  );
};

export default ExecutiveSummary;
