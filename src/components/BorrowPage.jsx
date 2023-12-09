import React, { useState } from 'react';
import DefiService from '../service/DefiService';

const BorrowPage = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [collateralDetails, setCollateralDetails] = useState(null);
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [message, setMessage] = useState('');
  const [weather, setWeather] = useState({ temperature: '', windSpeed: '' });

  const showToast = (msg) => {
    console.log(msg); // For debugging
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  const handleCalculateCollateral = async () => {
    if (!loanAmount || parseFloat(loanAmount) <= 0) {
      showToast('Please enter a valid loan amount greater than 0.');
      return;
    }

    const latitude = parseFloat(location.latitude);
    const longitude = parseFloat(location.longitude);
    if (isNaN(latitude) || isNaN(longitude)) {
      showToast('Invalid location data. Please enter valid latitude and longitude.');
      return;
    }

    try {
      await fetchWeatherData(parseFloat(location.latitude), parseFloat(location.longitude));
      const interestRateResponse = await DefiService.getCollateralAmount(loanAmount, weather.temperature);
      setCollateralDetails(interestRateResponse);
      showToast('Collateral amount calculated based on current weather data.');
    } catch (error) {
      showToast(error);
    }
  };

  const handleAcceptLoanOffer = async () => {
    try {
      const acceptResponse = await DefiService.acceptLoanOffer(collateralDetails.collateralAmount);
      showToast(acceptResponse);
      setLoanAmount('');
      setCollateralDetails(null);
    } catch (error) {
      showToast(error);
    }
  };

  const fetchWeatherData = async (latitude, longitude) => {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&current_weather=true`
    );
    const data = await response.json();
    const currentWeather = data.current_weather;
    setWeather({
      temperature: currentWeather.temperature,
      windSpeed: currentWeather.windspeed
    });
  };

  const validateAndSetLocation = (lat, lon) => {
    const parsedLat = parseFloat(lat);
    const parsedLon = parseFloat(lon);
    const isLatitudeValid = !isNaN(parsedLat) && parsedLat >= -90 && parsedLat <= 90;
    const isLongitudeValid = !isNaN(parsedLon) && parsedLon >= -180 && parsedLon <= 180;

    if (isLatitudeValid && isLongitudeValid) {
      setLocation({ latitude: ""+parsedLat, longitude: ""+parsedLon });
      fetchWeatherData(parsedLat, parsedLon);
    } else {
      showToast('Invalid latitude or longitude. Please enter valid numbers.');
    }
  };

  return (
      <div className="container mx-auto p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Weather-Indexed Loan Marketplace</h1>
        <p>Welcome to our platform where loan terms adapt to real-time weather conditions.</p>
        {message && <div className="toast-message">{message}</div>}

        {/* Weather Panel */}
        <div className="weather-panel my-6 p-4 bg-gray-100 text-black rounded">
          <h2 className="text-2xl mb-4">Current Weather</h2>
          {!weather.temperature && <p>Fetching weather data...</p>}
          {weather.temperature && (
              <>
                <p>Temperature: {weather.temperature} °C</p>
                <p>Wind Speed: {weather.windSpeed} km/h</p>
              </>
          )}
          <div className="location-inputs my-4">
            <input
                type="text"
                placeholder="38.8951" // Washington, USA latitude
                name="latitude"
                className="border p-2 rounded mr-2 w-full"
                value={location.latitude}
                onChange={(e) => setLocation({ ...location, latitude: e.target.value })}
            />
            <input
                type="text"
                placeholder="-77.0364" // Washington, USA longitude
                name="longitude"
                className="border p-2 rounded w-full"
                value={location.longitude}
                onChange={(e) => setLocation({ ...location, longitude: e.target.value })}
            />
            <button
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 w-full mt-2"
                onClick={() => validateAndSetLocation(location.latitude, location.longitude)}
            >
              Update Location
            </button>
          </div>
        </div>

        {/* Loan Request Section */}
        <div className="loan-request-section my-6">
          <label htmlFor="loan-amount" className="block my-2">Loan Amount in USD</label>
          <input
              id="loan-amount"
              name="loanAmount"
              type="number"
              placeholder="Enter loan amount in Solc Coin"
              className="border p-2 rounded w-full text-black"
              min={0}
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              step=".01"

          />

          <button
              className={`bg-blue-500 text-white rounded p-2 hover:bg-blue-700 my-2 ${(!(loanAmount>0) ||!(weather && !!weather.temperature) )? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleCalculateCollateral}
              disabled={(!(loanAmount>0) ||!(weather && !!weather.temperature) )}
          >
            Calculate Collateral
          </button>

          {collateralDetails && (
              <div className="collateral-details">
                <p>Calculated Collateral Amount: {collateralDetails.collateralAmount} ETH</p>
                <p>Interest Rate: {collateralDetails.interestRate}%</p>
                <p>By accepting, you will trigger a transaction to pay the collateral in ETH and receive your loan in Solc Coin</p>
                <button
                    className={`bg-green-500 text-white rounded p-2 hover:bg-green-700 my-2`}
                    onClick={handleAcceptLoanOffer}
                >
                  Accept Loan and Pay Collateral
                </button>
              </div>
          )}
        </div>
      </div>
  );
};

export default BorrowPage;
