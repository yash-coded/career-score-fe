"use client";

import Link from "next/link";
import Image from "next/image";
// Navbar and Footer are expected to be in a layout component, so not imported here directly for the page content.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 text-center gradient-bg-figma">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-text-figma leading-tight mb-6">
            Drop your résumé,
            <br />
            reveal your CareerScore
          </h1>
          <p className="text-xl md:text-2xl text-secondary-text-figma mb-10">
            Instantly see how you stack up against real hires. Follow clear,
            actionable fixes.
          </p>
          <Link
            href="/upload-resume" // Assuming this is the correct link for uploading
            className="bg-accent bg-accent-figma text-primary-text-figma text-xl md:text-2xl font-medium py-4 px-10 rounded-lg inline-block shadow-md hover:bg-accent-figma/90 transition-colors"
          >
            Upload Resume
          </Link>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: "/images/figma/ranking-icon.svg",
                title: "Compare Your Resume",
                bgShape: "/images/figma/feature-bg-shape-ranking.svg",
              },
              {
                icon: "/images/figma/people-icon.svg",
                title: "Check Your Culture Fit",
                bgShape: "/images/figma/feature-bg-shape-people.svg",
              },
              {
                icon: "/images/figma/note-icon.svg",
                title: "Get Your Best Resume",
                bgShape: "/images/figma/feature-bg-shape-note.svg",
              },
              {
                icon: "/images/figma/messages-icon.svg",
                title: "Get Personalized Mentor",
                bgShape: "/images/figma/feature-bg-shape-messages.svg",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-figma flex flex-col items-center text-center"
              >
                <div className="relative w-24 h-20 mb-6 flex items-center justify-center">
                  <Image
                    src={feature.bgShape}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="absolute inset-0 z-0"
                  />
                  <Image
                    src={feature.icon}
                    alt="" // Alt text provided by title below
                    width={40} // Adjust size as needed, Figma icons were ~24-30px within a larger frame
                    height={40} // Adjust size as needed
                    className="relative z-10" // Ensure icon is on top
                  />
                </div>
                <h3 className="text-xl font-bold text-primary-text-figma mt-2">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Sections */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-20">
          {/* Feature 1: Resume Comparing */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text-figma mb-6">
                Resume Comparing
              </h2>
              <p className="text-lg md:text-xl text-primary-text-figma leading-relaxed">
                Upload your resume and see how it compares to successful resumes
                in your industry. We&apos;ll show you what works, what&apos;s
                missing, and how you can improve to match industry standards.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-figma w-full max-w-md">
                <Image
                  src="/images/figma/split-testing-illustration.svg"
                  alt="Resume Comparing Illustration"
                  width={500}
                  height={350}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Check Your Culture Fit */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-figma w-full max-w-md">
                <Image
                  src="/images/figma/positive-attitude-illustration.svg"
                  alt="Culture Fit Illustration"
                  width={500}
                  height={350}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text-figma mb-6">
                Check Your Culture Fit
              </h2>
              <p className="text-lg md:text-xl text-primary-text-figma leading-relaxed">
                Find out how well you align with your target company&apos;s work
                style and values. We help you understand if the company&apos;s
                environment is right for you before you apply.
              </p>
            </div>
          </div>

          {/* Feature 3: Get Your Best Resume */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text-figma mb-6">
                Get Your Best Resume
              </h2>
              <p className="text-lg md:text-xl text-primary-text-figma leading-relaxed">
                Based on your experience, skills, and target roles, we help you
                craft a professional, tailored resume. You provide the details,
                and we turn it into the strongest version designed to get
                noticed.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-figma w-full max-w-md">
                <Image
                  src="/images/figma/file-bundle-illustration.svg"
                  alt="Best Resume Illustration"
                  width={500}
                  height={350}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Feature 4: Get Personalized Mentor */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-figma w-full max-w-md">
                <Image
                  src="/images/figma/online-learning-illustration.svg"
                  alt="Personalized Mentor Illustration"
                  width={500}
                  height={350}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text-figma mb-6">
                Get Personalized Mentor
              </h2>
              <p className="text-lg md:text-xl text-primary-text-figma leading-relaxed">
                Receive personalized advice from career experts. Whether
                it&apos;s improving your resume, preparing for interviews, or
                navigating your job search, we&apos;re here to support you with
                practical, actionable feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 w-full bg-primary-figma text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Find out more about our services
          </h2>
          <Link
            href="/upload-resume" // Assuming this is the correct link
            className="bg-white text-primary-figma text-xl font-bold py-4 px-10 rounded-lg inline-block shadow-md hover:bg-gray-100 transition-colors"
          >
            Start Now
          </Link>
        </div>
      </section>
    </main>
  );
}

// TODO: Add these color definitions to tailwind.config.js or a global CSS file
// primary-figma: '#276EF1' (already seems to exist as --primary)
// accent-figma: '#FFB400' (already seems to exist as --accent)
// primary-text-figma: '#000000' (can use text-black or define as text-primary-text-figma)
// secondary-text-figma: '#686F76' (define as text-secondary-text-figma)
// feature-bg-1-figma: 'rgba(255, 180, 0, 0.4)'
// feature-bg-2-figma: 'rgba(46, 196, 182, 0.4)'
// feature-bg-3-figma: 'rgba(226, 78, 66, 0.4)'
// feature-bg-4-figma: 'rgba(39, 110, 241, 0.4)'
// gradient-bg-figma: The Figma design uses a complex gradient background with multiple radial gradients.
// For simplicity, a linear gradient approximating the feel or a solid color might be better initially.
// The main background of the Homepage frame (41:1334) is #FFFFFF.
// The colored decorative rectangles (41:1335, 41:1336, 41:1337, 41:1338) are large blurred gradients.
// Let's use a simple background for now and it can be refined.
// For shadow-figma: boxShadow: '0px 4px 20px 0px rgba(80, 80, 80, 0.1)' (effect_FF7OCY)
