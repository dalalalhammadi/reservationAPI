module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define("Time", {
    timeRange: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  });
  return Time;
};
