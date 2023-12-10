# SolsticeLend Documentation

SolsticeLend is a decentralized finance application that dynamically adjusts loan interest rates based on real-time weather conditions. It uses Chainlink oracles to fetch weather data which directly influences the terms of the loans provided on the platform.

## Summary

SolsticeLend enables users to borrow funds with interest rates that reflect current weather conditions. By using the power of smart contracts and real-time data, SolsticeLend provides a unique financial product that is fair, transparent, and adaptable to the changing environment.

## Chainlink Integration

Chainlink oracles are utilized to retrieve accurate and tamper-proof weather data from multiple sources. This data is used within the SolsticeLend smart contracts to adjust loan interest rates, ensuring that the rates are fair and responsive to real-world events.

## Smart Contract Details

The SolsticeLend smart contract suite comprises:

- **Loan Contract:** Manages the issuance of loans, calculation of interest rates, and repayment terms based on the weather data provided by Chainlink oracles.
- **Oracle Contract:** Interacts with Chainlink to fetch the required weather data from external APIs.
- **Vault Contract:** Handles the collateral provided by borrowers and ensures the safety of funds within the platform.

## User Actions and Frontend Flow

The user experience on SolsticeLend is designed to be intuitive and straightforward:

1. **Location Input:** Users begin by entering their location to fetch local weather conditions.
2. **Loan Request:** Users specify the amount they wish to borrow.
3. **Collateral Calculation:** The platform calculates the required collateral based on the current weather data.
4. **Loan Acceptance:** Users accept the loan terms and provide collateral to receive the loan amount in SolsticeCoin.
5. **Loan Repayment:** Users can repay their loans and recover their collateral directly through the platform.

## Demo and Video

Experience SolsticeLend live: [SolsticeLend Demo](https://defi-frontend-tau.vercel.app)

Watch the explainer video: [SolsticeLend Video](#)

## Running the Frontend

To run the SolsticeLend frontend on your local machine:

```bash
npm install
npm run dev
