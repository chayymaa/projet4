// App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputData, setInputData] = useState({
    previousCrops: [],
    soilConditions: {},
    weatherPatterns: {}
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/input-data', inputData);
      console.log(response.data);
      alert('Input data submitted successfully');
    } catch (error) {
      console.error('Error submitting input data:', error);
      alert('Error submitting input data. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Crop Rotation Planner</h1>
      <form onSubmit={handleSubmit}>
        <label>Previous Crops:</label>
        <input type="text" name="previousCrops" value={inputData.previousCrops} onChange={handleInputChange} />
        <br />
        <label>Soil Conditions:</label>
        <input type="text" name="soilConditions" value={inputData.soilConditions} onChange={handleInputChange} />
        <br />
        <label>Weather Patterns:</label>
        <input type="text" name="weatherPatterns" value={inputData.weatherPatterns} onChange={handleInputChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
