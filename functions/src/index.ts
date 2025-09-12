import cors from "cors";
import express, { type Request, type Response } from "express";
import { router } from "./routes";
import type { ErrorRes } from "./types";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.use(router);

// Handle 404 for other routes
app.use("*", (_req: Request, res: Response<ErrorRes>) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
  });
});

// Start the server
const PORT: number = parseInt(process.env.PORT || "8080", 10);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Veredicto Cloud Function listening on port ${PORT}`);
  });
}

export { app };
