const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// Define routes for review-related actions
router.get("/:bookId", reviewController.getBookReviews);
router.post("/:bookId", reviewController.addReview);
router.delete("/:reviewId", reviewController.deleteReview);

module.exports = router;
