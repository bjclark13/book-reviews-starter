function BookReviewList({ reviews }: { reviews: BookReview[] }) {
  return (
    <div>
      <h1>Book Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.book.isbn}>
            <h2>{review.book.title}</h2>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookReviewList;
