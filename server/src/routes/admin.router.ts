import express from "express";
import {
  addAssetsToLand,
  addLand,
  getLands,
  uploadAssets,
} from "../controllers/admin.controller";
import uploadMiddleware from "../utils/uploader";

const router = express.Router();

router.post("/upload/:landid/:type", uploadMiddleware, uploadAssets);

router.get("/lands", getLands);
router.post("/land/add", addLand);
router.post("/land/:landid/asset/add", addAssetsToLand);

// router.post("/land/:landid", loginAdmin);

export default router;
