import { useState } from 'react';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { isMobile } from 'react-device-detect';

import Slider from "react-slick";
import SlickNextArrow from '../ui/slick-image-gallery/slick-ui-components/Slick-next-arrow/SlickNextArrow';
import SlickPreviousArrow from '../ui/slick-image-gallery/slick-ui-components/slick-previous-arrow/SlickPreviousArrow';
import SlickDots from '../ui/slick-image-gallery/slick-ui-components/slick-dots/SlickDots';
import './carousel-slider.styles.scss';

// const bodyScroll = require('body-scroll-toggle');

type SliderProps = {
    url: string[];
    isClicked: boolean;
    setIsClicked: (newValue: boolean) => void;
    setPopUpUrl: (newValue: string) => void;
};

const CarouselSlider = ({ url, isClicked, setIsClicked, setPopUpUrl }: SliderProps) => {

    const [sliderIndex, setSliderIndex] = useState(0);

    const sliderSettings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        arrows: (window.innerWidth > 720),
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPreviousArrow />,
        cssEase: "linear",
        afterChange: (current: number) => setSliderIndex(current),
        appendDots: (dots: any) => SlickDots(dots)
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setPopUpUrl(url[sliderIndex])
        setIsClicked(true);
        // bodyScroll.disable();
    }

    const renderImages: () => JSX.Element[] = () => {
        return url.map((imageUrl) => {
            return (
                <div key={imageUrl}
                    className='slider-image-container'
                    onClick={(e) => handleClick(e)}
                    style={{ touchAction: "auto" }}
                >
                    <img src={imageUrl} alt='поливна макра система втора употреба снимки' />
                </div>
            )
        })
    }

    return (
        <div className="carousel-slider-wrapper">
            <Slider {...sliderSettings}>
                {renderImages()}
            </Slider>
        </div>
    )
}
export default CarouselSlider