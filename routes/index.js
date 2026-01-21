const { Router } = require("express");
const authRoutes = require("./auth.js");
const foodRoutes = require("./foods.js");
const isSignedIn = require("../middleware/is-signed-in.js");

const router = Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.use("/auth", authRoutes);
router.use("/foods", isSignedIn, foodRoutes);

module.exports = router;
