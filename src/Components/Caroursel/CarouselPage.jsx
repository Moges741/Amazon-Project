import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import image from './img/imageData'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './carousel.module.css'
const CarouselPage = () => {
  return (
    <div>
      <Carousel  
      autoPlay={true}
      showIndicators={false}
      infiniteLoop={true}
      showThumbs={false}
      >
        {
image.map((imageLink) =>{
  return <img src={imageLink} />
})
        }
      </Carousel>
      <div className={styles.hero_page}></div>
    </div>
  )
}
export default CarouselPage;
