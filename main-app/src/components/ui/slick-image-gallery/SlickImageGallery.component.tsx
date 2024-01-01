
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

import Slider from "react-slick";
import SlickNextArrow from './slick-ui-components/Slick-next-arrow/SlickNextArrow';
import SlickPreviousArrow from './slick-ui-components/slick-previous-arrow/SlickPreviousArrow';
import SlickDots from './slick-ui-components/slick-dots/SlickDots';

import './SlickImageGallery.styles.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image } from 'primereact/image';

interface PrimeGalleryProps {
    imgUrls: string[];
}




const slickImageGallery = ({ imgUrls }: PrimeGalleryProps) => {
    const [sliderIndex, setSliderIndex] = useState(0);

    const mainSliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 7000,
        arrows: (!isMobile),
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPreviousArrow />,
        cssEase: "linear",
        appendDots: (dots: any) => SlickDots(dots)
    };

    const thumbSliderSettings = {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: (window.innerWidth >= 992 ? 1 : 3),
        rows: (window.innerWidth >= 992 ? 4 : 1),
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 1000,
        vertical: (window.innerWidth >= 992),
        verticalSwiping: true,
        // arrows: (window.innerWidth > 720),
        arrows: (!isMobile),
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPreviousArrow />,
        cssEase: "linear",
        centerMode: false,
        afterChange: (current: number) => setSliderIndex(current),
    };

    const icon = (<i className="pi pi-search"></i>)

    const renderMain = () => {
        return imgUrls.map((imageUrl, index) => {
            return (
                <Image className='prime-gallery__main' src={imageUrl} indicatorIcon={icon} alt="Image" preview />
            )
        })
    }
    const renderThumb = () => {
        return imgUrls.map((imageUrl, index) => {
            return (
                <Image className='prime-gallery__main' src={imageUrl} alt="Image" />
            )
        })
    }

    return (
        <div className='slick-image-gallery'>
            <div className='slick-image-gallery__top-slider'>
                <Slider {...mainSliderSettings}>
                    {renderMain()}
                </Slider>
            </div>
            <div className='slick-image-gallery__bottom-slider'>
                <Slider {...thumbSliderSettings}>
                    {renderThumb()}
                </Slider>
            </div>
        </div>
    )
}

export default slickImageGallery