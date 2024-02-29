import { useState } from "react";
import BookReview from "./models/bookReview";
interface Props {
  onSubmit: (bookReview: BookReview) => void;
}

function BookReviewForm({ onSubmit }: Props) {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          book: {
            isbn,
            title,
          },
          rating,
          review,
        });
        setIsbn("");
        setTitle("");
        setRating(0);
        setReview("");
      }}
    >
      <label>
        ISBN
        <input
          type="text"
          onChange={(e) => setIsbn(e.target.value)}
          value={isbn}
        />
      </label>

      <label>
        Title
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>

      <label>
        Rating
        <input
          type="number"
          onChange={(e) => setRating(parseInt(e.target.value, 10))}
          min={0}
          max={5}
          value={rating}
        />
      </label>

      <label>
        Review
        <textarea
          onChange={(e) => setReview(e.target.value)}
          value={review}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default BookReviewForm;
