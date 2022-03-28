<<<<<<< HEAD
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./Routes/user.routes");
const menuRouter = require("./Routes/menu.routes");
const orderRouter = require("./Routes/orders.routes");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
=======
const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require("body-parser");
const userRouter = require("./Routes/user.routes");
const menuRouter = require("./Routes/menu.routes");
const paymentsRouter = require("./Routes/payments.routes")
const couponsRouter = require("./routes/coupon.routes")
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config')
const wishlistRouter = require("./Routes/wishlist.routes");
>>>>>>> c5def2d144b64ee062e8e3e4295cf461289101b9

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(userRouter);
app.use(menuRouter);
<<<<<<< HEAD
app.use(orderRouter);
=======
app.use(paymentsRouter)
app.use(couponsRouter)
console.log(`mongodb+srv://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.CLUSTER}.${dbConfig.HOST}/${dbConfig.DB}`)
app.use(wishlistRouter);
>>>>>>> c5def2d144b64ee062e8e3e4295cf461289101b9

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
