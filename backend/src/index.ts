import express from "express";

import cors from "cors";
import bookReviewRouter from "./routes/bookReview";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.use("/reviews", bookReviewRouter);

app.listen(port, () => {
  console.log(`Listing on http://localhost:${port}`);
});
