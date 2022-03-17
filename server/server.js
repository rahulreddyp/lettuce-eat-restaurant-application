const express = require("express");
const router = require("./routes/user");

const app = express();

const userRouter = router;

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("SERVER is running on " + `${PORT}`);
});
