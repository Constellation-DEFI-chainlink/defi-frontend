const mockSuccessOrFail = () => Math.random() > 0.35;
const mockRandomPercentage = () => (Math.random() * 10).toFixed(3);

const getCollateralAmount = (loanAmount, temperature) => {
  const ETH_PRICE = 2300; // USD
  const MIN_INTEREST_RATE = 0.03; // 3%
  const MAX_INTEREST_RATE = 0.50; // 50%
  const MIN_TEMP = -30; // Minimum expected temperature
  const MAX_TEMP = 40; // Maximum expected temperature

  // Calculate interest rate based on temperature
  // This is a linear mapping from the temperature to the interest rate
  let interestRate = MIN_INTEREST_RATE + (MAX_TEMP - temperature) * (MAX_INTEREST_RATE - MIN_INTEREST_RATE) / (MAX_TEMP - MIN_TEMP);

  // Ensure interest rate is within the bounds of 3% to 50%
  interestRate = Math.max(MIN_INTEREST_RATE, Math.min(interestRate, MAX_INTEREST_RATE));

  // Calculate the amount of ETH needed for the loan amount at the current ETH price
  const ethNeeded = loanAmount / ETH_PRICE;

  // Calculate the collateral amount in ETH
  const collateralAmount = ethNeeded * (1 + interestRate);

  // Return a Promise that resolves with the collateral amount and interest rate
  // The use of Promise here is to mimic the asynchronous behavior of fetching data
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.35) { // Mocking a success or fail response
      resolve({
        collateralAmount: collateralAmount,
        interestRate: interestRate * 100 // Convert to percentage for the user
      });
    } else {
      reject('Failed to calculate collateral amount.');
    }
  });
};


const acceptLoanOffer = (collateralAmount) => {
  // Mocking the loan acceptance and solstice coin minting process
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockSuccessOrFail()) {
        resolve(`Loan offer accepted. ${collateralAmount} in collateral locked.`);
      } else {
        reject('Failed to accept loan offer.');
      }
    }, 1000);
  });
};

const withdrawLoan = (loanAmount) => {
  // Mocking the loan withdrawal process
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockSuccessOrFail()) {
        resolve(`Loan amount of ${loanAmount} withdrawn successfully.`);
      } else {
        reject('Failed to withdraw loan.');
      }
    }, 1000);
  });
};

const payLoan = (loanId, repaymentAmount) => {
  // Mocking the loan repayment process
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockSuccessOrFail()) {
        resolve(`Loan ${loanId} repaid with amount ${repaymentAmount}.`);
      } else {
        reject('Failed to repay loan.');
      }
    }, 1000);
  });
};

export default {
  getCollateralAmount,
  acceptLoanOffer,
  withdrawLoan,
  payLoan
};
