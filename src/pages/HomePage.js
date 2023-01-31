import React from 'react'
import { FeaturedProducts} from '../components'
import  FeaturedTwo  from '../components/FeaturedTwo'
import Slide from '../components/Slide'
import FirstCategories from '../components/FirstCategories'
import SecondCategories from '../components/SecondCategories'
import FeaturedThree from '../components/FeaturedThree'
import ThirtCategories from '../components/ThirtCategories'
import LastCategories from '../components/LastCategories'
import BackTotop from '../components/BackToTop'

const HomePage = () => {
  return (
    <div>
     <Slide/>
    <BackTotop/>
      <FeaturedProducts />
      <FirstCategories/>
  <FeaturedTwo/>
  <SecondCategories/>
  <FeaturedThree/>
  <ThirtCategories/>
  <LastCategories/>
    </div>
  )
}

export default HomePage
