const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./models/index");

const app = express();

const corsConfig = {
  origin: ["http://localhost:5173"],
};
const PORT = process.env.PORT || 8080;

app.use(cors(corsConfig));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to task manager application!" });
});

require("./routes/task.routes")(app);

// Use force: true if want to drop existing tables and re-sync db
// db.sequelize.sync({ force: false }).then(() => {
//   console.log("Drop and re-sync db...");
// });
app.all("*", (req, res, next) => {
  next(new Error("Not found!"));
})

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: err.message || "Something went wrong, try again later."
  })
})

app.listen(PORT, async () => {
  await db.sequelize.sync();
  console.log("Connected to database")
  console.log(`Listening on port ${PORT}`);
});
