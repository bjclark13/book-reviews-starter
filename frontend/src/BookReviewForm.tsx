import { useState, useRef } from "react";
import BookReview from "./models/bookReview";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface Props {
  onSubmit: (bookReview: BookReview) => void;
}

function BookReviewForm({ onSubmit }: Props) {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [image, setImage] = useState("");

  // access the underlying html element that react usually
  // abstracts away from us.
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          book: {
            isbn,
            title,
            imageUrl: image
          },
          rating,
          review,
        });
        setIsbn("");
        setTitle("");
        setRating(0);
        setReview("");

        if (fileRef.current?.files?.length) {
          const file = fileRef.current?.files[0]; // assuming we're only uploading one file

          // storage = the storage object that contected to firebase
          const storageRef = ref(storage, "book-covers/" + file.name);
         
          // storageRef is "where to upload"
          // file is "what to upload"
          uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then( (url) => {
              console.log(url);

              // or set to a state
              setImage(url);
              // or whatever we want
            })
          });
        }
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

      {
        image && <img src={image} alt={title + "cover"} />
      }

      <label>
        Cover Art
        <input type="file" ref={fileRef} />
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
        <textarea onChange={(e) => setReview(e.target.value)} value={review} />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default BookReviewForm;
