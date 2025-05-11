// src/types/assessment.ts

export interface CategoryScore {
  category: string;
  score: number;
}

export interface VerdictItem {
  item: string;
  verdict: 'Strong' | 'Medium' | 'Weak';
}

export interface ActionItem {
  actionItem: string;
  reason: string;
}

export interface RadarCategory {
  score: number;
}

export interface RadarCategories {
  school: RadarCategory;
  workHistory: RadarCategory;
  domainRelevance: RadarCategory;
  softSkills: RadarCategory;
  technicalSkills: RadarCategory;
}

export interface Assessment {
  radarCategories: RadarCategories;
  categoryBreakdown: CategoryScore[];
  reputation: VerdictItem[];
  leadership: VerdictItem[];
  softSkills: VerdictItem[];
  technicalSkills: VerdictItem[];
  cultureFit: VerdictItem[];
  actionItems: 'Improve' | 'Keep' | 'Highlight';
  overallScore: number;
  feedback: string;
  longTermActionPlan: ActionItem[];
  shortTermActionPlan: ActionItem[];
}

export interface CandidateAssessment {
  name: string;
  assessment: Assessment;
}
