'use client';

import { useUpload } from '@/context/UploadContext';

const JobDetails = () => {
  const { jobUrl, setJobUrl, jobDescription, setJobDescription, error } =
    useUpload();

  const handleJobUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobUrl(e.target.value);
    if (e.target.value) {
      setJobDescription('');
    }
  };

  const handleJobDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setJobDescription(e.target.value);
    if (e.target.value) {
      setJobUrl('');
    }
  };

  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold text-primary">Job details</h2>

      {/* Job URL Input */}
      <div className="space-y-3">
        <label className="text-xl font-medium block">Job posting URL</label>
        <input
          type="url"
          placeholder="Paste job posting URL here"
          className="w-full px-6 py-3 bg-card-bg border-2 border-border rounded-xl text-base text-text-dark placeholder:text-text-light focus:outline-none focus:border-primary"
          value={jobUrl}
          onChange={handleJobUrlChange}
        />
      </div>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-white text-sm text-text-light">OR</span>
        </div>
      </div>

      {/* Job Description Textarea */}
      <div className="space-y-3">
        <label className="text-xl font-medium block">
          Or Paste Job Description
        </label>
        <textarea
          placeholder="Paste job description here"
          rows={6}
          className="w-full px-6 py-3 bg-card-bg border-2 border-border rounded-xl text-base text-text-dark placeholder:text-text-light focus:outline-none focus:border-primary resize-none"
          value={jobDescription}
          onChange={handleJobDescriptionChange}
        ></textarea>
      </div>

      {/* Display error if any */}
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
};

export default JobDetails;
