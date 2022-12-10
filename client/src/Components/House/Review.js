import React from 'react'
import Rating from '../Rating'

const Review = ({review}) => {
  return (
    <div className='card text-bg-light mb-3 me-4'>
        <div className='card-header'>
            <h5 className='card-title'>
                {review.user.username}
            </h5>
        </div>
        <div className='card-body'>
            <h5 className='card-title'>
                {review.title}
            </h5>
        <p className='card-text'>{review.description}</p>
        <div className='rating-con'>
            <Rating score={review.score}/>
        </div>
        </div>
    </div>
  )
}

export default Review