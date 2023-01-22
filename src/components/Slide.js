

import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Slider from 'react-slick'
import img1 from '../assets/slide1.jpg'
import img2 from '../assets/slide2.jpg'
import img3 from '../assets/slide3.jpg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
    }
    return (
      
        <div className='section-center'>
          <Slider {...settings} className='slider'>
            <div>
              <img src={img1} alt='' className='img-slide' />
            </div>
            <div>
              <img src={img2} alt='' className='img-slide' />
            </div>

            <div>
              <img src={img3} alt='' className='img-slide' />
            </div>
          </Slider>
        </div>
     
    )
  }
}
