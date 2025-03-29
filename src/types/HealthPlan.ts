export interface HealthPlan {
  recommended?: boolean;
  planName: string;
  planNameShort?: string;
  monthlyPremium: number;
  originalPremium?: number;
  deductible: number;
  maxOutOfPocket: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | string; // Allow other strings if needed
  networkType: 'HMO' | 'PPO' | 'EPO' | 'POS' | string;
  rating: number; // e.g., 4 for 4 stars
  specialFeatures?: string[];
  primaryCareVisitCost: string | number; // e.g., 'Full price', 60
  specialistVisitCost: string | number;
  genericDrugCost: string | number;
  brandDrugCost: string | number;
  preferredBrandDrugCost: string | number;
  specialtyDrugCost: string | number;
  inpatientCost: string | number;
  outpatientCost: string | number;
  imagingCost: string | number;
  labsCost: string | number;
  emergencyRoomCost: string | number;
  urgentCareCost: string | number;
  prenatalCareCost: string | number;
  laborDeliveryCost: string | number;
  postnatalCareCost: string | number;
  // Add fields for pre/post-deductible costs if they differ significantly
} 