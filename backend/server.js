require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5500"
}));

app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "KRISHNABATI PARK API is running",
        timestamp: new Date().toISOString()
    });
});

app.get("/api/park", (req, res) => {
    res.json({
        name: "KRISHNABATI ULIR PARK (INTERNATIONAL)",
        currency: "INR",
        mapUrl: "https://maps.app.goo.gl/omG8XXwTfdf9hHfm9",
        bookingStatus: "Not configured"
    });
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API route not found"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Park API running on port ${PORT}`);
});
