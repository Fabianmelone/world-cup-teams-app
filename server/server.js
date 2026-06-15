const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/merndb';

// Middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Backend is running');
});
// Routes
app.use('/api/items', require('./routes/items'));


// Health check
app.get('/api/health', (req, res) => res.json({ status: 'OK' }));

// Connect to MongoDB and start server
mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error(err));