import React from 'react';
import './App.css';
import PlanCard from './components/PlanCard';
import { HealthPlan } from './types/HealthPlan';

// --- Sample Data ---
const samplePlan1: HealthPlan = {
  recommended: true,
  planName: 'Sendero Health Quality Care Bronze High Deductible / $60 PCP / $25 Generic Drugs / $100 Specialist',
  planNameShort: 'Sendero Bronze HDHP',
  monthlyPremium: 142.44,
  originalPremium: 303.06,
  deductible: 7000,
  maxOutOfPocket: 8700,
  tier: 'Bronze',
  networkType: 'HMO',
  rating: 4,
  specialFeatures: ['Easy Pricing'],
  primaryCareVisitCost: 60,
  specialistVisitCost: 100,
  genericDrugCost: 25,
  brandDrugCost: 'Full price',
  preferredBrandDrugCost: 'Full price',
  specialtyDrugCost: 'Full price',
  inpatientCost: 'Full price',
  outpatientCost: 'Full price',
  imagingCost: 'Full price',
  labsCost: 'Full price',
  emergencyRoomCost: 'Full price',
  urgentCareCost: 75,
  prenatalCareCost: 'Full price',
  laborDeliveryCost: 'Full price',
  postnatalCareCost: 'Full price',
};

const samplePlan2: HealthPlan = {
  planName: 'BlueCross BlueShield Silver Value Plus $0 Deductible',
  planNameShort: 'BCBS Silver Value+',
  monthlyPremium: 255.10,
  deductible: 0,
  maxOutOfPocket: 7500,
  tier: 'Silver',
  networkType: 'PPO',
  rating: 3,
  primaryCareVisitCost: 30,
  specialistVisitCost: 60,
  genericDrugCost: 15,
  brandDrugCost: 50,
  preferredBrandDrugCost: 75,
  specialtyDrugCost: '50% Coinsurance',
  inpatientCost: '20% Coinsurance',
  outpatientCost: '20% Coinsurance',
  imagingCost: 150,
  labsCost: 30,
  emergencyRoomCost: 500,
  urgentCareCost: 50,
  prenatalCareCost: 30,
  laborDeliveryCost: '20% Coinsurance',
  postnatalCareCost: 30,
};
// --- End Sample Data ---

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Health Plan Comparison</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
        <PlanCard plan={samplePlan1} />
        <PlanCard plan={samplePlan2} />
        {/* Add more <PlanCard plan={...} /> components here as needed */}
      </div>
    </div>
  );
}

export default App;
