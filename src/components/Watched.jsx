import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from './MovieCard';
import './Watched.css'
const Watched = () => {
   const {watched , MoviesDispatch } = useContext(GlobalContext);
  return (
    <div className='watched'>
      <div className="container">
         <div className="main-heading">
          <h1> My Watched</h1>
          <span className='movies-count'>
            {watched?.length}
            {watched?.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
         {watched?.length > 0 ? (<div className='movie-grid'>
          {watched.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} type="watched"/>
          ))}
        </div>): (<h2 className='no-movies'>No Movies in Your List</h2>)}
      </div>
      
    </div>
  )
}

export default Watched
