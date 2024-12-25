import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { kurtaPage1 } from '../../pages/ProductPage/Mens_kurta';

const HomeSectionCarousel = () => {
    return (
        <div className='p-[10px]'>
            <div>
                <Carousel
                    arrows
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    infinite={true}
                    itemClass=""
                    draggable
                    keyBoardControl
                    minimumTouchDrag={80}
                    responsive={{
                        largeDesktop: {
                            breakpoint: {
                                max: 4000,
                                min: 2000
                            },
                            items: 6,
                        },
                        mediumDesktop: {
                            breakpoint: {
                                max: 2000,
                                min: 1500
                            },
                            items: 4.5,
                        },
                        Desktop: {
                            breakpoint: {
                                max: 1500,
                                min: 1150
                            },
                            items: 3.5,
                        },
                        tablet: {
                            breakpoint: {
                                max: 1150,
                                min: 950
                            },
                            items: 3,
                        },
                        mobile: {
                            breakpoint: {
                                max: 950,
                                min: 800
                            },
                            items: 2.5,
                        },
                        largeMobile: {
                            breakpoint: {
                                max: 800,
                                min: 670
                            },
                            items: 2,
                        },
                        mediumMobile: {
                            breakpoint: {
                                max: 670,
                                min: 500
                            },
                            items: 1.5,
                        },
                        smallMobile: {
                            breakpoint: {
                                max: 500,
                                min: 0
                            },
                            items: 1,
                        },
                    }}
                    rewind
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                >

                    {
                        kurtaPage1.slice(0, 10).map((item, index) => <HomeSectionCard key={index} item={item} />)
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default HomeSectionCarousel