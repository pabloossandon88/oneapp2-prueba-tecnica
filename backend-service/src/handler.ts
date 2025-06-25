import express from "express";
import serverless from "serverless-http";

const app = express();
app.use(express.json());

// Root path handler
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

// Boilerplate path handler - modified to handle both with and without the base path
app.get("/endpoint1", (req, res) => {
  return res.status(200).json({
    message: "Hello from Endpoint 1!",
  });
});

// Boilerplate path handler - modified to handle both with and without the base path
app.get("/endpoint2", (req, res) => {
  return res.status(200).json({
    message: "Hello from Endpoint 2!",
  });
});

// Use this for unhandled routes
app.use((req, res) => {
  console.log(`No route found for: ${req.method} ${req.path}`);
  return res.status(404).json({
    error: "Not Found",
  });
});

// Configure serverless-http to handle base path mapping
export const handler = serverless(app, {
  basePath: process.env.BASE_PATH || "",
  requestId: "true"
});