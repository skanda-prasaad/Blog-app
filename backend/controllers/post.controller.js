import Post from "../models/post.mdel.js"

export const getPosts = async function(req, res) {
    const posts = await Post.find();
    res.status(200).send(posts);
}

export const getPost = async function(req, res) {
    const post = await Post.findOne({slug : req.params.slug});
    res.status(200).send(post);
}

export const createPost = async function(req, res) {
    const newPost = new Post(req.body);
    const post = newPost.save();
    res.status(200).send("Post is succesfully created");
}

export const deletePost = async function(req, res) {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).send("Post is succesfully deleted");
}