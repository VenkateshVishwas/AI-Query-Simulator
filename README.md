# AI Query Simulator

## Deployment

The application is deployed at: [AI Query Simulator](https://ai-query-simulator.onrender.com)

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_USERNAME/AI-Query-Simulator.git
   cd AI-Query-Simulator
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add the following:
   ```sh
   JWT_SECRET=your_secret_key
   DATABASE_URL=your_database_connection_string
   ```

4. Start the server:
   ```sh
   npm start
   ```

## API Documentation

### Authentication

- **Login**
  ```sh
  curl -X POST https://ai-query-simulator.onrender.com/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
  ```

### Query Processing

- **Execute a Query**
  ```sh
  curl -X POST https://ai-query-simulator.onrender.com/query \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"query": "How many users signed up last month?"}'
  ```

- **Explain a Query**
  ```sh
  curl -X POST https://ai-query-simulator.onrender.com/explain \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"query": "Get total revenue by category"}'
  ```

- **Validate a Query**
  ```sh
  curl -X POST https://ai-query-simulator.onrender.com/validate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"query": "Show all orders from last week"}'
  ```

## Testing

You can use **Postman** or the provided `curl` commands to test the API.

---

Your AI Query Simulator is now live and ready to use! 🚀
