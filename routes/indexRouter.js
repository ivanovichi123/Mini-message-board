import { Router } from "express";
import {
  getIndex,
  getForm,
  messageInfo,
  messagePost,
} from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);

indexRouter.get("/new", getForm);

indexRouter.get("/open/:messageNumber", messageInfo);

indexRouter.post("/new", messagePost);

export default indexRouter;
