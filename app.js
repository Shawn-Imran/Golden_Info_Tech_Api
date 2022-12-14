/**
 * NODEJS API
 * DATABASE MONGODB
 * VERSION 1.0.0
 * DEVELOP BY MD. AL MAHMUD IMRAN
 */
const express = require("express");
// const mongoose = require("mongoose");
const crossUnblocker = require("./middileware/cros-unblocker");
const path = require("path");
const dotenv = require("dotenv").config();
const schedule = require("node-schedule");

const cors = require("cors");
const errorHandler = require("./middileware/error-handler");

/** 1st
 * Router File Import
 */

const newsRoutes = require("./routes/news");
const commentsRoutes = require("./routes/comments");

/**
 * MAIN APP CONFIG
 * REPLACE BODY PARSER WITH EXPRESS PARSER
 */

const app = express();
// app.use(crossUnblocker.allowCross)
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/news", newsRoutes);
app.use("/api/comments", commentsRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
/**
 * MAIN BASE GET PATH
 */
app.get("/", (req, res) => {
  res.send(
    '<div style="width: 100%; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center"><h1 style="color: blueviolet; text-transform: uppercase">Secure NodeJS APP RUNNING...</h1><p style="color: lightcoral">Developed By Imran</p></div>'
  );
});

/**
 * Error Handler
 * 401 UnAuthorized, Access Denied
 * 406 Already Exists, Not Acceptable
 * 404 Not Found
 * 422 Input Validation Error, Unprocessable Entity
 * 500 Database Operation Error, Internal Server Error
 */
app.use(errorHandler.route);
app.use(errorHandler.next);

/**
 * NODEJS SERVER
 * PORT CONTROL
 * MongoDB Connection
 * IF PASSWORD contains @ then encode with https://meyerweb.com/eric/tools/dencoder/
 * Database Name roc-ecommerce
 * User Access authSource roc-ecommerce
 */
// mongoose
//   .connect(
//     //  `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}?authSource=${process.env.AUTH_SOURCE}`,
//     `mongodb://localhost:27017/${process.env.DB_NAME}`,
//     {
//       useNewUrlParser: true,
//       //  useFindAndModify: false,
//       useUnifiedTopology: true,
//       //  useCreateIndex: true
//     }
//   )

//   .then(() => {
//     const port = process.env.PORT || 3000;
//     app.listen(port, () => console.log(`Server is running at port:${port}`));
//     console.log("Connected to mongoDB");
//   })
//   .catch((err) => {
//     console.error("Oops! Could not connect to mongoDB Cluster0", err);
//   });


  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server is running at port:${port}`));