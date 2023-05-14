import React, {useState} from 'react';
import  './Rating.css';

const StarRating = ({ rating, onStarClick }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">  {/*stars component*/}
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => onStarClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};


export default StarRating;