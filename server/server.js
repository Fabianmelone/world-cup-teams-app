const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Backend is running');
});
// Routes
app.use(routes);


// Health check
app.get('/api/health', (req, res) => res.json({ status: 'OK' }));

// throws error message when MongoDB doesn't connect
db.on('error', (err) => {
    console.error('MongoDB connection error', err);
});


// connects to MongoDB and shows on which port express server runs
db.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})