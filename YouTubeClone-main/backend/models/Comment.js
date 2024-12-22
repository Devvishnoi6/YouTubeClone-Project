import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Video",
    },
    description: {
      type: String,
      required: [true, "Comment description is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment", commentSchema);
