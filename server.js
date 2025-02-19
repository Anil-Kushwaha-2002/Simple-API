// server.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS to allow frontend to access the backend
app.use(
  cors({
    origin: "*", // This allows all origins, but it's less secure. Adjust for production.
  })
);


// Middleware to handle JSON requests and responses
app.use(express.json());

// Define the root route to return a welcome message
app.get("/", (req, res) => {
  res.send("Welcome to the API!");     // if -  http://localhost:3000
});

// Define the greet route to return a greeting message
app.get("/api/greet", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.json({ error: "Name is required." });    // if -  http://localhost:3000/api/greet
  }

  res.json({ message: `Hello, ${name} ! Welcome to Younglabs.` });    // if -  http://localhost:3000/api/greet?name=YourName
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





// //   Enable CORS with explicit origin setting

// app.use(cors({
//     origin: 'http://127.0.0.1:5500',  // Allow requests from this frontend origin
//     methods: ['GET', 'POST'],         // Allow these HTTP methods
//   }));
  
