import React from 'react'

const Comments = ({username, date, comment}) => {
  return (
    <>
    <h5 className='username'>{username}</h5> <p className='date'>{date}</p>
    <h6 className='comment'>{comment}</h6>
    </>
  )
}

export default Comments