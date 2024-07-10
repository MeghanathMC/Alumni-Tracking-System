// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// app.use(router);
// // app.post("/api/alumni-signup", async (req, res) => {
// //   try {
// //     const newAlumni = new Alumni(req.body);
// //     await newAlumni.save();
// //     res.status(201).send({ message: "Successfully signed up!" });
// //   } catch (error) {
// //     res.status(500).send({ error: "Failed to sign up" });
// //   }
// // });

// // app.post('/api/student-signup', async (req, res) => {
// //   try {
// //     const newStudent = new Student(req.body);
// //     await newStudent.save();
// //     res.status(201).send({ message: 'Successfully signed up!' });
// //   } catch (error) {
// //     res.status(500).send({ error: 'Failed to sign up' });
// //   }
// // });

//

const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const routes=require("./routes/route");
const session = require("express-session");
const MongoStore = require("connect-mongo");
// require("dotenv").config();

// const app = express();
const port = 5000;

const router = require("./routes/alumni.js");
// app.use(cors()); 
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/alumni-tracking");

app.use(express.json());
app.use(router);

// mongoose.connect(process.env.MONGOOSE_URL);

app.use(
  session({
    secret: "Prabhas",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 60 * 1000, // Session expires after 10 minutes
      secure: false,
      httpOnly: true,
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/sessionStorage",
      ttl: 10 * 60, // TTL (Time To Live) in seconds, equals to session maxAge
    }),
  })
);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// app.use("/alumnitracking",routes);
// app.listen(process.env.PORT,()=> {
//     console.log(`Server established at ${process.env.PORT}`)});
