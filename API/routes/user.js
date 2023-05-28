const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router();
const user = require("../models/user");

Router.post("/", (req, res) => {
  const User = new user({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
  });
  User.save();
  res.send(User);
  console.log(req.body);
});

Router.get("/:id", (req, res) => {
  console.log(req.params.id);
  user.findById(req.params.id).then((result) => {
    res.status(200).json({
      user: result,
    });
  });
});

Router.delete("/:id", (req, res) => {
  user.findByIdAndRemove({ _id: req.params.id }).then((result) => {
    res.status(200).json({
      message: "Deleted",
      result: result,
    });
  });
});

Router.put("/:id", (req, res) => {
  console.log(req.params.id);
  user
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          pass: req.body.pass,
        },
      }
    )
    .then((result) => {
      res.status(200).json({
        message: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = Router;
