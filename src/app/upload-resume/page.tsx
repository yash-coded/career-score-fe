'use client';
import JobDetails from '../components/upload/JobDetails';
import UploadResume from '../components/upload/UploadResume';
import SubmitButton from '../components/upload/SubmitButton';

const UploadForm = () => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 py-12 md:py-16">
      <div className="max-w-7xl w-full space-y-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary">
          See how your resume fits the job
        </h1>

        <p className="text-xl md:text-2xl font-medium text-center text-teal">
          Upload your resume and job info for a smart match analysis.
        </p>
      </div>

      <div className="max-w-5xl w-full">
        <div className="w-full bg-white rounded-3xl shadow-lg p-10 md:p-16 lg:p-24 space-y-10 square-shawdow-color">
          <div className="space-y-6">
            <JobDetails />
          </div>

          <div className="space-y-6">
            <UploadResume />
          </div>

          <div className="flex justify-end mt-6">
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
