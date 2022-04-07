const express = require("express");
const app = express();
const cors = require("cors");

const userRouter = require("./routes/user.routes");
const menuRouter = require("./routes/menu.routes");
const mongoose = require("mongoose");
const orderRouter = require("./routes/orders.routes");
const dbConfig = require("./config/db.config");
const bodyParser = require("body-parser");
const paymentsRouter = require("./routes/payments.routes");
const couponsRouter = require("./routes/coupon.routes");
const wishlistRouter = require("./routes/wishlist.routes");
const cartRouter = require("./routes/cart.routes");
const feedBackRouter = require("./routes/feedback.routes");

const notificationRouter = require("./routes/notification.routes");
const corsOpts = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
  exposedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(userRouter);
app.use(menuRouter);
app.use(orderRouter);
app.use(paymentsRouter);
app.use(couponsRouter);
app.use(wishlistRouter);
app.use(cartRouter);
app.use(feedBackRouter);
app.use(notificationRouter);

console.log(
  `mongodb+srv://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.CLUSTER}.${dbConfig.HOST}/${dbConfig.DB}`
);

mongoose
  .connect(
    `mongodb+srv://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.CLUSTER}.${dbConfig.HOST}/${dbConfig.DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Pavan Abburi HomePage" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
