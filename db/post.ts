import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    fullName: String,
    post: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Posts || mongoose.model("Posts", PostSchema);
