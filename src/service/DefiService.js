const mockSuccessOrFail = () => {
  // Randomly resolve or reject - will be replaced by smart contract communication
  return Math.random() > 0.35;
};

const mockRandomPercentage = () => (Math.random() * 10).toFixed(3) + '%';

const calculateEstimatedInterestRateForLend = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`Estimated Interest Rate per Year: ${mockRandomPercentage()}`);
      } else {
        reject('Failed to calculate interest rate.');
      }
    }, 1000);
  });
};

const calculateExpectedReturnForLend = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`Expected Return: ${mockRandomPercentage()}`);
      } else {
        reject('Failed to calculate expected return.');
      }
    }, 1000);
  });
};
const createLoanRequest = (amount, duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockSuccessOrFail()) {
        resolve(`Loan request for ${amount} with duration ${duration} created successfully.`);
      } else {
        reject('Failed to create loan request.');
      }
    }, 1000); // Simulating network delay
  });
};

const deposit = (amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockSuccessOrFail()) {
        resolve(`Successfully lent ${amount}.`);
      } else {
        reject('Failed to lend assets.');
      }
    }, 1000); // Simulating network delay
  });
};

export default {
  createLoanRequest,
  deposit,
  calculateEstimatedInterestRateForLend,
  calculateExpectedReturnForLend
};
