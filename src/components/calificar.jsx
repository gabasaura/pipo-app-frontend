import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input 
              type="radio" 
              name="rating" 
              value={currentRating} 
              onClick={() => setRating(currentRating)} 
              className="star" 
              style={{ display: 'none' }}
            />
            {currentRating <= rating ? <FaStar /> : <FaRegStar />}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
