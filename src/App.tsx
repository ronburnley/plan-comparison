import React from 'react';
import './App.css';
import PlanCard from './components/PlanCard';
import KeyDifferences from './components/KeyDifferences'; // Import the new component
import ChatbotInterface from './components/ChatbotInterface'; // Import the chatbot component
import { HealthPlan } from './types/HealthPlan';
// import Header from './components/Header'; // Commented out
// import CoverageFinderForm from './components/CoverageFinderForm'; // Commented out
// import InfoBox from './components/InfoBox'; // Commented out
// import FooterWave from './components/FooterWave'; // Commented out
// import { FaStar, FaRegStar, FaCheckCircle, FaInfoCircle } from 'react-icons/fa'; // Commented out


// --- Updated Sample Data ---
const samplePlan1: HealthPlan = {
  recommended: true,
  planName: 'Sendero Health Quality Care Bronze High Deductible / $50 PCP / $25 Generic Drugs / $100 Specialist',
  planNameShort: 'Sendero Bronze HDHP',
  monthlyPremium: 142.44,
  deductible: 7500,
  maxOutOfPocket: 9200,
  tier: 'Bronze',
  networkType: 'HMO',
  rating: 4,
  specialFeatures: ['Easy Pricing'],
  primaryCareVisitCost: 50,
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
  planName: 'Sendero Health Preferred Bronze / $25 PCP / $75 Specialist / $22 Generic Drugs',
  planNameShort: 'Sendero Preferred Bronze',
  monthlyPremium: 160.59,
  deductible: 8550,
  maxOutOfPocket: 9200,
  tier: 'Bronze',
  networkType: 'HMO',
  rating: 4,
  primaryCareVisitCost: 25,
  specialistVisitCost: 75,
  genericDrugCost: 22,
  brandDrugCost: 'Full price',
  preferredBrandDrugCost: 'Full price',
  specialtyDrugCost: 'Full price',
  inpatientCost: 'Full price',
  outpatientCost: 'Full price',
  imagingCost: 'Full price',
  labsCost: 'Full price',
  emergencyRoomCost: 'Full price',
  urgentCareCost: 'Full price',
  prenatalCareCost: 'Full price',
  laborDeliveryCost: 'Full price',
  postnatalCareCost: 'Full price',
};
// --- End Sample Data ---

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
       <div className="max-w-7xl mx-auto"> {/* Added container for centering */}
         {/* Render KeyDifferences above the cards */}
         <KeyDifferences plan1={samplePlan1} plan2={samplePlan2} />

         {/* Render Chatbot Interface below Key Differences */}
         <ChatbotInterface />

         {/* Displaying two Plan Cards */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8"> 
           <PlanCard plan={samplePlan1} />
           <PlanCard plan={samplePlan2} />
         </div>
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
