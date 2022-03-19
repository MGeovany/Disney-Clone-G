import React from 'react'


export const Header = () => {
  return (
    <header className='navigation'>
      <div className='navmenu'>
            <div className='logo'></div>
           
            <a className='home h'>
              <img src='/images/home-icon.svg'></img>
              <p>INICIO</p>  
            </a>     

             <a className='search h'>
              <img src='/images/search-icon.svg'></img>
              <p>BÚSQUEDA</p>  
            </a>      

            <a className='watchlist h'>
              <img src='/images/watchlist-icon.svg'></img>
              <p>MI LISTA</p>  
            </a> 

            <a className='originals h'>
              <img src='/images/original-icon.svg'></img>
              <p>ORIGINALES</p>  
            </a> 

            <a className='movies h'>
              <img src='/images/movie-icon.svg'></img>
              <p>PELICULAS</p>  
            </a> 

            <a className='series h'>
              <img src='/images/series-icon.svg'></img>
              <p>SERIES</p>  
            </a> 


      </div>

      <div className='user'>
        <span>Geovany</span>
        <img src='/images/bb.png'></img>
      </div>

    </header>

  )
}


