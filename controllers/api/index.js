// Import Required Packages
const router = require("express").Router();

// Import Required Files
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const categoryRoutes = require("./category-routes");
const commentRoutes = require("./comment-routes");

// Prefix Grouped Endpoints with Specific Paths
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/category", categoryRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
