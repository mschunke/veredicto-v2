import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware for development (optional)
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// Type definitions for request/response bodies
interface HelloRequestBody {
  name: string;
}

interface SuccessResponse {
  success: true;
  name: string;
}

interface ErrorResponse {
  success: false;
  error: string;
}

interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

// Health check endpoint
app.get("/", (_req: Request, res: Response<HealthResponse>) => {
  res.json({
    status: "healthy",
    message: "Veredicto Cloud Function is running",
    timestamp: new Date().toISOString(),
  });
});

// Hello world function endpoint
app.post(
  "/hello",
  (
    req: Request<
      Record<string, never>,
      SuccessResponse | ErrorResponse,
      HelloRequestBody
    >,
    res: Response<SuccessResponse | ErrorResponse>,
  ) => {
    try {
      const { name } = req.body;

      // Validate that name is provided
      if (!name) {
        return res.status(400).json({
          success: false,
          error: "Name is required in request body",
        });
      }

      // Validate that name is a string
      if (typeof name !== "string") {
        return res.status(400).json({
          success: false,
          error: "Name must be a string",
        });
      }

      // Return the expected response format
      res.json({
        success: true,
        name: name,
      });
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  },
);

// Handle 404 for other routes
app.use("*", (_req: Request, res: Response<ErrorResponse>) => {
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
    console.log(`Health check available at: http://localhost:${PORT}/`);
    console.log(`Hello endpoint available at: http://localhost:${PORT}/hello`);
  });
}

export { app };
