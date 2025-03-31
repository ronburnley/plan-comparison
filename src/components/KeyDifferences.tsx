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

interface DifferenceRowProps {
  label: string;
  value1: number | string;
  value2: number | string;
  suffix?: string; // Optional suffix like /mo, /visit
}

const DifferenceRow: React.FC<DifferenceRowProps> = ({ label, value1, value2, suffix = '' }) => {
  let baseClass = "text-sm text-gray-900 text-center w-1/3 px-2 py-1"; // Added py-1 for vertical padding within highlight
  let class1 = baseClass;
  let class2 = baseClass;
  // Apply highlighting (text color + bold) if both values are numeric
  const betterHighlightClass = "text-green-600 font-semibold"; // Made green slightly brighter

  if (typeof value1 === 'number' && typeof value2 === 'number') {
    if (value1 < value2) {
      class1 += ` ${betterHighlightClass}`;
    } else if (value2 < value1) {
      class2 += ` ${betterHighlightClass}`;
    }
  }
  // Format values for display
  const displayValue1 = `${formatDiffCost(value1)}${suffix}`;
  const displayValue2 = `${formatDiffCost(value2)}${suffix}`;

  return (
    // Reduced py-3 to py-2 on the container div as padding is now on the spans
    <div className="flex justify-between items-center py-2 border-b">
      <span className="text-sm text-gray-600 w-1/3 px-2">{label}</span>
      {/* Apply conditional classes and display formatted values */}
      <span className={class1}>{displayValue1}</span>
      <span className={class2}>{displayValue2}</span>
    </div>
  );
};

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

          {/* Data Rows: Pass raw values and suffix */}
          <DifferenceRow label="Monthly Premium" value1={plan1.monthlyPremium} value2={plan2.monthlyPremium} suffix="/mo" />
          <DifferenceRow label="Deductible" value1={plan1.deductible} value2={plan2.deductible} />
          <DifferenceRow label="Max Out-of-Pocket" value1={plan1.maxOutOfPocket} value2={plan2.maxOutOfPocket} />
          <DifferenceRow label="Primary Care Visit" value1={plan1.primaryCareVisitCost} value2={plan2.primaryCareVisitCost} suffix="/visit" />
          <DifferenceRow label="Specialist Visit" value1={plan1.specialistVisitCost} value2={plan2.specialistVisitCost} suffix="/visit" />
          <DifferenceRow label="Generic Drugs" value1={plan1.genericDrugCost} value2={plan2.genericDrugCost} suffix="/fill" />
        </div>
      </div>
    </div>
  );
};

export default KeyDifferences;