"use client";

import { CandidateAssessment } from "@/types/assessment";
import { assessmentData } from "@/data/assessment-data";
import ScoreChart from "../components/assessment/ScoreChart";
import OverallScore from "../components/assessment/OverallScore";
import VerdictSection from "../components/assessment/VerdictSection";
import ActionPlan from "../components/assessment/ActionPlan";
import FeedbackSection from "../components/assessment/FeedbackSection";
import ExecutiveSummary from "../components/assessment/ExecutiveSummary";
import CategoryBreakdown from "../components/assessment/CategoryBreakdown";
import Image from "next/image";

export default function Assessment() {
  const assessment: CandidateAssessment = assessmentData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 pb-16">
      <main className="container mx-auto px-4 ">
        <div className="container mx-auto flex justify-end items-center mt-8">
          <div className="space-x-4 mt-8">
            <button className="py-2 px-6 bg-accent text-black rounded-lg font-semibold hover:bg-accent transition-colors">
              Download PDF
            </button>
            <button className="py-2 px-8 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              <span className="flex gap-2 px-4">
                Share
                <Image
                  src="/icon/shareIcon.png"
                  alt="share icon"
                  width={15}
                  height={15}
                  className="object-contain"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Report Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mt-8">
            Resume Assessment Report
          </h1>
          <p className="text-xl text-gray-600 mt-2">for {assessment.name}</p>
        </div>

        {/* Executive Summary Section */}

        <div className="rounded-lg border-solid border border-2 border-[#276EF1] p-8 bg-white">
          <h2 className="text-3xl font-bold text-[#276EF1] text-center mb-8">
            Executive Summary
          </h2>
          <section></section>
          <div className="bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <VerdictSection
                title="Reputation"
                items={assessment.assessment.reputation}
              />
              <VerdictSection
                title="Technical Skills"
                items={assessment.assessment.technicalSkills}
              />
              <VerdictSection
                title="Leadership & Soft Skills"
                items={[
                  ...assessment.assessment.leadership,
                  ...assessment.assessment.softSkills,
                ]}
              />
              <VerdictSection
                title="Culture Fit"
                items={assessment.assessment.cultureFit}
              />
            </div>
          </div>

          <section className=" mb-16">
            <ExecutiveSummary
              name={assessment.name}
              score={assessment.assessment.overallScore}
              className="mb-8"
            />
          </section>

          <section className="mb-2">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
              Categories
            </h2>

            <div className="">
              <CategoryBreakdown
                categories={assessment.assessment.categoryBreakdown}
                className="mb-12"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="">
                <h3 className="text-xl font-bold mb-4">Overall Score</h3>
                <OverallScore score={assessment.assessment.overallScore} />
              </div>
              <div className="">
                <h3 className="text-xl font-bold mb-4">Skills Radar</h3>
                <ScoreChart
                  radarCategories={assessment.assessment.radarCategories}
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="px-4">
              <FeedbackSection feedback={assessment.assessment.feedback} />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
              Recommendations
            </h2>
            <div className="p-8">
              <ActionPlan
                shortTerm={assessment.assessment.shortTermActionPlan}
                longTerm={assessment.assessment.longTermActionPlan}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
