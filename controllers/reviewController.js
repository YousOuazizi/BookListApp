const Review = require("../models/review");

exports.getBookReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId }).populate(
      "user",
      "username"
    );
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
};

exports.addReview = async (req, res) => {
  try {
    const review = new Review({
      book: req.params.bookId,
      user: req.body.userId, // This would usually be extracted from JWT
      review: req.body.review,
    });

    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: "Error adding review" });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.reviewId);
    res.json({ message: "Review deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review" });
  }
};
