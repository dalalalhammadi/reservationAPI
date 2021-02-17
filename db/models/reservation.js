module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define("Reservation", {
    // date: {
    //   type: DataTypes.STRING,
    //   //   allowNull: false,
    // },
    time: {
      type: DataTypes.STRING,
      //   allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    // kidsNumber: {
    //   type: DataTypes.INTEGER,
    //   // allowNull: false,
    // },
    day: {
      type: DataTypes.DATEONLY,
      // allowNull: false,
    },
  });
  return Reservation;
};
