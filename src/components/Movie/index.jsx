import React from 'react';


const Movie = ({title, poster, year, rating, director, genre, cast}) => {

	return (
		<div className="movies">
			<img className='image' src={`assets/${poster}`} alt="{title}" />
			<div className="movies-box">
				<h3>Název filmu: {title}</h3>
				<p>Rok vydání: {year}</p>
				<p>Hodnocení: {rating}</p>
				<p>Režisér: {director}</p>
				<p>Žánr: {genre}</p>
			</div>
		</div>
	);
}

export default Movie;