const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.Mongo_URL
).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB", error);
});

const db = mongoose.connection;

db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

module.exports = db;
