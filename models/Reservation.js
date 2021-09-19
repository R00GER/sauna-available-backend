const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  event_id: { type: String },
  start: { type: Date },
  end: { type: Date },
  title: { type: String },
  apartment: { type: String },
});

module.exports = mongoose.model("Reservation", reservationSchema);
