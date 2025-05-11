"use client";

import { ActionItem } from "@/types/assessment";

interface ActionPlanProps {
  shortTerm: ActionItem[];
  longTerm: ActionItem[];
  className?: string;
}

const ActionPlan: React.FC<ActionPlanProps> = ({
  shortTerm,
  longTerm,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      {/* Short-term actions */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Short-term Actions</h3>
        <div className="space-y-6">
          {shortTerm.map((action, index) => (
            <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-[#FFB400] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4 shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    {action.actionItem}
                  </h4>
                  <p className="text-gray-600">{action.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Long-term actions */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Long-term Actions</h3>
        <div className="space-y-6">
          {longTerm.map((action, index) => (
            <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-[#276EF1] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4 shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    {action.actionItem}
                  </h4>
                  <p className="text-gray-600">{action.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionPlan;
