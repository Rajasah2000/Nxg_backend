const express = require("express");
const connectDb = require("./config/db");
const authRoutes = require("./config/routes/authRoutes");
const cors = require("cors");
const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

//  Middleware for passing JSON jhjkj kj kjkj
app.use(express.json());

app.use("/api", authRoutes);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
  });
});
