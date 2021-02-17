const { Time, Info } = require("../db/models");

exports.timeCreate = async (req, res, next) => {
  try {
    req.body.timeId = req.params.timeId;
    const newTime = await Time.create(req.body);
    res.status(201).json(newTime);
  } catch (error) {
    next(error);
  }
};

exports.timeList = async (req, res, next) => {
  try {
    const times = await Time.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(times);
  } catch (error) {
    next(error);
  }
};

exports.fetchtime = async (timeId, next) => {
  try {
    const times = await Time.findByPk(timeId);
    return times;
  } catch (error) {
    next(error);
  }
};

exports.timeDelete = async (req, res, next) => {
  try {
    await req.time.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
