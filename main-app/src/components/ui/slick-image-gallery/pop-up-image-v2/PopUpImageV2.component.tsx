import './PopUpImageV2.styles.scss';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

import { isMobile } from 'react-device-detect';
import { useSwipeable } from 'react-swipeable';
import { useLockBodyScroll } from "@uidotdev/usehooks"
import { debounce } from 'lodash';

type PopUpProps = {
    url: string;
    imgUrls: string[];
    isPopUpActive: boolean;
    setIsPopUpActive: (newValue: boolean) => void;
};

const PopUpImageV2 = ({ url, imgUrls, isPopUpActive, setIsPopUpActive }: PopUpProps) => {


    const [currentImgUrl, setCurrentImgUrl] = useState<string | null>(null);
    const [scale, setScale] = useState(1);
    const [transformOrigin, setTransformOrigin] = useState("50% 50%");

    const configSwipeable = {
        delta: 70, // min distance(px) before a swipe starts
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
        ...configSwipeable,

    });

    useEffect(() => {
        setCurrentImgUrl(url);
        isPopUpActive && useLockBodyScroll();
        return () => {
            debouncedHandlePinch.cancel();
        };
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
    };

    const handleSwipeLeft = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);
        setScale(1);
        setCurrentImgUrl(imgUrls[index + 1]);
    };

    const handleSwipeRight = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === 0 ? (imgUrls.length) : imgUrls.indexOf(currentImgUrl!);
        setScale(1);
        setCurrentImgUrl(imgUrls[index - 1]);
    };

    const handlePinch = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (event.touches.length === 2) {
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];

            // const containerRect = event.currentTarget.getBoundingClientRect();


            const centerX = (touch1.clientX + touch2.clientX) / 2;
            const centerY = (touch1.clientY + touch2.clientY) / 2;;

            const distance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
            let newScale = Math.round((distance / 100) * 10) / 10;

            if (newScale < 1) newScale = 1;
            if (newScale > 3) newScale = 3;

            const deltaX = (centerX / window.innerWidth) * newScale * 2 - newScale;
            const deltaY = (centerY / window.innerHeight) * newScale * 2 - newScale;

            // console.log('deltaX', (deltaX + 1) * 50);
            // console.log('deltaY', (deltaY + 1) * 50);

            setScale(newScale);

            // Update the transform-origin based on the normalized pivot coordinates
            const transformOrigin = `${(deltaX + 1) * 50}% ${(deltaY + 1) * 50}%`;
            setTransformOrigin(transformOrigin);
        }
    }

    const debouncedHandlePinch = useMemo(() => debounce(handlePinch, 10), []);

    return (
        <div
            className={`${isPopUpActive ? 'pop-up-image-v2 pop-up-image-v2--active' : 'pop-up-image-v2'}`}
            onClick={() => { handleClick }}>
            {isPopUpActive && currentImgUrl &&
                <div
                    className='pop-up-image-v2__img'
                    style={{
                        overflow: 'hidden',
                        touchAction: 'pan-x pan-y', // Disable browser default touch gestures
                    }}
                    onTouchMove={debouncedHandlePinch}
                >
                    <img
                        src={currentImgUrl}
                        style={{
                            transform: `scale(${scale})`,
                            transformOrigin: transformOrigin,
                        }}
                        alt="изображение на поливна макара"
                        {...swipeHandlers}
                    />
                </div>}
            {!isMobile && <FaChevronLeft
                className="pop-up-image-v2__arrow-left"
                onClick={handleClickPrevious} />}
            {!isMobile && <FaChevronRight
                className="pop-up-image-v2__arrow-right"
                onClick={handleClickNext} />}
            <FaTimes
                className="pop-up-image-v2__close"
                onClick={() => handleClick()} />

        </div>
    );
};

export default PopUpImageV2;
