// Initiate the server
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';
import cors from 'cors';
import { app, server } from "./lib/socket.js";
import path from 'path';

dotenv.config();

app.use(express.json());
app.use(cookieParser());

// Enable CORS for any device (any origin)
app.use(cors({
  // origin: "http://localhost:5173", // Allow requests from any origin/device for localhost
  origin: "https://chat-app-frontend-beta-beryl.vercel.app/", // for production url
  credentials: true ,
  methods: ["GET", "POST", "DELETE", "PUT"]
}));

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV === "production") {
  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

server.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
  connectDB();
});