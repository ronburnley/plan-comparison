import React from 'react';

const InfoBox: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm w-full max-w-sm">
      <ul className="space-y-3 text-sm text-gray-700 mb-6 list-disc list-inside">
        <li>
          <strong>4.2 million people</strong> have used Stride's <strong>free service.</strong>
        </li>
        <li>
          Save an average of <strong>$447/month</strong> on insurance.
        </li>
        <li>
          Select the perfect plan in <strong>less than 5 minutes.</strong>
        </li>
      </ul>
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-1">Partner of</p>
        {/* Placeholder for HealthCare.gov logo */}
        <div className="font-semibold text-lg text-gray-800">HealthCare.gov</div>
      </div>
    </div>
  );
};

export default InfoBox; 