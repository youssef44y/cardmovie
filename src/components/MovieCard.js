import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
  return (
    <div>
        <img className='mg'  src={movie.img} alt=""/>
        <div>{movie.title}</div>
        <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={movie.rate}
        //   onStarClick={this.onStarClick.bind(this)}
        />
        <div>{movie.rate}</div>
        <div>{movie.description}</div>
        {/* <div>{movie.id}</div> */}
    </div>
  )
}

export default MovieCard