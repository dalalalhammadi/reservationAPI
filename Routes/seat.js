const express = require("express");
const router = express.Router();
const {
  seatList,
  fetchseat,
  seatCreate,
  seatDelete,
} = require("../controller/seat");

router.param("seatId", async (req, res, next, seatId) => {
  const seat = await fetchseat(seatId, next);
  if (seat) {
    req.seat = seat;
    next();
  } else {
    const err = new Error("seat Not Found");
    err.status = 404;
    next(err);
  }
});
router.get("/", seatList);

router.post("/", seatCreate);

router.delete("/:seatId", seatDelete);

router.get("/", seatList);
module.exports = router;
