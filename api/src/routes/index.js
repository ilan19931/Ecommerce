const authRoutes = require("./auth/auth.routes");
const cartRoutes = require("./Cart/cart.routes");
const productRoutes = require("./product/product.routes");
const profileRoutes = require("./profile/profile.routes");

const categoryRoutes = require("./category/category.routes");

const applyAllRoutes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/cart", cartRoutes);
  app.use("/api/product", productRoutes);
  app.use("/api/profile", profileRoutes);
  app.use("/api/category", categoryRoutes);
};

module.exports = applyAllRoutes;
