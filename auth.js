const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware to verify JWT token
const authenticate = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const jwtToken = token.split(" ")[1];

    try {
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request
        next();
    } catch (err) {
        return res.status(403).json({ error: "Invalid or expired token" });
    }
};

// Generate JWT Token (Use this in login/signup)
const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = { authenticate, generateToken };
