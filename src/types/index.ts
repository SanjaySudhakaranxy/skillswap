// SkillSwap Type Definitions
// All TypeScript interfaces and types used in the app

// API Response wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// User types
export interface User {
  id: number;
  displayName: string;
  email: string;
  mobileNumber: string;
  profilePicture?: string;
  bio?: string;
  teachingPersonality?: string; // Mentor, Coach, Facilitator, Guide
  learningArchetype?: string; // Curious, Pragmatist, Theorist, Reflector
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

// Skill types
export interface Skill {
  id: number;
  name: string;
  category: string;
  description?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export interface UserSkill {
  id: number;
  userId: number;
  skillId: number;
  skillName: string;
  skillCategory: string;
  proficiencyLevel: 'beginner' | 'intermediate' | 'advanced';
  yearsOfExperience: number;
  hoursTaught?: number;
  hoursLearned?: number;
  createdAt: string;
}

// Session types
export interface Session {
  id: number;
  teacherId: number;
  learnerId: number;
  teachSkillId: number;
  learnSkillId: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  scheduledDate: string;
  duration: number; // in minutes
  skillCoinsCost: number;
  skillCoinsEarned: number;
  notes?: string;
  createdAt: string;
  completedAt?: string;
}

// SkillCoin/Wallet types
export interface Wallet {
  id: number;
  userId: number;
  balance: number;
  totalEarned: number;
  totalSpent: number;
  escrowBalance: number;
  lastUpdated: string;
}

export interface Transaction {
  id: number;
  walletId: number;
  type: 'earn' | 'spend' | 'refund';
  amount: number;
  reason: string;
  relatedSessionId?: number;
  createdAt: string;
}

// Assessment types
export interface Assessment {
  id: number;
  sessionId: number;
  learnerScore: number;
  teacherRating: number;
  learningOutcomeAchieved: boolean;
  feedback?: string;
  createdAt: string;
}

// Trust/Reliability types
export interface ReliabilityScore {
  userId: number;
  score: number; // 0-100
  totalSessions: number;
  completedSessions: number;
  averageLearningOutcome: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
}

// Matching types
export interface MatchProfile {
  userId: number;
  teachingPersonality: string;
  learningArchetype: string;
  teachSkills: UserSkill[];
  learnSkills: UserSkill[];
  availability: string[];
  preferredSessionDuration: number;
}

export interface MatchResult {
  matchedUserId: number;
  compatibilityScore: number;
  commonInterests: string[];
  potentialExchanges: Array<{
    teachSkill: string;
    learnSkill: string;
    matchPercentage: number;
  }>;
}

// Notification types
export interface Notification {
  id: number;
  userId: number;
  type: 'session_request' | 'session_confirmed' | 'session_completed' | 'message' | 'skill_tip';
  title: string;
  message: string;
  relatedId?: number;
  isRead: boolean;
  createdAt: string;
}

// Auth state types
export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

// Navigation types
export type RootStackParamList = {
  Splash: undefined;
  OnboardingProblem: undefined;
  OnboardingSolution: undefined;
  OnboardingTrust: undefined;
  Register: undefined;
  Login: undefined;
  AppTabs: undefined;
};
