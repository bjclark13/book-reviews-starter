import { useEffect, useState } from "react";
import "./App.css";
import BookReviewList from "./BookReviewList";
import BookReviewForm from "./BookReviewForm";
import BookReview from "./models/bookReview";
import { getBookReviews, addBookReview } from "./services/bookReviewService";

function App() {
  const [reviews, setReviews] = useState<BookReview[]>([]);

  const fetchReviews = () => {
    getBookReviews().then((reviews) => {
      setReviews(reviews);
    });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      <BookReviewForm
        onSubmit={(book: BookReview) => {
          addBookReview(book);
          fetchReviews();
        }}
      />

      <BookReviewList reviews={reviews} />
    </>
  );
}

export default App;
