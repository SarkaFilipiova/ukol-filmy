import React from 'react';
import Movie from '../Movie';


const MovieList = ({movies}) => {
return(
    <>
        <div className="movieList">
        {movies.map(item =>
        <Movie
            key={item.id}
            poster={item.poster}
            title={item.title}
            year={item.year}
            rating={item.rating}
            director={item.director}
            genre={item.genre}/>              
            )}
		</div>
    </>
)};


export default MovieList;