import React, {useState} from 'react';
import DefiService from '../service/DefiService';

const BuyLendPage = () => {
  const [activeTab, setActiveTab] = useState('borrow');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [lendAmount, setLendAmount] = useState('');
  const [message, setMessage] = useState('');
  const [estimatedInterestRate, setEstimatedInterestRate] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');

  const calculateInterestRate = () => {
    DefiService.calculateEstimatedInterestRateForLend()
    .then(response => {
      showToast(response);
      setEstimatedInterestRate(response);
    })
    .catch(error => showToast(error));
  };

  const calculateReturn = () => {
    DefiService.calculateExpectedReturnForLend()
    .then(response => {
      showToast(response);
      setExpectedReturn(response);
    })
    .catch(error => showToast(error));
  };

  const handleRequestLoan = () => {
    if (loanAmount > 0 && loanDuration > 0) {
      DefiService.createLoanRequest(loanAmount, loanDuration)
      .then(response => {
        showToast(response);
        // Reset the form and related states
        setLoanAmount('');
        setLoanDuration('');
        setEstimatedInterestRate('');
      })
      .catch(error => showToast(error));
    }
  };

  const handleLendAssets = () => {
    if (lendAmount > 0) {
      DefiService.deposit(lendAmount)
      .then(response => {
        showToast(response);
        // Reset the form and related states
        setLendAmount('');
        setExpectedReturn('');
      })
      .catch(error => showToast(error));
    }
  };

  const onLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
    if (estimatedInterestRate) {
      setEstimatedInterestRate('');
    }
  };

  const onLoanDurationChange = (e) => {
    setLoanDuration(e.target.value);
    if (estimatedInterestRate) {
      setEstimatedInterestRate('');
    }
  };

  const onLendAmountChange = (e) => {
    setLendAmount(e.target.value);
    if (expectedReturn) {
      setExpectedReturn('');
    }
  };

  const showToast = (msg) => {
    console.log(msg);
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
      <div className="container mx-auto p-4 text-white"> {/* Adjusted for white text */}
        <h1 className="text-2xl font-bold mb-4">Weather-Indexed Loan Marketplace</h1>
        <p>Welcome to the Weather-Indexed Loan Marketplace, where your loan terms adapt to real-time weather conditions.</p>
        {message && <div className="toast-message">{message}</div>}

        {/* Process Description */}
        <div className="mb-6">
          <p>Select whether you want to request a loan or lend your assets, then calculate the estimated interest rate or expected return before proceeding.</p>
        </div>

        <div className="mb-4 flex border-b">
          <button
              className={`mr-4 pb-2 w-1/2 ${activeTab === 'borrow' ? 'bg-[#000300] text-[#00df9a]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('borrow')}
          >
            Request a Loan
          </button>
          <button
              className={`pb-2 w-1/2 ${activeTab === 'lend' ? 'bg-[#000300] text-[#00df9a]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('lend')}
          >
            Lend Your Assets
          </button>
        </div>

        {/* Borrow Tab */}
        {activeTab === 'borrow' && (
            <div>
              <label htmlFor="loan-amount" className="block my-2">Loan Amount</label>
              <input id="loan-amount" name="loanAmount" type="number"
                     placeholder="Loan Amount" className="border p-2 rounded w-full text-black"
                     min={0}
                     value={loanAmount}
                     onChange={onLoanAmountChange}
              />
              <label htmlFor="loan-duration" className="block my-2">Loan Duration (in days)</label>
              <input id="loan-duration" name="loanDuration" type="number"
                     placeholder="Loan Duration" className="border p-2 rounded w-full text-black"
                     min={0}
                     value={loanDuration}
                     onChange={onLoanDurationChange}
              />
              <button id="calculate-interest-rate"
                      className={`bg-green-500 text-white rounded p-2 hover:bg-green-700 my-2 ${!(loanAmount >0 && loanDuration > 0) && 'opacity-50 cursor-not-allowed'}`}
                      onClick={calculateInterestRate}
                      disabled={!(loanAmount >0 && loanDuration > 0)}
              >
                Calculate Estimated Interest Rate
              </button>
              <p>{estimatedInterestRate}</p>
              <button id="request-loan"
                      className={`bg-blue-500 text-white rounded p-2 hover:bg-blue-700 my-2 ${!estimatedInterestRate ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={handleRequestLoan}
                      disabled={!estimatedInterestRate}
              >
                Request Loan
              </button>
            </div>
        )}

        {/* Lend Tab */}
        {activeTab === 'lend' && (
            <div>
              <label htmlFor="lend-amount" className="block my-2">Amount to Lend</label>
              <input id="lend-amount" name="lendAmount" type="number"
                     placeholder="Amount to Lend" className="border p-2 rounded w-full text-black"
                     min={0}
                     value={lendAmount}
                     onChange={onLendAmountChange}
              />
              <button id="calculate-return"
                      className={`bg-green-500 text-white rounded p-2 hover:bg-green-700 my-2 ${!(lendAmount > 0) && 'opacity-50 cursor-not-allowed'}`}
                      onClick={calculateReturn}
                      disabled={!(lendAmount > 0)}

              >
                Calculate Expected Return
              </button>
              <p>{expectedReturn}</p>
              <button id="lend-assets"
                      className={`bg-blue-500 text-white rounded p-2 hover:bg-blue-700 my-2 ${!expectedReturn ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={handleLendAssets}
                      disabled={!expectedReturn}
              >
                Lend Assets
              </button>
            </div>
        )}
      </div>
  );
};

export default BuyLendPage;
