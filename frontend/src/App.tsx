import { useContext, useEffect, useState } from "react";
import "./App.css";
import BookReviewList from "./BookReviewList";
import BookReviewForm from "./BookReviewForm";
import BookReview from "./models/bookReview";
import { getBookReviews, addBookReview } from "./services/bookReviewService";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import AuthContext from "./AuthContext";

function App() {
  const [reviews, setReviews] = useState<BookReview[]>([]);
  const { user } = useContext(AuthContext);
  console.log(user);
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
      <h1>Book Reviews</h1>

      <header>
        {
          // if you are logged in
          user ? (
            <>
              <img src={user.photoURL || ""} />
              <h2>{user.displayName}</h2> <button onClick={signOut}>Sign out</button>
            </>
          ) : (
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          )
        }
      </header>
      <h2>TODO: STYLE ME</h2>

      <BookReviewForm
        onSubmit={(book: BookReview) => {
          // then is necessary because
          // we have to wait until the api has successully added the
          // book review before we can refresh the list with the updated review.
          addBookReview(book).then(() => {
            fetchReviews();
          });
        }}
      />

      <BookReviewList reviews={reviews} />
    </>
  );
}

export default App;
