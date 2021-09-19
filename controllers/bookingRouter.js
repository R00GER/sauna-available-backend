const bookingRouter = require("express").Router();
const Reservation = require("../models/User");

bookingRouter.post("/", (res, req) => {
  console.log(req.body);
});

module.exports = bookingRouter;
