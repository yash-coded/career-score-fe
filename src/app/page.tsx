'use client';

import Link from 'next/link';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import UploadForm from './components/upload/UploadForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gradient-bg">
      <Navbar />

      <div className="flex-1 flex flex-col items-center px-6 py-12 md:py-16">
        <div className="max-w-7xl w-full space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary">
            See how your resume fits the job
          </h1>

          <p className="text-xl md:text-2xl font-medium text-center text-teal">
            Upload your resume and job info for a smart match analysis.
          </p>

          <div className="flex justify-center">
            <Link
              href="/assessment"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Sample Assessment
            </Link>
          </div>
        </div>

        <div className="max-w-5xl w-full">
          <UploadForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}
