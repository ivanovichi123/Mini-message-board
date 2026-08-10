import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("/ index router get");
});

indexRouter.get("/index", (req, res) => {
    res.send("/index index router get");
});

export default indexRouter;