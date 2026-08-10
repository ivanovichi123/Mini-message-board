import { Router } from "express";

const messages = [
    {
        text: "Hi there!",
        user: "Armando",
        added: new Date()
    },
    {
        text: "Hello world!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "Awesome server!",
        user: "The creator",
        added: new Date()
    }
];

const indexRouter = Router();

indexRouter.get(["/"], (req, res) => {
    res.send("/ index router get");
});

indexRouter.get("/new", (req, res) => {
    res.send("/new new message index router get");
});

export default indexRouter;