import React, { useEffect } from 'react'
import ImgSlider from './ImgSlider';
import Slider from 'react-slick'
import Viewers from './Viewers';
import Movies from './Movies';



function Home () {

/*
  const userCollectioRef = collection(db, "Dis");


  const getLinks = async () =>{
    const querySnapshot = await getDocs(userCollectioRef);

    const docs = [];

    querySnapshot.forEach(doc => {
      console.log(doc.data());

      
      

      docs.push({...doc.data(), id:doc.id});

    });

    
  }

*/

  
  

  return (
    <div className='container'>
      <ImgSlider/>
      <Viewers/>
      <Movies/>

    </div>
  )
}

export default Home;