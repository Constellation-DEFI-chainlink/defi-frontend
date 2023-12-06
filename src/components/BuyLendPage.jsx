// BuyLendPage.jsx
import React, { useState } from 'react';

function BuyLendPage() {
  const [activeTab, setActiveTab] = useState('borrow');

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Weather-Indexed Loan Marketplace</h1>
        <div>
          {/* Tab buttons */}
          <div className="mb-4">
            <button
                className={`mr-4 ${activeTab === 'borrow' ? 'text-blue-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('borrow')}
            >
              Borrowers
            </button>
            <button
                className={`${activeTab === 'lend' ? 'text-blue-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('lend')}
            >
              Lenders
            </button>
          </div>

          {/* Tab content */}
          {activeTab === 'borrow' && (
              <div>
                {/* Borrowers form - To be implemented */}
              </div>
          )}
          {activeTab === 'lend' && (
              <div>
                {/* Lenders form - To be implemented */}
              </div>
          )}
        </div>
      </div>
  );
}

export default BuyLendPage;
