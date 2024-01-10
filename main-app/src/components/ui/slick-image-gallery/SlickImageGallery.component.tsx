import { useState, useRef, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import Slider from "react-slick";
import SlickNextArrow from './slick-ui-components/Slick-next-arrow/SlickNextArrow';
import SlickPreviousArrow from './slick-ui-components/slick-previous-arrow/SlickPreviousArrow';
import SlickDots from './slick-ui-components/slick-dots/SlickDots';

import './SlickImageGallery.styles.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PopUpImageV2 from './pop-up-image-v2/PopUpImageV2.component';
import { GoSearch } from 'react-icons/go';
// import { set } from 'firebase/database';

interface SlickGalleryProps {
    imgUrls: string[];
}

const breakPoint = 992;
const slidesMobile = 3;
const slidesDesktop = 5;

const slickImageGallery = ({ imgUrls }: SlickGalleryProps) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [clickedIndex, setClickedIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakPoint);
    const [isPopUpActive, setIsPopUpActive] = useState(false);

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
        afterChange: (current: number) => { setCurrentSlideIndex(current) },
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
    };

    const icon = (<GoSearch />)

    const renderMain = () => {
        return imgUrls.map((imageUrl, index) => {
            return (
                <div key={index} className='slick-image-gallery__image-main' onClick={handleMainClick} data-index={index}>
                    <img src={imageUrl} alt="Image" />
                    {isDesktop && <div className='slick-image-gallery__image-main__icon'>{icon}</div>}
                </div>
            )
        })
    }
    const renderThumb = () => {
        return imgUrls.map((imageUrl, index) => {
            return (
                <div key={index} className='slick-image-gallery__bottom-slider__image-thumb' onClick={handleThumbClick} data-index={index}>
                    <img src={imageUrl} alt="Image" />
                </div>
            )
        })
    }

    const handleThumbClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const dataIndex = event.currentTarget.getAttribute('data-index');
        dataIndex ? setClickedIndex(+dataIndex) : setClickedIndex(0);
    }
    const handleMainClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const dataIndex = event.currentTarget.getAttribute('data-index');
        setIsPopUpActive(true);
    }

    return (<>
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
        <PopUpImageV2
            url={imgUrls[currentSlideIndex]}
            imgUrls={imgUrls}
            isPopUpActive={isPopUpActive}
            clickedIndex={clickedIndex}
            setClickedIndex={setClickedIndex}
            setIsPopUpActive={setIsPopUpActive} />
    </>
    )
}

export default slickImageGallery