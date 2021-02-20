const { Seat, Info } = require("../db/models");

exports.seatCreate = async (req, res, next) => {
  try {
    req.body.seatId = req.params.seatId;
    const newSeat = await Seat.create(req.body);
    res.status(201).json(newSeat);
  } catch (error) {
    next(error);
  }
};

exports.seatList = async (req, res, next) => {
  try {
    const seats = await Seat.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(seats);
  } catch (error) {
    next(error);
  }
};

exports.fetchseat = async (seatId, next) => {
  try {
    const seats = await Seat.findByPk(seatId);
    return seats;
  } catch (error) {
    next(error);
  }
};

exports.seatDelete = async (req, res, next) => {
  try {
    await req.seat.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
