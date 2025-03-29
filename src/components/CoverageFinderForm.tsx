import React, { useState } from 'react';

const CoverageFinderForm: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-lg">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Find affordable <span className="bg-yellow-200 px-1">health coverage for 2025</span>
      </h1>
      <p className="text-gray-600 mb-6">
        We'll help find the right plan for you using our free comparison tool.
      </p>

      <form>
        <div className="mb-4">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
            ZIP Code
          </label>
          <p className="text-xs text-gray-500 mb-1">
            Your residence ZIP code determines the plans available to you
          </p>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="" // Placeholder removed as per image
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-gray-500">(optional)</span>
          </label>
           <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="" // Placeholder removed as per image
          />
        </div>

        <p className="text-xs text-gray-500 mb-6">
          Your information is safe - check out our{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Privacy Policy {/* Placeholder for external link icon */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
             </svg>
          </a>
        </p>

        <button
          type="submit"
          className="w-full bg-gray-300 text-gray-500 font-semibold py-3 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          // Note: Button is disabled visually in the image, replicate that style
        >
          Find Coverage for 2025
        </button>
      </form>
    </div>
  );
};

export default CoverageFinderForm; 