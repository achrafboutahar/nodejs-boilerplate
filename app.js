// # Express
const express = require("express");
const app = express();

// # Middlewares
const cors = require("cors");
const cookieParser = require("cookie-parser");

// # Custom middlewares
const auth = require("./middlewares/auth");
const errorHandler = require("./middlewares/errorHandler");

// # Routes
const publicRoutes = require("./routes");
const authRoutes = require("./routes/auth");

// # Using Middlewares
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Public route
app.use("/", publicRoutes);

// Protected route
app.use(auth);
app.use("/auth", authRoutes);

// # ErrorHandler middleware
app.use(errorHandler);

module.exports = app;
