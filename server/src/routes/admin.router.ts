import express from "express";
import { addLand, getLands } from "../controllers/admin.controller";

const router = express.Router();

router.get("/lands", getLands);
router.post("/land/add", addLand);
// router.post("/land/:landid", loginAdmin);

export default router;
