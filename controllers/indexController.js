import { getAllMessages, getOneMessage, addOneMessage } from "../db/queries.js";
import { body, matchedData, validationResult } from "express-validator";

const alphaErr = "must only contain letters";
const lengthErr = "must be between 1 and 10 characters";
const validateMessage = [
  body("nameInput")
    .trim()
    .isAlpha()
    .withMessage(`Name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Name ${lengthErr}`),
  body("messageInput")
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage("Message must be between 1 and 200 characters"),
];

async function getIndex(req, res) {
  let theMessages = await getAllMessages();
  res.render("index", {
    title: "Mini Message Board",
    messages: theMessages,
  });
}

const getForm = (req, res) => {
  res.render("form", { title: "Mini Message Board" });
};

async function messageInfo(req, res) {
  const { messageNumber } = req.params;
  let theMessage = await getOneMessage(messageNumber);
  console.log(theMessage);
  res.render("open", {
    messageNumber: messageNumber,
    title: "Mini Message Board",
    message: theMessage[0],
  });
}

const messagePost = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        title: "Mini message board",
        errors: errors.array(),
      });
    }
    let messageUser = req.body.nameInput;
    let messageText = req.body.messageInput;
    await addOneMessage(messageText, messageUser);
    res.redirect("/");
  },
];

export { getIndex, getForm, messageInfo, messagePost };
