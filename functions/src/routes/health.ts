import type { Request, Response } from "express";

interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

// Health check endpoint
export function healthCheckHandler(
  _req: Request,
  res: Response<HealthResponse>,
) {
  res.json({
    status: "healthy",
    message: "Veredicto Cloud Function is running",
    timestamp: new Date().toISOString(),
  });
}
