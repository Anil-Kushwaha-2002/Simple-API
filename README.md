# Full Stack Developer
# Simple API and Frontend Page
Demo - https://anil-kushwaha-2002.github.io/Simple-API/
## Project Overview
This project contains a simple API backend built with Node.js and Express, along with a frontend that allows users to interact with the API by entering their name and receiving a personalized greeting.

## Backend
- **Endpoint**: `GET /api/greet?name=YourName`
- **Response**:
  - Success: `{"message": "Hello, YourName! Welcome to Younglabs."}`
  - Error: `{"error": "Name is required."}`

## Frontend
- A simple HTML/JS page that allows the user to input their name and receive a greeting message from the API.

## How to Run Locally
1. Clone the repository.
2. Navigate to the `simple-api` directory and run the backend:
   ```bash
   node server.js
