const express = require("express");

const app = express();

app.use(express.json());
const userRoute = require("./routes/userRoute");
app.use("/api/v1/user", userRoute);

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    status: "error",
    message: "Something went very wrong !!",
  });
  next();
});
module.exports = app;
