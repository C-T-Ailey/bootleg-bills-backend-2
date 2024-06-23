const mongoose = require('mongoose');

const newsLetterSchema = mongoose.Schema({

    emailAddress: {
        type: String
    }
},
{
    timestamps: true
});

const NewsLetter = mongoose.model('NewsLetter', newsLetterSchema);

module.exports = NewsLetter;