import express from "express";

import { getLands } from "../controllers/public.controller";

const router = express.Router();

router.get("/lands", getLands);
// router.post("/land/:landid", loginAdmin);

export default router;
