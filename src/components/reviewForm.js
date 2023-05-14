import React, { useState } from "react";
import StarRating from "./StarRating";

//sets the state values
const NewReviewForm = (props) => {
  const [allReviews, setAllReviews] = useState(props.data.review);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [allRatings, setAllRatings] = useState([]);

  
  //handles submission of the form
  const onSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      review: review,
      rating: rating
    };
    setAllReviews([...allReviews, newReview]);
    setReview("");
    setRating(0);
  };

 //handles the star button clicks
  const onStarClick = (ratingValue) => {
    setRating(ratingValue);
    setAllRatings([...allRatings, ratingValue]);
  };

  //handles deletion of a review
  const onDelete = (reviewToDelete) => {
    const updatedReviews = allReviews.filter(
      (review) => review !== reviewToDelete
    );
    setAllReviews(updatedReviews);
  };

  
  //renders the review form and review list
  return (
    <div> {/*review form*/}
      <div className="review-header">
        <h4>Add a new review</h4>
        <div className="review-rating">
          <label>Rating:</label>
          <StarRating rating={rating} onStarClick={onStarClick} />
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <textarea
            rows="4"
            cols="50"
            type="text"
            placeholder="Enter Review Here"
            onChange={(e) => setReview(e.target.value)}
            value={review}
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Add Review
        </button>
      </form>
      <ul> {/*review list*/}
        {allReviews.map((review, index) => (
          <li key={index}>
            {review.review}  {/*review component*/}
            <StarRating rating={review.rating} />
            <button className="btn btn-danger" onClick={() => onDelete(review)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewReviewForm;



