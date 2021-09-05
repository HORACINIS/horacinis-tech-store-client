import React from 'react';
import Rating from '@material-ui/lab/Rating';

const ReviewsComponent = ({ rating }) => {
  return (
    <div>
      <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
    </div>
  );
}

export default ReviewsComponent;