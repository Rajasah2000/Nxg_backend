const express = require("express");
const connectDb = require("./config/db");
const path = require("path");
const authRoutes = require("./config/routes/authRoutes");
const cors = require("cors");
const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

//  Middleware for passing JSON jhjkj kj kjkj
app.use(express.json());
app.use(express.static(path.join(__dirname, "buildd")));

app.use("/api", authRoutes);
app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname, "buildd", "index.html"));
});
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
  });
});
