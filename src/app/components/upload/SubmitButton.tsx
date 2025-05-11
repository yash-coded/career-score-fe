'use client';
import React from 'react';
import { useUpload } from '@/context/UploadContext';

const SubmitButton: React.FC = () => {
  const { submitForm, isLoading, resumeFile } = useUpload();

  const isDisabled = isLoading || !resumeFile;

  return (
    <button
      className="py-5 px-6 bg-accent rounded-lg text-xl font-normal hover:brightness-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      onClick={submitForm}
      disabled={isDisabled}
    >
      {isLoading ? 'Processing...' : 'Generate Analysis Report'}
    </button>
  );
};

export default SubmitButton;
