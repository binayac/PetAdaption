const express = require("express");
const app = express();
const router = require('./route');
const connectDb = require('./dbConnection');

require("dotenv").config();
const cors = require("cors");

// Initialize database connection
connectDb();

// Use environment-defined port or fallback to 4001
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(cors()); // Make sure you use cors if interacting with frontend
app.use('/', router);

app.get('/', (req, res) => {
    res.send("Hello World");
});

// Updated error handling for app.listen
app.listen(PORT, (err) => {
    if (err) {
        console.error(`Failed to start server: ${err}`);
        process.exit(1); // Exit the process with an error code (1)
    }
    console.log(`Server is running on port ${PORT}`);
});