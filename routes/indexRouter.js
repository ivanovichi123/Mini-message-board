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

const indexRouter = Router();

indexRouter.get("/", getIndex);

indexRouter.get("/new", getIndex);

export default indexRouter;