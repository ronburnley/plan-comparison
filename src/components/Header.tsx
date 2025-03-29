import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 md:px-8 lg:px-16 border-b border-gray-200 flex items-center justify-between">
      {/* Logo */}
      <div className="text-3xl font-bold text-black">
        Stride
        {/* Placeholder for actual Stride logo */}
      </div>

      {/* Right side elements */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Phone Number */}
        <a href="tel:415-930-9110" className="flex items-center text-sm text-gray-700 hover:text-black">
          {/* Placeholder for phone icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          415-930-9110
        </a>

        {/* Language Toggle */}
        <button className="flex items-center text-sm text-gray-700 hover:text-black">
           {/* Placeholder for globe icon */}
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
           </svg>
          Español
        </button>

        {/* Save Progress Button */}
        <button className="px-4 py-2 border border-gray-700 rounded text-sm font-medium text-gray-700 hover:bg-gray-100">
          Save Progress
        </button>
      </div>
    </header>
  );
};

export default Header; 