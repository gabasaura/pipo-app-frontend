import React from 'react'
import '../styles/comments.css'
import { FaStar } from 'react-icons/fa';
const Comments = ({username, date, comment, rating}) => {
  return (
    <>
    <div className='square'>
    <h5 className='username ps-1 pt-1'>{username} {rating?.stars}  </h5><p className='date ps-1'>{date}</p>
    <div className='comentario mx-2'>
    <h6 className='comment ps-2 py-2 '>{comment}</h6>
    </div>
    </div>
    </>
  )
}

export default Comments