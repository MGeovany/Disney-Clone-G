import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import '../styles/ImgSlider.css'

function ImgSlider () {

    let settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    }

  return (
    <div className='Carousel'>
        <Slider {...settings}>
        <div>
                <div className='wrap'>
                    <img src='/images/slider-badging.jpg'></img>    
                </div>
          </div>
          <div>
             <div className='wrap'>
                    <img src='/images/slider-badag.jpg'></img>    
                </div>
          </div>
          <div>
            <div className='wrap'>
                <img src='/images/slider-scale.jpg'></img>    
            </div>
          </div>
          <div>
            <div className='wrap'>
                <img src='/images/slider-scales.jpg'></img>    
            </div>
          </div>
        </Slider>
      </div>
  )
}

export default ImgSlider