module.exports = {
  getStatus: (req, res) => {
    res.send({
      message: "Hello world",
    });
  },

  getResult: (req, res) => {
    res.send({
      message: "Result api called",
    });
  },
};
