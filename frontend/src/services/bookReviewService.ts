import axios from "axios";
import BookReview from "../models/bookReview";

const API_URL = "http://localhost:3000/reviews/";

const getBookReviews = async (rating?: number): Promise<BookReview[]> => {
  const response = await axios.get(API_URL, {
    params: {
      rating,
    },
  });

  return response.data;
};

const getBookReviewByISBN = async (isbn: string): Promise<BookReview> => {
  const response = await axios.get(API_URL + isbn);

  return response.data;
};

const addBookReview = async (review: BookReview) => {
  const response = await axios.post(API_URL, review);

  return response.data;
};

export { getBookReviews, getBookReviewByISBN, addBookReview };
