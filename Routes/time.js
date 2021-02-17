const express = require("express");
const router = express.Router();
const {
  timeList,
  fetchtime,
  timeCreate,
  timeDelete,
} = require("../controller/time");

router.param("timeId", async (req, res, next, timeId) => {
  const time = await fetchtime(timeId, next);
  if (time) {
    req.time = time;
    next();
  } else {
    const err = new Error("time Not Found");
    err.status = 404;
    next(err);
  }
});
router.get("/", timeList);

router.post("/", timeCreate);

router.delete("/:timeId", timeDelete);
module.exports = router;
