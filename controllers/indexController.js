const getIndex = (req, res, messages, options) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
    options: options,
  });
};

export default getIndex;
