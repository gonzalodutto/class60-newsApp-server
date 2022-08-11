const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const articlesRouter = require("./routers/article");
const categoriesRouter = require("./routers/category");
const commentsRouter = require("./routers/comment");
// const authRouter = require("./routers/auth");
// const doctorsRouter = require("./routers/doctor");

app.use(express.json());
app.use(cors());

// Routers
app.use("/articles", articlesRouter);
app.use("/categories", categoriesRouter);
app.use("/comments", commentsRouter);
// app.use("/auth", authRouter);
// app.use("/doctors", doctorsRouter);

app.listen(PORT, () =>
  console.log(`NewsApp server started in port: ${PORT}. Hola amig@! :)`)
);
