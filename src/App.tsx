import React from 'react';
import './App.css';
import PlanCard from './components/PlanCard'; // Uncommented
import { HealthPlan } from './types/HealthPlan'; // Uncommented
// import Header from './components/Header'; // Commented out
// import CoverageFinderForm from './components/CoverageFinderForm'; // Commented out
// import InfoBox from './components/InfoBox'; // Commented out
// import FooterWave from './components/FooterWave'; // Commented out
// import { FaStar, FaRegStar, FaCheckCircle, FaInfoCircle } from 'react-icons/fa'; // Commented out


// --- Updated Sample Data ---
const samplePlan1: HealthPlan = {
  recommended: true,
  planName: 'Sendero Health Quality Care Bronze High Deductible / $50 PCP / $25 Generic Drugs / $100 Specialist', // Updated PCP
  planNameShort: 'Sendero Bronze HDHP',
  monthlyPremium: 142.44,
  originalPremium: 303.06, // Using was $303.06 from prev image
  deductible: 7500, // From image
  maxOutOfPocket: 9200, // From image
  tier: 'Bronze',
  networkType: 'HMO',
  rating: 4, // Using 4 from previous sample
  specialFeatures: ['Easy Pricing'], // From image
  primaryCareVisitCost: 50, // From image
  specialistVisitCost: 100, // From image
  genericDrugCost: 25, // From image '/fill' added in component
  brandDrugCost: 'Full price', // From image
  preferredBrandDrugCost: 'Full price', // From image
  specialtyDrugCost: 'Full price', // From image
  inpatientCost: 'Full price', // From image
  outpatientCost: 'Full price', // From image
  imagingCost: 'Full price', // From image
  labsCost: 'Full price', // From image
  emergencyRoomCost: 'Full price', // From image
  urgentCareCost: 75, // From image '/visit' added in component
  prenatalCareCost: 'Full price', // From image
  laborDeliveryCost: 'Full price', // From image
  postnatalCareCost: 'Full price', // From image
};

const samplePlan2: HealthPlan = {
  planName: 'Sendero Health Preferred Bronze / $25 PCP / $75 Specialist / $22 Generic Drugs', // From image
  planNameShort: 'Sendero Preferred Bronze', // Shortened name
  monthlyPremium: 160.59, // From image
  originalPremium: 374.51, // From image
  deductible: 8550, // From image
  maxOutOfPocket: 9200, // From image
  tier: 'Bronze',
  networkType: 'HMO',
  rating: 4, // Using 4 to match image stars
  // specialFeatures: [], // None shown in image for this plan
  primaryCareVisitCost: 25, // From image
  specialistVisitCost: 75, // From image
  genericDrugCost: 22, // From image '/fill' added in component
  brandDrugCost: 'Full price', // From image
  preferredBrandDrugCost: 'Full price', // From image
  specialtyDrugCost: 'Full price', // From image
  inpatientCost: 'Full price', // From image
  outpatientCost: 'Full price', // From image
  imagingCost: 'Full price', // From image
  labsCost: 'Full price', // From image
  emergencyRoomCost: 'Full price', // From image
  urgentCareCost: 'Full price', // From image (No price given)
  prenatalCareCost: 'Full price', // From image
  laborDeliveryCost: 'Full price', // From image
  postnatalCareCost: 'Full price', // From image
};
// --- End Sample Data ---

function App() {
  return (
    // --- Switched back to Plan Comparison Layout ---
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Optional: Add a title back if needed */}
      {/* <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Health Plan Comparison</h1> */}

      {/* Displaying two Plan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
        <PlanCard plan={samplePlan1} />
        <PlanCard plan={samplePlan2} />
      </div>

      {/* --- Form Layout Commented Out --- */}
      {/*
      <div className="min-h-screen bg-gray-50 flex flex-col relative">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4 md:p-8 lg:p-16 z-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-8">
             <div className="w-full lg:w-auto flex justify-center lg:justify-end">
               <CoverageFinderForm />
             </div>
             <div className="w-full lg:w-auto flex justify-center lg:justify-start mt-6 lg:mt-0">
               <InfoBox />
             </div>
          </div>
        </main>
        <FooterWave />
      </div>
      */}
    </div>
  );
}

export default App;
