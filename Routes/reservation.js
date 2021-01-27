const express = require("express");
const router = express.Router();
const {
  reservationList,
  fetchreservation,
  reservationCreate,
} = require("../controller/reservation");

router.param("reservationId", async (req, res, next, reservationId) => {
  const reservations = await fetchreservation(reservationId, next);
  if (reservations) {
    req.reservations = reservations;
    next();
  } else {
    const err = new Error("reservation Not Found");
    err.status = 404;
    next(err);
  }
});
router.get("/", reservationList);

router.post("/", reservationCreate);

module.exports = router;
