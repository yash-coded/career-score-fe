'use client';

import { CandidateAssessment } from '@/types/assessment';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, ReactNode } from 'react';

interface UploadContextProps {
  jobUrl: string;
  setJobUrl: (url: string) => void;
  jobDescription: string;
  setJobDescription: (description: string) => void;
  resumeFile: File | null;
  setResumeFile: (file: File | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  assessment: CandidateAssessment | null;
  setAssessment: (assessment: CandidateAssessment | null) => void;
  submitForm: () => Promise<void>;
}

const UploadContext = createContext<UploadContextProps | undefined>(undefined);

export const UploadProvider = ({ children }: { children: ReactNode }) => {
  const [jobUrl, setJobUrl] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [assessment, setAssessment] = useState<CandidateAssessment | null>(
    null,
  );

  const router = useRouter();

  const submitForm = async () => {
    if (!resumeFile) {
      setError('Please upload a resume file.');
      return;
    }

    if (!jobUrl && !jobDescription) {
      setError('Please provide either a job URL or a job description.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', resumeFile);

      // Add job info to formData
      if (jobUrl) {
        formData.append('jobUrl', jobUrl);
      }

      if (jobDescription) {
        formData.append('jobDescription', jobDescription);
      }

      const response = await fetch('http://localhost:3000/resume/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const result: CandidateAssessment = await response.json();
      console.log('🚀 ~ submitForm ~ result:', result);
      setAssessment(result);

      // Redirect to assessment page will be handled by the components

      router.push('/assessment');
    } catch (err) {
      console.log('🚀 ~ submitForm ~ err:', err);
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred',
      );
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    jobUrl,
    setJobUrl,
    jobDescription,
    setJobDescription,
    resumeFile,
    setResumeFile,
    isLoading,
    setIsLoading,
    error,
    setError,
    assessment,
    setAssessment,
    submitForm,
  };

  return (
    <UploadContext.Provider value={value}>{children}</UploadContext.Provider>
  );
};

export const useUpload = () => {
  const context = useContext(UploadContext);
  if (context === undefined) {
    throw new Error('useUpload must be used within an UploadProvider');
  }
  return context;
};
