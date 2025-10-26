import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";
import "./ResultCard.css";

const ResultCard = ({ movie }) => {
  const { watchlist, watched, MoviesDispatch } = useContext(GlobalContext);

  const storedMovie = watchlist.find((o) => o.imdbID === movie.imdbID);
  const storedMovieWatched = watched.find((o) => o.imdbID === movie.imdbID);

  const WatchlistDisabled = storedMovie || storedMovieWatched ? true : false;
  const WatchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "--"}
        </div>

        <div className="controls">
          <button
            onClick={() => {
              console.log("Dispatch Add to Watchlist:", movie);
              MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie,
              });
            }}
            className="btn"
            disabled={WatchlistDisabled}>
            Add to Watchlist
          </button>

          <button
            onClick={() => {
              console.log("Dispatch Add to Watched:", movie);
              MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              });
            }}
            className="btn"
            disabled={WatchedDisabled}>
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;