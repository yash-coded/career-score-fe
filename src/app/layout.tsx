import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "CareerScore - Resume Analysis",
  description: "See how your resume fits the job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <main className="flex min-h-screen flex-col bg-white">
          <Navbar />

          {children}
          {/* 
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
              <UploadForm />
            </div>
          </div> */}

          <Footer />
        </main>
      </body>
    </html>
  );
}
