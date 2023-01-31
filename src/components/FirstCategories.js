import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import img1 from '../assets/cat1.jpeg'
import img2 from '../assets/cat2.jpeg'
import img3 from '../assets/cat3.jpeg'
import img4 from '../assets/cat4.jpeg'
import img5 from '../assets/cat5.jpeg'

const FirstCategories = () => {
 const responsive = {
   superLargeDesktop: {
     
     breakpoint: { max: 4000, min: 3000 },
     items: 5,
   },
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 3,
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 2,
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1,
   },
 }
  return (
    <div className='categories'>
      <Carousel responsive={responsive}>
        <div className='card'>
          <img src={img1} alt='' className='img-slide-first-categories' />
          <div className='categories-details'>
            <h3>savons</h3>
          </div>
        </div>
        <div className='card'>
          <img src={img2} alt='' className='img-slide-first-categories' />
          <div className='categories-details'>
            <h3>savons</h3>
          </div>
        </div>
        <div className='card'>
          <img src={img3} alt='' className='img-slide-first-categories' />
          <div className='categories-details'>
            <h3>savons</h3>
          </div>
        </div>
        <div className='card'>
          <img src={img4} alt='' className='img-slide-first-categories' />
          <div className='categories-details'>
            <h3>savons</h3>
          </div>
        </div>
        <div className='card'>
          <img src={img5} alt='' className='img-slide-first-categories' />
          <div className='categories-details'>
            <h3>Huile</h3>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default FirstCategories