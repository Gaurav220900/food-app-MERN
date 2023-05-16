const express = require("express");
const app = express();
const mongoose = require("mongoose");
const foodRoute = require("./routes/food");
const cors = require("cors");

mongoose
  .connect("mpongoose://localhost:27017/food-app")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors);
app.use(foodRoute);

app.listen(4000, () => {
  console.log("listening at port 4000");
});
