const app = require("./app");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

app.listen(3033, () => {
  console.log("We are listening you on port : 3033 !!");
});
