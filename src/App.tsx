import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4">
      <p>Start prompting (or editing) to see magic happen :)</p>
      <a href="https://app.netlify.com/sites/coruscating-toffee-c05acd/deploys" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://api.netlify.com/api/v1/badges/d3074315-ba96-43a2-8b7e-6eabd80ec021/deploy-status" 
          alt="Netlify Status"
          className="h-6"
        />
      </a>
    </div>
  );
}

export default App;