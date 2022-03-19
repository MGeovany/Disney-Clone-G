import React from 'react'
import '../styles/Movies.css'
import { secciones } from './movies.model';
import Recomendaciones from './Recomendaciones'

import { useState, useEffect } from 'react';



const Movies = () => {

    const url = 'https://api.disneyapi.dev/characters#';

    const [movie, setMovie] = useState<secciones>({});
    
      const fetchApi = async () => {
    
        const response = await fetch(url)
        
        const responseJSON = await response.json();
        
        setMovie(responseJSON.data);
        
      }

      
      
    
       useEffect(() => {
         fetchApi()
         
        console.log(movie);
        }, [])
   
        
  return (
    <div className='movies'>

        <div className='movies'>
            <h4>Recomendaciones para ti</h4>

            <div className='content'>

            
                <div className='wrap_movies'>
                    <Recomendaciones  movies={movie.recomendaciones}/>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Movies

