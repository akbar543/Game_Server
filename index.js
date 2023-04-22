require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose')
const app = express();
const cors = require("cors");
// const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const teamRoutes = require("./routes/team");
const tourRouter = require("./routes/tournaments");
const url = 'mongodb://0.0.0.0:27017/Anim'

// database connection
// connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/tour", tourRouter);


mongoose.set("strictQuery", false);

const port = process.env.PORT || 8080;
mongoose.connect(
    url
)
.then(() => app.listen(port, console.log(`Listening on port ${port}...`)))
.catch((err) => console.log(err))



