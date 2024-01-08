import { useState, useEffect } from 'react';
// import { TfiAngleLeft, TfiAngleRight, TfiClose } from "react-icons/tfi";
import { FaAngleLeft, FaAngleRight, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import './PopUpImageV2.styles.scss';
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { isMobile } from 'react-device-detect';
import { useSwipeable } from 'react-swipeable';

type PopUpProps = {
    url: string;
    imgUrls: string[];
    isPopUpActive: boolean;
    setIsPopUpActive: (newValue: boolean) => void;
};

const PopUpImageV2 = ({ url, imgUrls, isPopUpActive, setIsPopUpActive }: PopUpProps) => {

    useLockBodyScroll();

    const config = {
        delta: 10, // min distance(px) before a swipe starts
        preventDefaultTouchmoveEvent: true, // preventDefault on touchmove, *See Details*
        trackTouch: true, // track touch input
        trackMouse: false, // track mouse input
        rotationAngle: 0, // set a rotation angle
        preventScrollOnSwipe: true,
        onSwipedLeft: () => handleSwipeLeft(),
        onSwipedRight: () => handleSwipeRight(),
    };

    const swipeHandlers = useSwipeable({
        onSwiped: (eventData) => console.log("User Swiped!", eventData),
        ...config,
    });

    const [currentImgUrl, setCurrentImgUrl] = useState<string | null>(null);

    useEffect(() => {
        setCurrentImgUrl(url);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsPopUpActive(false);
            } else if (event.key === "ArrowLeft") {
                handleClickPrevious(event);
            } else if (event.key === "ArrowRight") {
                handleClickNext(event);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentImgUrl]);

    const handleClick = () => {
        setIsPopUpActive(false);
    };

    const handleClickPrevious = (event: React.MouseEvent | KeyboardEvent) => {
        event.stopPropagation();
        const index = imgUrls.indexOf(currentImgUrl!) === 0 ? (imgUrls.length) : imgUrls.indexOf(currentImgUrl!);
        setCurrentImgUrl(imgUrls[index - 1]);
    };

    const handleClickNext = (event: React.MouseEvent | KeyboardEvent) => {
        event.stopPropagation();
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);
        setCurrentImgUrl(imgUrls[index + 1]);
        console.log('next', index + 1);
    };

    const handleSwipeLeft = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);
        setCurrentImgUrl(imgUrls[index + 1]);
    };

    const handleSwipeRight = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === 0 ? (imgUrls.length) : imgUrls.indexOf(currentImgUrl!);
        setCurrentImgUrl(imgUrls[index - 1]);
    };

    return (
        <div
            onClick={handleClick}
            className={`${isPopUpActive ? 'pop-up-image-v2--active' : 'pop-up-image-v2'}`}
        >
            {isPopUpActive && currentImgUrl &&
                <img src={currentImgUrl} alt="изображение на поливна макара" {...swipeHandlers} />
            }
            {!isMobile && <FaChevronLeft
                className="pop-up-image-v2__arrow-left"
                onClick={handleClickPrevious} />}
            {!isMobile && <FaChevronRight
                className="pop-up-image-v2__arrow-right"
                onClick={handleClickNext} />}
            <FaTimes
                className="pop-up-image-v2__close"
                onClick={handleClick}
            />
        </div>
    );
};

export default PopUpImageV2;
