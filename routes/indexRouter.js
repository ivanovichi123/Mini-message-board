import { Router } from "express";
import getIndex from "../controllers/indexController.js";

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

let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
};

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    getIndex(req, res, messages, options);
});

indexRouter.get("/new", (req, res) => {
    getIndex(req, res, messages, options);
});

export default indexRouter;