import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Health Plan Comparison</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Plan 1 Column */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Plan A</h2>
          {/* Placeholder for Plan A details */}
          <p>Details for Plan A will go here...</p>
        </div>

        {/* Plan 2 Column */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Plan B</h2>
          {/* Placeholder for Plan B details */}
          <p>Details for Plan B will go here...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
