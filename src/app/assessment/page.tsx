'use client';

import { CandidateAssessment } from '@/types/assessment';
import { assessmentData } from '@/data/assessment-data';
import ScoreChart from '../components/assessment/ScoreChart';
import OverallScore from '../components/assessment/OverallScore';
import VerdictSection from '../components/assessment/VerdictSection';
import ActionPlan from '../components/assessment/ActionPlan';
import FeedbackSection from '../components/assessment/FeedbackSection';
import ExecutiveSummary from '../components/assessment/ExecutiveSummary';
import CategoryBreakdown from '../components/assessment/CategoryBreakdown';

export default function Assessment() {
  const assessment: CandidateAssessment = assessmentData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 pb-16">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">CareerScore</h1>
          <div className="space-x-4">
            <button className="py-2 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Download PDF
            </button>
            <button className="py-2 px-6 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Share
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* Report Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Resume Assessment Report
          </h1>
          <p className="text-xl text-gray-600 mt-2">for {assessment.name}</p>
        </div>

        {/* Executive Summary Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
            Executive Summary
          </h2>
          <ExecutiveSummary
            name={assessment.name}
            score={assessment.assessment.overallScore}
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Overall Score</h3>
              <OverallScore score={assessment.assessment.overallScore} />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Skills Radar</h3>
              <ScoreChart
                categories={assessment.assessment.categoryBreakdown}
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
            Categories
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <CategoryBreakdown
              categories={assessment.assessment.categoryBreakdown}
              className="mb-12"
            />

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
        </section>

        {/* Feedback Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
            Detailed Feedback
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <FeedbackSection feedback={assessment.assessment.feedback} />
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
            Recommendations
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ActionPlan
              shortTerm={assessment.assessment.shortTermActionPlan}
              longTerm={assessment.assessment.longTermActionPlan}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
