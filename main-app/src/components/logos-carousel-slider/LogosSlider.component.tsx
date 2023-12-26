import { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import './logosSlider.styles.scss'

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const LogosSlider = () => {
    const [imageArray, setImageArray] = useState<string[] | null>(null);

    const slideTemplate = (slideUrl: string) => {
        return (
            <div key={slideUrl} className='logosSliderWrapper__container'>
                <img src={slideUrl} alt='лого поливна макара' />
            </div>
        )
    }

    useEffect(() => {
        const loadImageArray = async () => {
            const numImages = 9;
            return Promise.all(
                Array.from({ length: numImages }, async (_, index) => {
                    const src = `../../assets/images/logos/${(index + 1)}.webp`
                    const imageUrl = new URL(src, import.meta.url).href;
                    return imageUrl;
                })
            );
        };

        const fetchData = async () => {
            const images = await loadImageArray();
            setImageArray(images);
        };
        fetchData();
    }, []);

    // const sliderSettings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 1500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     swipeToSlide: true,
    //     arrows: (window.innerWidth > 720),
    //     arrows: false,
    //     nextArrow: <SlickNextArrow />,
    //     prevArrow: <SlickPreviousArrow />,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     cssEase: "linear"
    // };

    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        }
    ];


    return (
        <div className="logosSliderWrapper">
            {imageArray && <Carousel
                value={imageArray}
                itemTemplate={slideTemplate}
                numVisible={3}
                numScroll={1}
                autoplayInterval={5000}
                pt={{
                    item: { className: 'logosSliderWrapper__item' }
                }}
                showIndicators={false}
                circular={true}
                responsiveOptions={responsiveOptions} />}
        </div>
    )
}
export default LogosSlider