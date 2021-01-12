const mongoose = require("mongoose");
const Question = require("../models/questions");
const mockQuestions = require("../../mock/questions.json");

exports.getAll = (req, res, next) => {
  //   Question.find()
  //     .select("_id category question correct_answer incorrect_answers")
  //     .exec()
  // .then((docs) => {
  //   const count = {
  // totalQuestions: docs.length,
  //   };
  res.status(200).json({
    totalQuestion: mockQuestions.length,
    results: mockQuestions,
    message: "Get all question success",
  });
  // })
  // .catch((err) => {
  //   res.status(500).json({
  //     error: err,
  //   });
  // });
};

// exports.postQuestion = (req, res, next) => {
//   const question = new Question({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     description: req.body.description,
//     productImage: req.file.path,
//   });

//   product
//     .save()
//     .then((result) => {
//       res.status(200).json({
//         createdProduct: result,
//         message: "Add product success",
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//       });
//     });
// };

// exports.getProductById = (req, res, next) => {
//   const id = req.params.productId;
//   Product.findById(id)
//     .exec()
//     .then((doc) => {
//       if (doc) {
//         res.status(200).json({
//           product: doc,
//           message: "Get product success",
//         });
//       } else {
//         res.status(404).json({
//           message: "Not found product, wrong ID",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//       });
//     });
// };

// exports.updateProduct = (req, res, next) => {
//   const id = req.params.productId;
//   const updateOps = {};
//   for (const ops of req.body) {
//     updateOps[ops.propName] = ops.value;
//   }
//   Product.update(
//     { _id: id },
//     {
//       $set: { updateOps },
//     }
//   )
//     .exec()
//     .then((result) => {
//       res.status(200).json({
//         message: "Product updated",
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//       });
//     });
// };

// exports.deleteProduct = (req, res, next) => {
//   const id = req.params.productId;
//   Product.remove({ _id: id })
//     .exec()
//     .then((result) => {
//       res.status(200).json({
//         book: result,
//         message: "Product deleted",
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//       });
//     });
// };
