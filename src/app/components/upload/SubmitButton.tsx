"use client";
import React from "react";

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className="py-5 px-6 bg-accent rounded-lg text-xl font-normal hover:brightness-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      Generate Analysis Report
    </button>
  );
};

export default SubmitButton;
