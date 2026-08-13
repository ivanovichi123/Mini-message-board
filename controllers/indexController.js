const getIndex = (req, res, messages, options) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
    options: options,
  });
};

const getForm = (req, res) => {
  res.render("form", { title: "Mini Message Board" });
};

const messageInfo = (req, res, messageNumber, messages, options) => {
  res.render("open", {
    messageNumber: messageNumber,
    title: "Mini Message Board",
    messages: messages,
    options: options,
  });
};

export { getIndex, getForm, messageInfo };
