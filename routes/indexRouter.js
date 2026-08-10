import { Router } from "express";

const indexRouter = Router();

indexRouter.get(["/"], (req, res) => {
    res.send("/ index router get");
});

indexRouter.get("/new", (req, res) => {
    res.send("/new new message index router get");
});

export default indexRouter;