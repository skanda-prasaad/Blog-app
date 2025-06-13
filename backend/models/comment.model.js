import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    post: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("comment", commentSchema);
