import React from 'react';


const Movie = ({title, poster, year, rating, director, genre, cast}) => {

	return (
		<div className="movies">
			<h3>Název filmu: {title}</h3>
			<img>{poster}</img>
            <p>Rok vydání: {year}</p>
            <p>Hodnocení: {rating}</p>
            <p>Režisér: {director}</p>
            <p>Žánr: {genre}</p>
            <p>Obsazení: {cast}</p>
		</div>
	);
}

export default Movie;