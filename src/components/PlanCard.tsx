import React, { useState } from 'react';
import { type HealthPlan } from '../types/HealthPlan';
import { FaStar, FaRegStar, FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Add Chevrons, remove FaInfoCircle if not used

interface PlanCardProps {
  plan: HealthPlan;
}

// Updated formatting function
const formatCost = (value: number | string, perUnit = ''): string => {
  if (typeof value === 'number') {
    return `$${value}${perUnit}`;
  }
  return value; // Return strings like 'Full price', '20% Coinsurance' directly
};

// Component for each collapsible section
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3 px-1 text-left text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        <span className="font-semibold text-base">{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="pb-4 px-1">
          {children}
        </div>
      )}
    </div>
  );
};

// Component for displaying a single data row within a section
interface DataRowProps {
  label: string;
  value: React.ReactNode;
}

const DataRow: React.FC<DataRowProps> = ({ label, value }) => (
  <div className="flex justify-between items-center py-1.5 text-sm">
    <span className="text-gray-600">{label}</span>
    <span className="text-gray-900 font-medium text-right">{value}</span>
  </div>
);

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const [showPostDeductible, setShowPostDeductible] = useState(false); // Keep the toggle state

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      // Using the icons that should now compile correctly after React downgrade
      stars.push(i <= rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-300" />);
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col">
        {/* --- Top Section (Logo, Name, Recommended) --- */}
        <div className='p-4'>
            {/*
            {plan.recommended && (
                <div className="relative mb-2">
                    <div className="absolute -top-4 -left-4 bg-yellow-300 text-yellow-900 text-xs font-bold px-3 py-1 rounded-tl-lg rounded-br-lg"
                         style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'}}>
                        Recommended
                    </div>
                </div>
            )}
            */}
             {/* Placeholder for Plan Logo */}
             <div className="h-8 w-20 bg-gray-200 mb-2 mt-2 flex items-center justify-center text-gray-500 text-xs rounded">Logo</div>

            <h2 className="text-sm font-semibold mb-2 leading-tight" title={plan.planName}>{plan.planNameShort || plan.planName}</h2>
        </div>

        {/* --- Costs Shown Toggle --- */}
        <div className="px-4 pb-4 border-b">
            <div className="text-xs text-gray-500 mb-1">Costs Shown</div>
            <div className="flex border border-gray-300 rounded overflow-hidden">
                 <button
                    onClick={() => setShowPostDeductible(false)}
                    className={`flex-1 py-1.5 px-3 text-sm focus:outline-none ${!showPostDeductible ? 'bg-gray-100 font-semibold' : 'bg-white text-gray-600'}`}
                 >
                     Pre-Deductible
                 </button>
                 <button
                     onClick={() => setShowPostDeductible(true)}
                     className={`flex-1 py-1.5 px-3 text-sm focus:outline-none ${showPostDeductible ? 'bg-gray-100 font-semibold' : 'bg-white text-gray-600'}`}
                 >
                     Post-Deductible
                 </button>
            </div>
        </div>


        {/* --- Sections Container --- */}
        <div className="px-3"> {/* Add padding around all sections */}
            {/* --- Highlights (Always Visible) --- */}
            <div className="py-3 px-1">
                <h3 className="font-semibold text-base mb-2 text-gray-700">Highlights</h3>
                 <DataRow label="Monthly premium" value={<> <span className="text-lg">{formatCost(plan.monthlyPremium)}</span>/mo </>} />
                <DataRow label="Deductible" value={formatCost(plan.deductible)} />
                <DataRow label="Max out-of-pocket" value={formatCost(plan.maxOutOfPocket)} />
                <DataRow label="Tier" value={plan.tier} />
                <DataRow label="Network type" value={plan.networkType} />
                <DataRow label="Rating" value={renderStars(plan.rating)} />
                {plan.specialFeatures?.map((feature, index) => (
                     <DataRow key={index} label="Special features" value={ <span className="flex items-center text-green-600"><FaCheckCircle className="mr-1 flex-shrink-0" /> {feature}</span>} />
                ))}
            </div>

            {/* --- Doctors --- */}
            <CollapsibleSection title="Doctors">
                <DataRow label="Primary care visits" value={formatCost(plan.primaryCareVisitCost, '/visit')} />
                <DataRow label="Specialist visits" value={formatCost(plan.specialistVisitCost, '/visit')} />
            </CollapsibleSection>

            {/* --- Prescription Drugs --- */}
             <CollapsibleSection title="Prescription Drugs">
                <DataRow label="Generic" value={formatCost(plan.genericDrugCost, '/fill')} />
                <DataRow label="Brand" value={formatCost(plan.brandDrugCost)} />
                <DataRow label="Preferred brand" value={formatCost(plan.preferredBrandDrugCost)} />
                <DataRow label="Specialty" value={formatCost(plan.specialtyDrugCost)} />
             </CollapsibleSection>

             {/* --- Surgery & Treatment --- */}
             <CollapsibleSection title="Surgery & Treatment">
                 <DataRow label="Inpatient" value={formatCost(plan.inpatientCost)} />
                 <DataRow label="Outpatient" value={formatCost(plan.outpatientCost)} />
                 <DataRow label="Imaging" value={formatCost(plan.imagingCost)} />
                 <DataRow label="Labs" value={formatCost(plan.labsCost)} />
             </CollapsibleSection>

             {/* --- Emergency Care --- */}
             <CollapsibleSection title="Emergency Care">
                 <DataRow label="Emergency room" value={formatCost(plan.emergencyRoomCost)} />
                 <DataRow label="Urgent care" value={formatCost(plan.urgentCareCost, '/visit')} />
             </CollapsibleSection>

             {/* --- Pregnancy --- */}
             <CollapsibleSection title="Pregnancy">
                 <DataRow label="Prenatal care" value={formatCost(plan.prenatalCareCost)} />
                 <DataRow label="Labor and delivery fees" value={formatCost(plan.laborDeliveryCost)} />
                 <DataRow label="Postnatal care" value={formatCost(plan.postnatalCareCost)} />
             </CollapsibleSection>
        </div>

        {/* --- CTA Buttons --- REMOVED */}
       {/*
       <div className="mt-auto p-4 border-t">
         <div className="flex justify-between gap-2">
            <button className="flex-1 border border-gray-700 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 rounded text-sm transition duration-150 ease-in-out">
              Details
            </button>
            <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-3 rounded text-sm transition duration-150 ease-in-out">
              Enroll
            </button>
         </div>
       </div>
       */}
    </div>
  );
};

export default PlanCard; 