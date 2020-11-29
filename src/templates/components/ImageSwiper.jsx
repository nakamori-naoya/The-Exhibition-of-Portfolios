import React, {useState} from 'react'
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import google from '../../assets/img/google.png'; 

//         https://react-id-swiper.ashernguyen.site/doc/get-started
//サンプル： https://react-id-swiper.ashernguyen.site/example/three-d-flip-effect

export const ImageSwiper = (props) => {
    const params = {
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      loop: true
    }
  
  const images = props.images
  return(
    <Swiper {...params} >
      {images.length === 0 ? (
        <div className="p-media__thumb">
          <img src={google} alt="No image"/>
        </div>
      ): (
        images.map(image => (
          <div className="p-media__thumb">
            <img src={image.path} alt="商品画像"/>
          </div>
        ))
      )}
    </Swiper>
  )
}
