import express from "express";

const routes = express.Router();
import BookReview from "../models/BookReview";

const reviews: BookReview[] = [
  {
    book: {
      isbn: "1234",
      title: "Great Expectations",
    },
    rating: 5,
    review: "Great book!",
  },
  {
    book: {
      isbn: "5678",
      title: "The Catcher in the Rye",
    },
    rating: 4,
    review: "Good book!",
  },
  {
    book: {
      isbn: "91011",
      title: "The Great Gatsby",
    },
    rating: 3,
    review: "Ok book!",
  },
];

// TODO - Add a route to get all book reviews. You should be able to filter by rating
routes.get("/", (req, res) => {
  // TODO - Add code to get all book reviews
  const rating = req.query.rating;

  if (rating) {
    const filteredReviews = reviews.filter(
      (review) => review.rating === parseInt(rating as string)
    );
    res.json(filteredReviews);
  } else {
    res.json(reviews);
  }
});

// TODO - Add a route to get a book review by ISBN
routes.get("/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const review = reviews.find((review) => review.book.isbn === isbn);

  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

// TODO - Add a route to add a book review
routes.post("/", (req, res) => {
  const newReview: BookReview = req.body;
  reviews.push(newReview);
  res.json(newReview);
});

export default routes;
