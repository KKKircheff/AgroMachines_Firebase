import { useState, useRef, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import Slider from "react-slick";
import SlickNextArrow from './slick-ui-components/Slick-next-arrow/SlickNextArrow';
import SlickPreviousArrow from './slick-ui-components/slick-previous-arrow/SlickPreviousArrow';
import SlickDots from './slick-ui-components/slick-dots/SlickDots';

import './SlickImageGallery.styles.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// only needed for when using Prime React
import 'primereact/resources/primereact.min.css'; //core css
// import 'primeicons/primeicons.css'; //icons
// import 'primeflex/primeflex.css'; // flex

import { Image } from 'primereact/image';
import { GoSearch } from 'react-icons/go';

interface PrimeGalleryProps {
    imgUrls: string[];
}

const breakPoint = 992;
const slidesMobile = 3;
const slidesDesktop = 5;

const slickImageGallery = ({ imgUrls }: PrimeGalleryProps) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [clickedIndex, setClickedIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakPoint);

    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            setIsDesktop(width >= breakPoint);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        sliderRef.current?.slickGoTo(clickedIndex);
    }, [clickedIndex]);

    const mainSliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 7000,
        arrows: (!isMobile && isDesktop),
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPreviousArrow />,
        cssEase: "linear",
        appendDots: (dots: any) => SlickDots(dots),
    };

    const thumbSliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: (isDesktop ? slidesDesktop : slidesMobile),
        slidesToScroll: (isDesktop ? 1 : slidesMobile),
        swipe: true,
        autoplay: false,
        speed: 100,
        autoplaySpeed: 120,
        vertical: isDesktop,
        verticalSwiping: isDesktop,
        arrows: (!isMobile && isDesktop),
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPreviousArrow />,
        cssEase: "linear",
        centerMode: false,

        afterChange: (current: number) => { setCurrentSlideIndex(current) },
    };

    const icon = (<GoSearch />)

    const renderMain = () => {
        return imgUrls.map((imageUrl, index) => {
            return (
                <Image key={index} className='prime-gallery__main' src={imageUrl} indicatorIcon={icon} alt="Image" preview />
            )
        })
    }
    const renderThumb = () => {
        return imgUrls.map((imageUrl, index) => {
            return (
                <Image key={index} className='prime-gallery__main' src={imageUrl} alt="Image" data-index={index} onClick={handleClick} />
            )
        })
    }

    const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const dataIndex = event.currentTarget.getAttribute('data-index');
        dataIndex ? setClickedIndex(+dataIndex) : setClickedIndex(0);
    }

    return (
        <div className='slick-image-gallery'>
            <div className='slick-image-gallery__top-slider'>
                <Slider {...mainSliderSettings} ref={sliderRef}>
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