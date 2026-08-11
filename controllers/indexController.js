const getIndex = (req, res, messages, options) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
    options: options,
  });
};

const getForm = (req, res) => {
  res.render("form", {title: "Mini Message Board"});
}

export { getIndex, getForm };
