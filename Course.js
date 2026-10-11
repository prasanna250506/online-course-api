
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        instructor: {
            type: String,
            required: true,
            trim: true
        },
        duration: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
