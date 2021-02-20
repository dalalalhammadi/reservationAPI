const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const reservationRoutes = require("./Routes/reservation");
const timeRoutes = require("./Routes/Time");
const seatRoutes = require("./Routes/Seat");
const db = require("./db/models");
const path = require("path");

//Middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/reservation", reservationRoutes);
app.use("/time", timeRoutes);
app.use("/seat", seatRoutes);
// Not found path middleware
app.use((req, res, next) => {
  console.log("path not found");
  res.status(404).json({ message: "path not found" });
});

app.use((err, req, res, next) => {
  console.log("I'm an error handling middleware", err);
  res.status(err.status ?? 500);
  res.json({ message: err.message ?? "error" });
});

const run = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
