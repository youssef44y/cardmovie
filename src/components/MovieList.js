import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div>
{
    movies.map((el) => <MovieCard key = {el.id} movie={el}/>)
}
    </div>
  )
}

export default MovieList