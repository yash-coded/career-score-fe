'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useUpload } from '@/context/UploadContext';

const UploadResume = () => {
  const { resumeFile, setResumeFile } = useUpload();
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const uploadedFile = e.dataTransfer.files[0];
      validateAndSetFile(uploadedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      validateAndSetFile(uploadedFile);
    }
  };

  const validateAndSetFile = (uploadedFile: File) => {
    // Check file type (PDF or DOC/DOCX)
    const fileType = uploadedFile.type;
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    // Check file size (max 5MB)
    const fileSize = uploadedFile.size / 1024 / 1024; // Convert to MB

    if (!validTypes.includes(fileType)) {
      alert('Please upload a PDF or Word document.');
      return;
    }

    if (fileSize > 5) {
      alert('File size should not exceed 5MB.');
      return;
    }

    setResumeFile(uploadedFile);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full h-[400px] bg-card-bg border-2 border-border rounded-xl flex items-center justify-center">
      <div
        className={`relative flex flex-col items-center justify-center w-full h-full p-6 ${
          dragActive ? 'bg-blue-50' : ''
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          multiple={false}
        />

        <div className="mb-4 relative w-16 h-16 border border-border rounded-xl bg-white flex items-center justify-center">
          <div className="relative w-6 h-6">
            <Image
              src="/images/uploadIcon.png"
              alt="Upload icon"
              width={24}
              height={24}
              className="absolute"
            />
          </div>
        </div>

        {resumeFile ? (
          <div className="text-center">
            <p className="text-xl font-bold text-center mb-2">
              {resumeFile.name}
            </p>
            <button
              className="text-primary underline"
              onClick={() => setResumeFile(null)}
            >
              Remove
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-center mb-2">
              Drop your resume here or browse*
            </h3>
            <p className="text-text-light text-base text-center">
              Supported formats: PDF or Doc (Max 5MB)
            </p>
            <button
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg"
              onClick={handleButtonClick}
            >
              Browse Files
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadResume;
