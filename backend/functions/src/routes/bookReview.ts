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

routes.get("/", (req, res) => {
  if (req.query.rating) {
    // filter
    const rating = parseInt(req.query.rating as string);

    const filteredReviews = reviews.filter((review) => {
      return review.rating === rating;
    });

    res.json(filteredReviews);
  } else if (req.query.gte) {
    const gte = parseInt(req.query.gte as string);

    const filteredReviews = reviews.filter((review) => {
      return review.rating >= gte;
    });

    res.json(filteredReviews);
  } else {
    res.json(reviews);
  }
});

routes.get("/:isbn", (req, res) => {
  const isbn = req.params.isbn;

  const review = reviews.find((review) => {
    review.book.isbn === isbn;
  });

  res.json(review);
});

routes.post("/", (req, res) => {
  const review = req.body as BookReview;

  reviews.push(review);

  res.status(201).json(reviews);
});

export default routes;
