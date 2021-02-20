module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define("Seat", {
    name: {
      type: DataTypes.STRING,
    },
    // number: {
    //   type: DataTypes.INTEGER,
    // },
    // image: {
    //   type: DataTypes.STRING,
    //   // allowNull: false,
    // },
    Available: {
      type: DataTypes.BOOLEAN,
    },
  });
  return Seat;
};
