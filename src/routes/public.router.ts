import express from "express";
import { getLands } from "../controllers/admin.controller";
const router = express.Router();

router.get("/lands", getLands);

export default router;
