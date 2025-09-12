import { Router } from "express";
import { healthCheckHandler } from "./health";

export const router = Router();

router.get("/health", healthCheckHandler);
