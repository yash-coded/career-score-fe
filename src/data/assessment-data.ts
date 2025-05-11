import { CandidateAssessment } from '@/types/assessment';

export const assessmentData: CandidateAssessment = {
  name: 'Justin Cervantes',
  assessment: {
    radarCategories: {
      school: {
        score: 12,
      },
      workHistory: {
        score: 12,
      },
      domainRelevance: {
        score: 10,
      },
      softSkills: {
        score: 8,
      },
      technicalSkills: {
        score: 10,
      },
    },
    categoryBreakdown: [
      {
        category: 'Employee work history prestige',
        score: 12,
      },
      {
        category: 'Education history prestige',
        score: 12,
      },
      {
        category: 'Domain relevance',
        score: 10,
      },
      {
        category:
          'Experience with software development in programming languages',
        score: 10,
      },
      {
        category: 'Experience with data structures or algorithms',
        score: 8,
      },
      {
        category: 'Experience with full stack development',
        score: 10,
      },
      {
        category: 'Experience with performance and systems data analysis',
        score: 3,
      },
      {
        category:
          'Experience in code and system health, diagnosis and resolution',
        score: 4,
      },
      {
        category: 'Experience developing accessible technologies',
        score: 2,
      },
      {
        category: 'Participation in design reviews and code reviews',
        score: 4,
      },
    ],
    reputation: [
      {
        item: 'LodgeLink, Lucid HR, Simplexiar Solutions',
        verdict: 'Medium',
      },
      {
        item: 'BCIT, UBC, Haskayne School of Business (MBA in progress)',
        verdict: 'Medium',
      },
    ],
    leadership: [
      {
        item: 'Led a pod of 8, team lead at Simplexiar, President of BCIT Student Association, Governor at BCIT',
        verdict: 'Strong',
      },
    ],
    softSkills: [
      {
        item: 'Mentorship, onboarding, technical sales, curriculum advisory, community lead',
        verdict: 'Strong',
      },
    ],
    technicalSkills: [
      {
        item: 'Full stack development, TDD, CI/CD, React, Node, TypeScript, JavaScript, SQL, AWS, GraphQL, performance optimization',
        verdict: 'Strong',
      },
    ],
    cultureFit: [
      {
        item: 'Demonstrated versatility, leadership, and initiative across multiple roles and domains',
        verdict: 'Strong',
      },
    ],
    actionItems: 'Improve',
    overallScore: 75,
    feedback:
      "Justin, your resume demonstrates strong leadership, technical breadth, and a clear impact in your roles, especially in full stack development and team management. You have solid experience with modern web technologies and have contributed to performance improvements and process enhancements. However, your work history and education, while respectable, do not carry the prestige of top-tier tech companies or universities, which may be a factor for highly competitive roles at Google. Additionally, your experience with performance/system data analysis, accessibility, and code/system health could be highlighted more explicitly. Consider adding more quantifiable achievements in these areas, and if you have experience with accessibility or large-scale system design, make it more prominent. Your MBA in progress is a plus for leadership, but technical depth and alignment with Google's preferred qualifications could be strengthened.",
    longTermActionPlan: [
      {
        actionItem:
          'Pursue roles or projects at more widely recognized tech companies or contribute to open-source projects with high visibility.',
        reason:
          'This will boost the prestige of your work history and make your profile more competitive for top-tier employers.',
      },
      {
        actionItem:
          'Complete your MBA and consider technical certifications or advanced degrees in computer science.',
        reason:
          'This will enhance your educational prestige and technical credibility.',
      },
    ],
    shortTermActionPlan: [
      {
        actionItem:
          'Highlight any experience with accessibility, large-scale system design, or performance analysis in your resume.',
        reason:
          'These are specifically called out in the job description and rubric, and will strengthen your alignment with the role.',
      },
      {
        actionItem:
          'Add more quantifiable metrics and outcomes related to code/system health, debugging, and test engineering.',
        reason:
          'Demonstrating impact in these areas will address gaps in the preferred qualifications.',
      },
    ],
  },
};
