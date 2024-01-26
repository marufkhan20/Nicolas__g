const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const {
  authRoutes,
  creditCardRoutes,
  campaignRoutes,
  noticeRoutes,
  dashboardRoutes,
} = require("./routes");
const morgan = require("morgan");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: ".env",
  });
}

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);
app.use(morgan("dev"));
app.use(express.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

// set public folder
app.use(express.static("public"));

// all routes
app.use("/api/auth", authRoutes);
app.use("/api/credit-cards", creditCardRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/", (req, res) => {
  res.send("Welcome");
});
app.use("/uploads", express.static(path.join(__dirname, "/public")));
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
// );

// database connection
mongoose
  .connect(
    "mongodb+srv://326040Maruf:326040Maruf@cluster0.0wztu.mongodb.net/thebullsmedia"
  )
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log("error", err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
