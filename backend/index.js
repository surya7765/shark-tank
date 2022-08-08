import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import router from "./routes/Route.js";
const __dirname = path.resolve();

// Middlewarers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',router);
// app.use("/uploads", express.static("uploads"));

// Database
mongoose.connect("mongodb://localhost:27017/job-kart", {
  useNewUrlParser: true,
});

mongoose.connection
  .on("connected", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });

const port = 4000;
app.listen(port, () => {
  console.log("App is listening on port " + port);
});
