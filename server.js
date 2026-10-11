
require("dotenv").config();

const express = require("express");
const connectDB = require("./db");
const Course = require("./Course");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Add a new course
app.post("/api/courses", async (req, res) => {
    try {
        const course = await Course.create(req.body);

        res.status(201).json({
            message: "Course added successfully",
            course
        });
    } catch (error) {
        if (error.name === "ValidationError" ||
            error.name === "CastError") {
            return res.status(400).json({
                message: error.message
            });
        }

        res.status(500).json({
            message: "Failed to add course"
        });
    }
});

// Retrieve all courses
app.get("/api/courses", async (req, res) => {
    try {
        const courses = await Course.find().sort({ createdAt: -1 });
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve courses"
        });
    }
});

// Retrieve a course by ID
app.get("/api/courses/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({
            message: "Invalid course ID"
        });
    }
});

// Update a course
app.put("/api/courses/:id", async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
                overwrite: true
            }
        );

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json({
            message: "Course updated successfully",
            course
        });
    } catch (error) {
        res.status(400).json({
            message: "Could not update course",
            error: error.message
        });
    }
});

// Delete a course
app.delete("/api/courses/:id", async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json({
            message: "Course deleted successfully",
            course
        });
    } catch (error) {
        res.status(400).json({
            message: "Invalid course ID"
        });
    }
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Start server only after database connects
async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();
