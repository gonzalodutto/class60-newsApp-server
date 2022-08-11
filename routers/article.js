const Router = require("express").Router;
const Article = require("../models").article;
const Review = require("../models").review;

const router = new Router();

//get all articles
//http :4000/articles
router.get("/", async (request, response, next) => {
  try {
    const articles = await Article.findAll();
    response.send(articles);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get one article by :id with params
//http :4000/articles/3
router.get("/:id", async (req, res, next) => {
  try {
    // 1. req.params.id;
    const articleId = req.params.id;
    // 2. findByPk => id
    const theArticle = await Article.findByPk(articleId, { include: Review });
    res.send(theArticle);
  } catch (e) {
    next(e);
  }
});

// http POST :4000/articles/signup firstName="Gonzalo" lastName="Dutto" gender=Male dateOfBirth=26-10-1985 email=g@g.com phoneNumber=13546795126
router.post("/signup", async (req, res, next) => {
  try {
    const { firstName, lastName, gender, dateOfBirth, email, phoneNumber } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !dateOfBirth ||
      !email ||
      !phoneNumber
    ) {
      res.status(400).send("Missing some parameters or password invalid.");
      res
        .status(400)
        .send({ message: "Missing some parameters or password invalid." });
    } else {
      const newArticle = await Article.create({
        firstName,
        lastName,
        gender,
        dateOfBirth,
        email,
        phoneNumber,
      });
      res.json(newArticle);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;

// Adding-new-review-table

// firstName: DataTypes.STRING,
//       lastName: DataTypes.STRING,
//       gender: DataTypes.STRING,
//       dateOfBirth: DataTypes.STRING,
//       email: { type: DataTypes.STRING, allowNull: false, unique: true },
//       phoneNumber: DataTypes.STRING,
