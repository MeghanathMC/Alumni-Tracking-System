const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/route");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGOOSE_URL);

app.use("/api", jobRoutes);
app.use("/alumnitracking", routes);
app.listen(process.env.PORT, () => {
  console.log(`Server established at ${process.env.PORT}`);
});
