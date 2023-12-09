import React, { useState, useEffect } from 'react';
import DefiService from "../../src/service/DefiService";

const ProfilePage = () => {
  const [walletAddress, setWalletAddress] = useState('0xMockWalletAddress');
  const [loansTaken, setLoansTaken] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    DefiService.getLoansTakenForWallet(walletAddress)
    .then(loans => setLoansTaken(loans))
    .catch(error => showToast(error.toString()));
  }, [walletAddress]);

  const showToast = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  const handlePayLoan = async (loanId) => {
    try {
      const response = await DefiService.payLoan(loanId);
      showToast(response);
      // Trigger state update to re-fetch loans
      setLoansTaken(loans => loans.filter(loan => loan.id !== loanId));
    } catch (error) {
      showToast(error.toString());
    }
  };

  return (
      <div className="container mx-auto p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p>Wallet Address: {walletAddress}</p>
        {message && <div className="toast-message bg-red-100 text-black p-3 rounded">{message}</div>}
        <div className="loans-taken-panel my-6">
          <h2 className="text-xl mb-4">Loans Taken</h2>
          {loansTaken.map((loan) => (
              <div key={loan.id} className="loan-tile flex justify-between items-center p-4 mb-4 bg-gray-800 rounded shadow-lg">
                <div className="loan-info w-2/5">
                  <p className="flex justify-between">
                    <span>ETH Collateral:</span>
                    <span>{loan.collateralEth} ETH</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Date Taken:</span>
                    <span>{new Date(loan.dateTaken).toLocaleDateString()}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Interest Rate:</span>
                    <span>{loan.interestRate.toFixed(3)}%</span>
                  </p>
                  <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${loan.paidPercentage}%` }}></div>
                  </div>
                </div>
                <div className={'space w-1/5'}>
                </div>
                <button
                    className="pay-loan-button w-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                    onClick={() => handlePayLoan(loan.id)}
                >
                  Pay Loan
                </button>
              </div>
          ))}
        </div>
      </div>
  );
};

export default ProfilePage;
