import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/online-photography-courses.jpg";
import img2 from "../assets/software-development-button.jpg";
import img3 from "../assets/wp.jpg";
import img4 from "../assets/flying-car-prototype.jpeg";
const Services = () => {
  return (
    <div className='services'>
        <Carousel 
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={1500}
        className='carousel'
         >
            <div>
                <img src={img1} alt="Image1" />
                <p className='legend'>One</p>
            </div>
            <div>
                <img src={img2} alt="Image2" />
                <p className='legend'>Two</p>
            </div>
            <div>
                <img src={img3} alt="Image3" />
                <p className='legend'>Three</p>
            </div>
            <div>
                <img src={img4} alt="Image4" />
                <p className='legend'>Four</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services