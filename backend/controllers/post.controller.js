import Post from "../models/post.mdel.js";
import User from "../models/user.model.js";

export const getPosts = async function (req, res) {
  const posts = await Post.find();
  res.status(200).send(posts);
};

export const getPost = async function (req, res) {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).send(post);
};

export const createPost = async function (req, res) {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(400).json("Not Auth");
  }
  const user = await User.findOne({ clerkUserId });
  if (!user) {
    return res.status(400).json("User not found");
  }

  const newPost = new Post({ user: user._id, ...req.body });
  const post = newPost.save();
  res.status(200).send(post);
};

export const deletePost = async function (req, res) {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(400).json("Not Auth");
  }
  const user = await User.findOne({ clerkUserId });
  const deletedPost = await Post.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletedPost) {
    return res.status(400).send("You can delete only your post");
  }
  res.status(200).send("Post is succesfully deleted");
};
