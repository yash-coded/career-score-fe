'use client';

import JobDetails from './JobDetails';
import UploadResume from './UploadResume';
import SubmitButton from './SubmitButton';
import { useUpload } from '@/context/UploadContext';

const UploadForm = () => {
  const { error } = useUpload();

  return (
    <div className="w-full bg-white rounded-3xl shadow-lg p-10 md:p-16 lg:p-24 space-y-10">
      <div className="space-y-6">
        <JobDetails />
      </div>

      <div className="space-y-6">
        <UploadResume />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="flex justify-end mt-6">
        <SubmitButton />
      </div>
    </div>
  );
};

export default UploadForm;
