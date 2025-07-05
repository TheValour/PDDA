import express from 'express';
import { pdaRoutes } from './route/routes.js';
import cors from 'cors'

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      ...process.env.FRONTEND_URL || "http://localhost:5173",
      "http://localhost:5174"
    ], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    optionSuccessStatus: 200
  })
);

app.get('/', (req, res) => {
  res.json({ 
    message: 'PDA Backend API is running!',
    version: '1.0.0',
    endpoints: [
      'GET /api/ports',
      'GET /api/ports/:id',
      'GET /api/vessel-types',
      'GET /api/cargo-types', 
      'GET /api/berth-types'
    ]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", pdaRoutes);

