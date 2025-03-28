const express = require("express");
const db = require("./database");
const { authenticate, generateToken } = require("./auth");

const app = express();
app.use(express.json());

// Dummy user for authentication simulation
const DUMMY_USER = { id: 1, email: "user@example.com", password: "password123" };

// Login route (returns JWT)
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
        const token = generateToken(DUMMY_USER);
        return res.json({ token });
    }

    res.status(401).json({ error: "Invalid credentials" });
});

// Apply authentication to protected routes
app.post("/query", authenticate, (req, res) => {
    const { question } = req.body;
    if (question.toLowerCase().includes("sales")) {
        db.all("SELECT * FROM sales", [], (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ query: "SELECT * FROM sales", result: rows });
        });
    } else {
        res.json({ query: "Unknown", result: [] });
    }
});

app.post("/explain", authenticate, (req, res) => {
    res.json({ explanation: `Identified keywords in query: ${req.body.question}` });
});

app.post("/validate", authenticate, (req, res) => {
    res.json({ valid: req.body.question.toLowerCase().includes("sales") });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
