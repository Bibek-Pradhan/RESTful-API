const mongoose = require("mongoose");

const batsmanSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "Men T20 Batting"
    },
});

const MensRanking = new mongoose.model("MensRanking", batsmanSchema);

module.exports = MensRanking;