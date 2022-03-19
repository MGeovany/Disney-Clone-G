import React from 'react'
import { movie_card } from './movies.model';

export default function MovieCard(props: movieCProps) {
  

    const getLinkPelicula = () => `${props.movie.urlPublico}`

    return (
        <div className='cardo'>
            <a href={getLinkPelicula()}>
                <img src={props.movie.poster}></img>
            </a>
    
    
            <p>
                <a href={getLinkPelicula()}></a>
            </p>
        </div>
      )
    }
    

interface movieCProps{
    movie: movie_card;
}