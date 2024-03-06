import express from "express";

import cors from "cors";
import bookReviewRouter from "./routes/bookReview";

import * as functions from "firebase-functions";

const app = express();

app.use(cors());
app.use(express.json());

// const port = 3000;

app.use("/reviews", bookReviewRouter);

// old way
// app.listen(port, () => {
//   console.log(`Listing on http://localhost:${port}`);
// });

export const api = functions.https.onRequest(app);
