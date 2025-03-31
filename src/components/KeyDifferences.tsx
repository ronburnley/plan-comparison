import React from 'react';
import { type HealthPlan } from '../types/HealthPlan';

interface KeyDifferencesProps {
  plan1: HealthPlan;
  plan2: HealthPlan;
}

// Simple cost formatter (similar to PlanCard but potentially simplified)
const formatDiffCost = (value: number | string): string => {
  if (typeof value === 'number') {
    return `$${value}`;
  }
  // Handle simple strings like "Full price" directly
  if (typeof value === 'string' && !value.includes('%')) {
     return value;
  }
  // For more complex strings like Coinsurance, maybe just display as is or add logic
  return value;
};

const DifferenceRow: React.FC<{ label: string; value1: React.ReactNode; value2: React.ReactNode }> = ({ label, value1, value2 }) => (
  <div className="flex justify-between items-center py-3 border-b">
    <span className="text-sm text-gray-600 w-1/3 px-2">{label}</span>
    <span className="text-sm font-medium text-gray-900 text-center w-1/3 px-2">{value1}</span>
    <span className="text-sm font-medium text-gray-900 text-center w-1/3 px-2">{value2}</span>
  </div>
);

const KeyDifferences: React.FC<KeyDifferencesProps> = ({ plan1, plan2 }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 mb-6 md:mb-8 overflow-hidden">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center">Key Differences</h2>

      {/* Wrapper for horizontal scrolling on small screens */}
      <div className="overflow-x-auto">
        {/* Min width to enforce scrolling when needed */}
        <div className="min-w-[600px]"> 
          {/* Header Row: Added background, increased padding */}
          <div className="flex justify-between items-center py-3 border-b font-semibold bg-gray-50">
            <span className="text-sm text-gray-800 w-1/3 px-2">Feature</span>
            {/* Added truncate in case plan names are long */}
            <span className="text-sm text-gray-800 text-center w-1/3 px-2 truncate" title={plan1.planName}>{plan1.planNameShort || 'Plan 1'}</span>
            <span className="text-sm text-gray-800 text-center w-1/3 px-2 truncate" title={plan2.planName}>{plan2.planNameShort || 'Plan 2'}</span>
          </div>

          {/* Data Rows */}
          <DifferenceRow label="Monthly Premium" value1={`${formatDiffCost(plan1.monthlyPremium)}/mo`} value2={`${formatDiffCost(plan2.monthlyPremium)}/mo`} />
          <DifferenceRow label="Deductible" value1={formatDiffCost(plan1.deductible)} value2={formatDiffCost(plan2.deductible)} />
          <DifferenceRow label="Max Out-of-Pocket" value1={formatDiffCost(plan1.maxOutOfPocket)} value2={formatDiffCost(plan2.maxOutOfPocket)} />
          <DifferenceRow label="Primary Care Visit" value1={`${formatDiffCost(plan1.primaryCareVisitCost)}/visit`} value2={`${formatDiffCost(plan2.primaryCareVisitCost)}/visit`} />
          <DifferenceRow label="Specialist Visit" value1={`${formatDiffCost(plan1.specialistVisitCost)}/visit`} value2={`${formatDiffCost(plan2.specialistVisitCost)}/visit`} />
          <DifferenceRow label="Generic Drugs" value1={`${formatDiffCost(plan1.genericDrugCost)}/fill`} value2={`${formatDiffCost(plan2.genericDrugCost)}/fill`} />
        </div>
      </div>
    </div>
  );
};

export default KeyDifferences;