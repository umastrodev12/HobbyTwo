import { Router } from "express";
import { METHODS } from "node:http";

const router = Router();

router.get("/chat");

export default router;