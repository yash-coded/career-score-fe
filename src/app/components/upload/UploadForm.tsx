import { useState } from 'react';
import JobDetails from './JobDetails';
import UploadResume from './UploadResume';
import SubmitButton from './SubmitButton';

const UploadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // In a real app, we would submit the form data to an API

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Analysis report would be generated here. This is just a UI demo.');
    }, 2000);
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-lg p-10 md:p-16 lg:p-24 space-y-10">
      <div className="space-y-6">
        <JobDetails />
      </div>

      <div className="space-y-6">
        <UploadResume />
      </div>

      <div className="flex justify-end mt-6">
        <SubmitButton onClick={handleSubmit} disabled={isSubmitting} />
      </div>
    </div>
  );
};

export default UploadForm;
