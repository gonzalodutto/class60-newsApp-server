const Router = require("express").Router;
const Comment = require("../models").comment;

const router = new Router();

//get all comments
//http :4000/comments
router.get("/", async (request, response, next) => {
  try {
    const comments = await Comment.findAll();
    response.send(comments);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get one comment by :id with params
//http :4000/comments/3
router.get("/:id", async (req, res, next) => {
  try {
    // 1. req.params.id;
    const commentId = req.params.id;
    // 2. findByPk => id
    const theComment = await Comment.findByPk(commentId);
    res.send(theComment);
  } catch (e) {
    next(e);
  }
});

// Create new comment
// http POST :4000/comments text="bla" commenterName=Gunnar productId=5
router.post("/", async (req, res, next) => {
  try {
    const text = req.body.text;
    if (!text || text === " ") {
      res.status(400).send("Must provide an text address");
    } else {
      const comment = await Comment.create(req.body);
      res.json(comment);
    }
  } catch (e) {
    next(e);
  }
});

//delete comment
//http DELETE :4000/comments/5
router.delete("/:id", async (req, res, next) => {
  try {
    //1.get the id from the params
    const { id } = req.params;
    //2. find what you want to delete
    const commentToDelete = await Comment.findByPk(id);
    //3. delete
    await commentToDelete.destroy();
    //4. send a response
    res.send("Comment teminated");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;

// Adding-new-comment-table
