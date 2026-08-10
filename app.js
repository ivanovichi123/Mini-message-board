import express from "express";
import indexRouter from "./routes/indexRouter.js";

const app = express();

const PORT = 3000;
app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }
    console.log("Hi");     //Erase this later
});

app.use("/", indexRouter);