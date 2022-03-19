import React, { useEffect, useState } from 'react'
import { getMovies } from '../api/getMovies';
import MovieCard from './MovieCard';
import Movies from './Movies';
import { movie_card } from './movies.model';




function Recomendaciones(params:rProps){

  if(!params.movies){

    return <p>CARGANDO..</p>;
}else if(params.movies.length === 0){
    return <> No hay elementos a mostrar...</>
}else{
    return(
        <div className="a">
            {params.movies.map(
                (movies) => (
                    <MovieCard movie={movies} key={movies.id}/>
                )
            )}
  
        </div>

    );
}
 
}

export default Recomendaciones;

interface rProps{
  movies?: movie_card[];
}