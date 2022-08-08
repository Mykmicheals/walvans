import React from 'react'
import Slider from "react-slick";
import man from '../assets/images/man.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Reviews() {
    return (
        <div className='reviews'>
            <div className='reviews-left'>
                <Carousel
                    showArrows={false}
                    showStatus={false}
                >
                    <div>
                        <p>The word cargo refers in particular to goods or produce being conveyed generally for commercial gain by ship, boat, or aircraft, although the term is now often extended to cover all types of freight</p>
                    </div>

                    <div>
                        <p>The word cargo refers in particular to goods or produce being conveyed generally for commercial </p>
                    </div>

                    <div>
                        <p>The word cargo refers in particular to goods or produce being conveyed generally for commercial freight</p>
                    </div>
                </Carousel>

            </div>

            <div className='reviews-right'>
                <img src={man} />
            </div>
        </div>
    )
}

export default Reviews