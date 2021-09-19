const bookingRouter = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const Reservation = require("../models/Reservation");

bookingRouter.get("/", async (req, res) => {
  const bookings = await Reservation.find({});

  res.send(bookings);
});

bookingRouter.post("/", async (req, res) => {
  const { body } = req;
  const booked = {
    ...body,
    // start: new Date(body.start),
    // end: new Date(body.end),
    event_id: uuidv4(),
  };

  const newReservation = await new Reservation({
    ...booked,
  });

  const savedReservation = await newReservation.save();

  //   const allReservations = await Reservation.find({});

  //   console.log(newReservation);
  res.send(savedReservation);
});

module.exports = bookingRouter;
