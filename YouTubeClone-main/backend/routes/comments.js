import express from "express";
import { getComments, addComment, deleteComment } from "../controllers/comment.js";
import protect from "../middlewares/auth.js";

const router = express.Router();

router.post("/", protect, addComment);
router.delete("/:commentId", protect, deleteComment);
router.get("/:videoId", getComments);

export default router;
