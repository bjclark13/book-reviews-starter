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

// TODO - Add a route to get a book review by ISBN

// TODO - Add a route to add a book review


export default routes;
