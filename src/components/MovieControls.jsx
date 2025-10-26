import {React,  useContext } from 'react';
import * as actions from '../context/ActionTypes';
import { GlobalContext } from '../context/GlobalContext';

export const MovieControls = ({ movie, type }) => {
    const { MoviesDispatch } = useContext(GlobalContext);
    
    return (
        <div className='inner-card-controls'>
            {type === 'watchlist' && 
                <>
                    <button 
                        onClick={() => MoviesDispatch({
                            type: actions.ADD_MOVIE_TO_WATCHED,
                            payload: movie, 
                        })}
                        className='ctrl-btn'
                    >
                        <i className='fa-solid fa-eye' />
                    </button>
                    <button 
                        onClick={() => MoviesDispatch({
                            type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                            payload: movie.imdbID,
                        })} 
                        className='ctrl-btn'
                    >
                        <i className='fa-solid fa-x' />
                    </button>
                </>
            }
            {type === 'watched' && 
                <>
                    <button 
                        onClick={() => MoviesDispatch({
                            type: actions.MOVE_TO_WATCHLIST,
                            payload: movie,
                        })} 
                        className='ctrl-btn'
                    >
                        <i className='fa-solid fa-eye-slash' />
                    </button>
                    <button 
                        onClick={() => MoviesDispatch({
                            type: actions.REMOVE_MOVIE_FROM_WATCHED,
                            payload: movie.imdbID,
                        })} 
                        className='ctrl-btn'
                    >
                        <i className='fa-solid fa-times' />
                    </button>
                </>
            }
        </div>
    );
};

export default MovieControls
