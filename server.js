const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Dummy vehicle location data with a longer path
const locationData = [
  { latitude: 17.385044, longitude: 78.486671 },
  { latitude: 17.390000, longitude: 78.490000 },
  { latitude: 17.400000, longitude: 78.495000 },
  { latitude: 17.405000, longitude: 78.500000 },
  { latitude: 17.410000, longitude: 78.510000 },
  { latitude: 17.415000, longitude: 78.515000 },
  { latitude: 17.420000, longitude: 78.520000 },
  { latitude: 17.425000, longitude: 78.525000 },
  { latitude: 17.430000, longitude: 78.530000 },
  { latitude: 17.435000, longitude: 78.535000 },
  { latitude: 17.440000, longitude: 78.540000 },
  { latitude: 17.445000, longitude: 78.545000 },
];

// Serve the `index.html` from the root directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files (if you have any CSS, JS, images in the same directory)
app.use(express.static(path.join(__dirname)));

// Endpoint to serve current vehicle location
let currentIndex = 0;

app.get('/api/location', (req, res) => {
  if (currentIndex >= locationData.length) {
    // Send the last location
    res.json(locationData[locationData.length - 1]);
  } else {
    res.json(locationData[currentIndex]);
    currentIndex++;
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
