const mongoose = require('mongoose');

const { Schema } = mongoose;

const TeamSchema = new Schema(
    {
        countryName: { 
            type: String, 
            required: true
        },
        countryFlag: {
            type: String,
        }
    },  
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Group', GroupSchema);