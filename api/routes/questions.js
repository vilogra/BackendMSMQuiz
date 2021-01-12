const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questions");

router.get("/questions", questionController.getAll);
// router.get("/products/:productId", productController.getProductById);
// router.post(
//   "/products",
//   upload.single("bookImage"),
//   productController.postProduct
// );
// router.patch("/products/:productId", productController.updateProduct);
// router.delete("/products/:productId", productController.deleteBook);

module.exports = router;
