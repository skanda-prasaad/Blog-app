import express from "express";
import "dotenv/config";
import userRouter from "./routes/user.route.js";
import webHookRouter from "./routes/webhook.route.js";
import commentRouter from "./routes/comment.route.js";
import postRouter from "./routes/post.route.js";
import connectDB from "./lib/connectDB.js";

const app = express();
app.use("/webhooks", webHookRouter);
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status);
  res.json({
    message: "Something went Wrong",
  });
});

app.listen(3000, () => {
  connectDB();
  // console.log(process.env.test);
});
