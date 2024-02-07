import React from 'react'
import { Carousel } from "react-responsive-carousel"
import classes from "../Caruosel/Coursel.module.css";
    import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from './images/data'
function Carouseleefect() {
  return (
      <div>
          <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showIndicators={false}
          showThumbs={false}>
              {
                  img.map((imageItemLink) => {
                      return <img src={imageItemLink}/>
                  })
         }     

          </Carousel>
          <div className={classes.hero_img}>
              
          </div>
    </div>
  )
}

export default Carouseleefect