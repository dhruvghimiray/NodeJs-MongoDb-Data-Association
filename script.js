const express = require("express");
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");
const user = require("./models/user");

app.get("/create", async (req, res) => {
  const user = await userModel.create({
    username: "tinshuk",
    email: "tinshuk@tinshook.com",
  });

  res.send(user);
});

app.get("/post/create", async (req, res) => {
  const post = await postModel.create({
    postData: "Hello everyone",
    user: "6630aa214c09822cfb9b7332",
  });

  const user = await userModel.findOne({ _id: "6630aa214c09822cfb9b7332" });

  user.posts.push(post._id);
  await user.save()

  res.send({
    post,
    user,
  });
});

app.listen(3000);
