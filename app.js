import express from "express";
import indexRouter from "./routes/indexRouter.js";
import path from "node:path";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Hi"); //Erase this later
});

app.use(express.urlencoded({extended: true}));

const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use((req, res) => {
  res.status(404).send("Oh no, the page was not found");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});
