const express = require("express");
const router = express.Router();
const foodModel = require("../src/models/food");

router.post("/food", async (req, res) => {
  let response = {
    status: false,
  };
  try {
    let body = req.body;
    let foodObj = new foodModel(body);
    foodObj
      .save()
      .then((doc) => {
        response.status = true;
        response.message = "Food added successfully";
        res.send(response);
      })
      .catch((err) => {
        response.message = "Food not added";
        response.error = err;
        res.send(response);
      });
  } catch (err) {
    response.message = "Something went wrong";
    response.error = err;
    res.send(err);
  }
});

router.get("/foods", async (req, res) => {
  let response = {
    status: false,
  };
  try {
    const foodData = await foodModel.find({});
    response.status = true;
    res.status(200).json(foodData);
  } catch (err) {
    response.message = "Something went wrong";
    res.status(500).json(err);
  }
});

module.exports = router;
