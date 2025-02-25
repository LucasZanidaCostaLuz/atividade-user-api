const express = require("express");
const routerPost = express.Router();
const postController = require("../controllers/postControllers");
const router = require("./userRoutes");
const { updateUser } = require("../controllers/userControllers");

routerPost.get("/post", postController.getAllPost);
routerPost.get("/post/:id", postController.getPostById);
routerPost.post("/post", postController.addPost);
routerPost.delete("/post/:id", postController.deletePost);
routerPost.put("/post/:id", postController.updateUser);


module.exports = routerPost;