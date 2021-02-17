module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define("Date", {
    day: {
      type: DataTypes.DATEONLY,
      // allowNull: false,
    },
  });
  return Date;
};
