import React from 'react'
import '../styles/comments.css'
import { FaStar } from 'react-icons/fa';
const Comments = ({ username, date, comment, rating }) => {
  return (
    <>
    <tr className='border border-1 border-black p-2'>
      <div className='square'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex'>
            <h5 className='username ps-1 pt-1'>{username}</h5> {rating?.stars} <div className=''><FaStar className=''/></div>
          </div>
          <div className=''><p className='date ps-1'>{date}</p></div>
        </div>
        <div className='comentario bg-info-subtle'>
          <span className='comment '>{comment}</span>
        </div>
      </div>
      </tr>
    </>
  )
}

export default Comments