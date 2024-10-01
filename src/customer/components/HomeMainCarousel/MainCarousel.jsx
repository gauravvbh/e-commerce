import React from 'react';
import { MainCarouselData } from './MainCarouselData';
import Carousel from 'react-multi-carousel';


const MainCarousel = () => {
    return (
        <div className='z-1 relative'>
            <Carousel
                // additionalTransform={0}
                // arrows
                autoPlaySpeed={3000}
                // centerMode={false}
                draggable
                containerClass="carousel-container"
                // // dotListClass=""
                // focusOnSelect={false}
                infinite
                itemClass="carousel-item"
                // keyBoardControl
                // // minimumTouchDrag={80}
                // // renderArrowsWhenDisabled={false}
                // // renderButtonGroupOutside={false}
                // renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 1,
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 1,
                    },
                }}
                // rewind={false}
                // rewindWithAnimation={false}
                // rtl={false}
                // shouldResetAutoplay
                showDots
                // sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {MainCarouselData.map((item, index) => (
                    <div className='z-1' key={index} >
                        <img
                            src={item.path}
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MainCarousel;
