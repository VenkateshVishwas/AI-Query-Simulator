const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite (creates file if not exists)
const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) console.error(err.message);
    else console.log("Connected to SQLite database.");
});

// Create tables if not exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        quarter TEXT NOT NULL,
        revenue INTEGER NOT NULL
    )`);

    // Insert dummy data
    db.run(`INSERT INTO sales (quarter, revenue) VALUES ('Q1', 50000), ('Q2', 60000)`);
});

module.exports = db;
