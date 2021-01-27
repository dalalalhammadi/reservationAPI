const { Reservation, Info } = require("../db/models");

exports.reservationCreate = async (req, res, next) => {
  try {
    req.body.reservationId = req.params.reservationId;
    const newReservation = await Reservation.create(req.body);
    res.status(201).json(newReservation);
  } catch (error) {
    next(error);
  }
};

exports.reservationList = async (req, res, next) => {
  try {
    const reservations = await Reservation.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(reservations);
  } catch (error) {
    next(error);
  }
};

exports.fetchreservation = async (reservationId, next) => {
  try {
    const reservations = await Reservation.findByPk(reservationId);
    return reservations;
  } catch (error) {
    next(error);
  }
};
