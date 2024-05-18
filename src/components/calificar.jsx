import React, { useContext, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Context } from '../store/AppContext';

const Calificar = ( {onRatingChange}) => {
  const [rating, setRating] = useState(0);

  const handleRating = (currentRating) => {
    setRating(currentRating);
    if (onRatingChange) {
      onRatingChange(currentRating);
    }
  };
  const { store, actions } = useContext(Context)
  return (
    <div className='persona-rating ms-4 mt-2'>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <div
              type="radio" 
              name="rating" 
              value={currentRating} 
              onClick={() => handleRating(currentRating)}
              className="star" 
            >
            {currentRating <= rating ? <FaStar 
            
            size={20}
            /> : <FaRegStar
            
            size={20}
             />}
             </div>
          </label> 
        );
      })}
    </div> 
  );
};

export default Calificar;
