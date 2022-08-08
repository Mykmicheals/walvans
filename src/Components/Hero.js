import React, { useState } from 'react'
import bg1 from '../assets/images/bg_2.jpg'
import bg3 from '../assets/images/bg_3.jpeg'
import Slider from "react-slick";


function Hero() {
    const [animate, setAnimate] = useState(false)
    const [slideOut, setOut] = useState(false)
    const swipeHandler = () => {
        setAnimate(true)
    }
    const falseSwipeHandler = () => {
        setOut(true)
        setAnimate(false)
    }
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        fade: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        // onSwipe: swipeHandler,
        afterChange: swipeHandler,
        onInit: swipeHandler,
        beforeChange: falseSwipeHandler
    };
    return (

        <div className='hero-section'>
            <div className='slider-section'>
                <Slider {...settings}>
                    <div className='slider-each'>
                        <img src={bg1} />
                        <div className='slider-word'>
                            {animate && <h3 className='animate-hero-h'>Delivering Excellence</h3>}

                            {animate && <p className='animate-hero-p'>We Deliver fast International cargo services</p>}
                        </div>
                    </div>

                    {/* <div className='slider-each'>
                        <img src={bg3} />
                        <div className='slider-word-train'>
                            {animate && <p className='animate-hero-h'>BY LAND</p>}
                            {animate && <p className='animate-hero-p'>BY SEA</p>}
                            {animate && <p className='animate-hero-p'> BY AIR</p>}

                        </div>
                    </div> */}

                    <div className='slider-each'>
                        <img src={bg1} />
                        <div className='slider-word'>
                            {animate && <h3 className={animate ? 'animate-hero-h' : 'animate-outer'}>Delivering Excellence</h3>}
                            {animate && <p className='animate-hero-p'>We Deliver fast International cargo services</p>}
                        </div>
                    </div>
                </Slider>
            </div>
        </div>


    )
}

export default Hero