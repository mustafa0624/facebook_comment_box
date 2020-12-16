const express = require("express")
const router = express.Router()
const Comment = require("../models/comment")
const commentController = require("../controllers/commentController")

router.get("/", commentController.getMessage)

router.post("/", commentController.postMessage)

router.post("/update", commentController.updateMessage)

router.get("/delete/:id", commentController.deleteMessage)


module.exports = router