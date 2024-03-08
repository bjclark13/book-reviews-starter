interface Book {
  isbn: string;
  title: string;
}

interface BookReview {
  book: Book;
  rating: number;
  review: string;
}

export default BookReview;
