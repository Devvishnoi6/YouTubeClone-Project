import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  getVideosByTags,
  getVideosBySearch,
  randomVideos,
  subscribedVideos,
  trendingVideos,
  updateVideo,
} from "../controllers/video.js";
import protect from "../middlewares/auth.js";

const router = express.Router();

router.post("/", protect, addVideo);
router.put("/:videoId", protect, updateVideo);
router.delete("/:videoId", protect, deleteVideo);
router.get("/trending", trendingVideos);
router.get("/random", randomVideos);
router.get("/tags", getVideosByTags);
router.get("/search", getVideosBySearch);
router.get("/sub", protect, subscribedVideos);
router.get("/:videoId", getVideo);
router.put("/view/:videoId", addView);

export default router;
