const mongoose = require('mongoose');

mongoose.connect(
        // process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/merndb'
        process.env.MONGO_URI || 'mongodb://mongo:27017/merndb'
    );

module.exports = mongoose.connection;