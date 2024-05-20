import React from 'react'
import '../styles/comments.css'
import { FaStar } from 'react-icons/fa';
const Comments = ({ id, username, date, comment, rating }) => {
  return (
    <>
      <tr key={id}>
        <td className='border border-1 border-black p-0'>
          <div className='square'>
            <div className='d-flex justify-content-between px-2 pt-2'>
              <div className='d-flex'>
                <h5 className='username pe-1'>{username}</h5>
                {rating?.stars}
                <div><FaStar className='' /></div>
              </div>
              <div><p className='date'>{date}</p></div>
            </div>
            <div className='comentario bg-info-subtle p-2'>
              <span className='comment'>{comment}</span>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default Comments