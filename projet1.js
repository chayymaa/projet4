// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy endpoint to handle input data
app.post('/input-data', (req, res) => {
  const inputData = req.body;
  // Process input data and store in database
  console.log('Received input data:', inputData);
  res.json({ message: 'Input data received successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
