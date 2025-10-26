import React from 'react'
import MovieCard from './MovieCard';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './Watchlist.css'
const Watchlist = () => {
  const { watchlist,MoviesDispatch  } = useContext(GlobalContext);
  return (
    <div className='watch-list'>
      <div className="container">
        <div className="main-heading">
          <h1> My Watchlist</h1>
          <span className='movies-count'>
            {watchlist?.length}
            {watchlist?.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watchlist?.length > 0 ? (<div className='movie-grid'>
          {watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} type="watchlist"/>
          ))}
        </div>): (<h2 className='no-movies'>No Movies in Your List</h2>)}
      </div>
    </div>
  )
}

export default Watchlist