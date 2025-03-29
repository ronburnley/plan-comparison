import React, { useState } from 'react';
import { type HealthPlan } from '../types/HealthPlan';
import { FaStar, FaRegStar, FaCheckCircle, FaInfoCircle } from 'react-icons/fa'; // Example icons

interface PlanCardProps {
  plan: HealthPlan;
}

const formatCurrency = (value: number | string) => {
  if (typeof value === 'string') return value;
  return `$${value.toLocaleString()}`;
};

const formatCost = (value: number | string, suffix = '') => {
  if (typeof value === 'string') return value;
  return `$${value}${suffix}`;
};

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  // State for the pre/post deductible toggle (functionality later)
  const [showPostDeductible, setShowPostDeductible] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-300" />);
    }
    return <div className="flex">{stars}</div>;
  };

  // --- Component Sections --- TODO

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
      {/* Recommended Badge */}
      {plan.recommended && (
        <div className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full inline-flex items-center mb-3 self-start">
          <FaInfoCircle className="mr-1" /> We recommend this plan
        </div>
      )}

      {/* Plan Name and Premium */}
      <h2 className="text-lg font-bold mb-1" title={plan.planName}>{plan.planNameShort || plan.planName}</h2>
      <div className="mb-4">
        <span className="text-2xl font-bold mr-2">{formatCurrency(plan.monthlyPremium)}/mo</span>
        {plan.originalPremium && (
          <span className="text-gray-500 line-through">was {formatCurrency(plan.originalPremium)}</span>
        )}
      </div>

      {/* Pre/Post Deductible Toggle */}
      <div className="flex items-center justify-center mb-6">
        <span className={`mr-2 text-sm ${!showPostDeductible ? 'font-semibold' : 'text-gray-500'}`}>Pre-Deductible</span>
        <label htmlFor={`toggle-${plan.planName.replace(/\s+/g, '-')}`} className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id={`toggle-${plan.planName.replace(/\s+/g, '-')}`}
              className="sr-only"
              checked={showPostDeductible}
              onChange={() => setShowPostDeductible(!showPostDeductible)}
            />
            <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
            <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${showPostDeductible ? 'translate-x-full !bg-blue-500' : ''}`}></div>
          </div>
        </label>
        <span className={`ml-2 text-sm ${showPostDeductible ? 'font-semibold' : 'text-gray-500'}`}>Post-Deductible</span>
      </div>

      {/* --- Highlights Section --- TODO */}
      <div className="mb-6 border-t pt-4">
        <h3 className="text-base font-semibold mb-3 text-gray-700">Highlights</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div><span className="font-medium">Deductible:</span> {formatCurrency(plan.deductible)}</div>
          <div><span className="font-medium">Max Out-of-Pocket:</span> {formatCurrency(plan.maxOutOfPocket)}</div>
          <div><span className="font-medium">Tier:</span> {plan.tier}</div>
          <div><span className="font-medium">Network:</span> {plan.networkType}</div>
          <div className="flex items-center"><span className="font-medium mr-1">Rating:</span> {renderStars(plan.rating)}</div>
          {plan.specialFeatures?.map((feature, index) => (
            <div key={index} className="flex items-center text-green-600">
              <FaCheckCircle className="mr-1" /> {feature}
            </div>
          ))}
        </div>
      </div>

      {/* --- Other Sections (Doctors, Drugs, etc.) --- TODO - Add structure based on spec */}

      {/* --- CTA Buttons --- TODO */}
       <div className="mt-auto pt-6 border-t">
         <div className="flex justify-between gap-4">
            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition duration-150 ease-in-out">
              Details
            </button>
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out">
              Enroll
            </button>
         </div>
       </div>
    </div>
  );
};

export default PlanCard; 