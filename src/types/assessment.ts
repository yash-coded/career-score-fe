// src/types/assessment.ts

export interface CategoryScore {
  category: string;
  score: number;
}

export interface VerdictItem {
  item: string;
  verdict: string;
}

export interface ActionItem {
  actionItem: string;
  reason: string;
}

export interface Assessment {
  categoryBreakdown: CategoryScore[];
  reputation: VerdictItem[];
  leadership: VerdictItem[];
  softSkills: VerdictItem[];
  technicalSkills: VerdictItem[];
  cultureFit: VerdictItem[];
  actionItems: string;
  overallScore: number;
  feedback: string;
  longTermActionPlan: ActionItem[];
  shortTermActionPlan: ActionItem[];
}

export interface CandidateAssessment {
  name: string;
  assessment: Assessment;
}
