const mongoose = require('mongoose');
const Teamschema = require('./Team')
const { Schema } = mongoose;

const GroupSchema = new Schema(
    {
        groupName: { 
            type: String, 
            required: true
        },
        groupColor: {
            type: String,
        }, 
        slug: {
            type: String,
            required: true
        },
        teams: [Teamschema], 
    }
);

module.exports = mongoose.model('Group', GroupSchema);