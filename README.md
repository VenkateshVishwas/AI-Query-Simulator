# AI Query Simulation Engine

## Overview

This is a lightweight backend service that simulates a simplified AI-powered data query system. It allows users to input natural language queries and returns simulated SQL-like responses. Authentication is implemented using JWT.

## Features

- Convert natural language queries into pseudo-SQL.
- Validate and explain queries.
- Secure API using JWT authentication.
- Uses SQLite as a mock database.

---

## Tech Stack

- **Node.js** (Express.js)
- **SQLite** (Mock Database)
- **JWT** (Authentication)

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/your-repo/ai-query-simulator.git
cd ai-query-simulator
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```sh
JWT_SECRET=your_secret_key
```

### 4. Start the Server

```sh
node server.js
```

The server runs on **[http://localhost:3000](http://localhost:3000)**

---

## API Documentation

### 1. **Login (Get JWT Token)**

**Endpoint:** `POST /login`

#### Request:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}
```

---

### 2. **Query Data**

**Endpoint:** `POST /query`

#### Request (Authenticated):

```sh
curl -X POST http://localhost:3000/query \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{"question": "Show sales for Q1"}'
```

#### Response:

```json
{
  "query": "SELECT * FROM sales WHERE quarter = 'Q1'",
  "result": [ { "id": 1, "amount": 5000 } ]
}
```

---

### 3. **Explain Query**

**Endpoint:** `POST /explain`

#### Request:

```sh
curl -X POST http://localhost:3000/explain \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{"question": "Show sales for Q1"}'
```

#### Response:

```json
{
  "explanation": "Identified keywords: sales, Q1"
}
```

---

### 4. **Validate Query**

**Endpoint:** `POST /validate`

#### Request:

```sh
curl -X POST http://localhost:3000/validate \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{"question": "Show sales for Q1"}'
```

#### Response:

```json
{
  "valid": true
}
```

---

## Deployment

Deploy on **Render, Heroku, or Railway**:

```sh
git push heroku main  # Example for Heroku
```

---

## Postman Collection

Import the **Postman collection** from `postman_collection.json` (included in the repo) for easy testing.

---

## License

MIT License

---

## Author

Venkatesh Vishwas- [GitHub Profile](https://github.com/VenkateshVishwas/)

# AI Query Simulation Engine

## Overview

This is a lightweight backend service that simulates a simplified AI-powered data query system. It allows users to input natural language queries and returns simulated SQL-like responses. Authentication is implemented using JWT.

## Features

- Convert natural language queries into pseudo-SQL.
- Validate and explain queries.
- Secure API using JWT authentication.
- Uses SQLite as a mock database.

---

## Tech Stack

- **Node.js** (Express.js)
- **SQLite** (Mock Database)
- **JWT** (Authentication)

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/VenkateshVishwas/AI-Query-Simulator
cd ai-query-simulator
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```sh
JWT_SECRET=your_secret_key
```

### 4. Start the Server

```sh
node server.js
```

The server runs on **[http://localhost:3000](http://localhost:3000)**

---

## API Documentation

### 1. **Login (Get JWT Token)**

**Endpoint:** `POST /login`

#### Request:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}
```

---

### 2. **Query Data**

**Endpoint:** `POST /query`

#### Request (Authenticated):

```sh
curl -X POST http://localhost:3000/query \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{"question": "Show sales for Q1"}'
```

#### Response:

```json
{
  "query": "SELECT * FROM sales WHERE quarter = 'Q1'",
  "result": [ { "id": 1, "amount": 5000 } ]
}
```

---

### 3. **Explain Query**

**Endpoint:** `POST /explain`

#### Request:

```sh
curl -X POST http://localhost:3000/explain \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{"question": "Show sales for Q1"}'
```

#### Response:

```json
{
  "explanation": "Identified keywords: sales, Q1"
}
```

---

### 4. **Validate Query**

**Endpoint:** `POST /validate`

#### Request:

```sh
curl -X POST http://localhost:3000/validate \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{"question": "Show sales for Q1"}'
```

#### Response:

```json
{
  "valid": true
}
```

---

## Author

Venkatesh Vishwas- [GitHub Profile](https://github.com/VenkateshVishwas)

