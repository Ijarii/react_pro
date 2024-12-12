const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');  // To read the JSON file

dotenv.config(); // Load environment variables from a .env file
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());        // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse incoming JSON requests
app.use(express.static('public')); // Ensures all files in the 'public' folder are served


// Serve menu data from JSON file
app.get('/menu', (req, res) => {
    fs.readFile('./foods.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read the menu data' });
        }
        res.json(JSON.parse(data));  // Send the parsed JSON data as response
    });
});

// Import routes (from orders.js)
const orderRoutes = require('./routes/orders');
app.use('/orders', orderRoutes); // Use order routes for '/orders' path

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle GET request to the root ("/") path
app.get('/', (req, res) => {
    res.send('Welcome to the Food Delivery API!');
});
