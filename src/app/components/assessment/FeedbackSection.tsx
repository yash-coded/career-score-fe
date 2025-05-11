'use client';

interface FeedbackSectionProps {
  feedback: string;
  className?: string;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  feedback,
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-2xl font-bold mb-4">Detailed Feedback</h3>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <p className="text-lg leading-relaxed whitespace-pre-line">
          {feedback}
        </p>
      </div>
    </div>
  );
};

export default FeedbackSection;
