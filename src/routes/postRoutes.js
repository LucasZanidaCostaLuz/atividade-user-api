const express = require('express');

const router = express.Router();

const postController = require("../controllers/postControllers");

router.get("/post", postController.getAllPosts);
router.get("/post/:id", postController.getById);
router.post("/post", postController.createPost);
router.put("/post/:id", postController.editPost);
router.delete("/post/:id", postController.deletePost);

module.exports = router;