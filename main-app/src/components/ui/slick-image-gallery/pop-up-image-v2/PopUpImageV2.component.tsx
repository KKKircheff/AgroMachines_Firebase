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
    // const storedDX = sessionStorage.getItem('deltaX') ?? '0';
    // const storedDY = sessionStorage.getItem('deltaY') ?? '0';
    const [imageState, setImageState] = useState({
        currentImgUrl: url,
        // imgTranslatePosition: { x: +storedDX, y: +storedDY },
        imgTranslatePosition: { x: 0, y: 0 },
        scale: 1,
    });

    const { currentImgUrl, imgTranslatePosition, scale } = imageState;

    const configSwipeable = {
        delta: 30, // min distance(px) before a swipe starts
        preventDefaultTouchmoveEvent: true, // preventDefault on touchmove, *See Details*
        trackTouch: true, // track touch input
        trackMouse: false, // track mouse input
        rotationAngle: 0, // set a rotation angle
        preventScrollOnSwipe: true,
        swipeDuration: 100,
        onSwipedLeft: () => handleSwipeLeft(),
        onSwipedRight: () => handleSwipeRight(),
    };

    const swipeHandlers = useSwipeable({
        // onSwiped: (eventData) => console.log("User Swiped!", eventData),
        ...configSwipeable,
    });

    useEffect(() => {
        setImageState((prev) => ({ ...prev, currentImgUrl: url }));
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
        setImageState((prev) => ({ ...prev, scale: 1, imgTranslatePosition: { x: 0, y: 0 } }));

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            sessionStorage.removeItem('deltaX');
            sessionStorage.removeItem('deltaY');
        };
    }, [currentImgUrl]);

    const handleClick = () => {
        setIsPopUpActive(false);
        setImageState((prev) => ({ ...prev, scale: 1, imgTranslatePosition: { x: 0, y: 0 } }));
    };

    const handleClickPrevious = (event: React.MouseEvent | KeyboardEvent) => {
        event.stopPropagation();
        const index = imgUrls.indexOf(currentImgUrl!) === 0 ? (imgUrls.length) : imgUrls.indexOf(currentImgUrl!);
        setImageState((prev) => ({ ...prev, currentImgUrl: imgUrls[index - 1] }));
    };

    const handleClickNext = (event: React.MouseEvent | KeyboardEvent) => {
        event.stopPropagation();
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);
        setImageState((prev) => ({ ...prev, currentImgUrl: imgUrls[index + 1] }));

    };

    const handleSwipeLeft = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);
        // setImageState((prev) => ({ ...prev, currentImgUrl: imgUrls[index + 1], scale: 1, imgTranslatePosition: { x: 0, y: 0 } }));

        setTimeout(() => {
            setImageState(prev => ({
                ...prev,
                currentImgUrl: imgUrls[index + 1],
                scale: 1,
                imgTranslatePosition: { x: 0, y: 0 }
            }));
        }, 100);
    };

    const handleSwipeRight = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === 0 ? (imgUrls.length) : imgUrls.indexOf(currentImgUrl!);
        // setImageState((prev) => ({ ...prev, currentImgUrl: imgUrls[index - 1], scale: 1, imgTranslatePosition: { x: 0, y: 0 } }));
        setTimeout(() => {
            setImageState(prev => ({
                ...prev,
                currentImgUrl: imgUrls[index - 1],
                scale: 1,
                imgTranslatePosition: { x: 0, y: 0 }
            }));
        }, 100);
    };

    const handlePinch = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();

        if (event.touches.length === 2) {

            const touch1 = event.touches[0];
            const touch2 = event.touches[1];

            const distance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
            let newScale = Math.round((distance / 100) * 10) / 10;

            if (newScale < 1) newScale = 1;
            if (newScale > 5) newScale = 5;
            setImageState((prev) => ({ ...prev, scale: newScale, imgTranslatePosition: { x: 0, y: 0 } }));
            return
        }

        if (event.touches.length === 1) {
            const touch1 = event.touches[0];
            const storedDeltaX = sessionStorage.getItem('deltaX') ?? '0';
            const storedDeltaY = sessionStorage.getItem('deltaY') ?? '0';


            let deltaX = 50 + +storedDeltaX / 2 - Math.round((1 - (touch1.clientX) / window.innerWidth) * (100));
            let deltaY = 50 + +storedDeltaY / 2 - Math.round((1 - touch1.clientY / window.innerHeight) * (100));


            deltaX = deltaX > 25 ? 25 : deltaX < -25 ? -25 : deltaX;
            deltaY = deltaY > 25 ? 25 : deltaY < -25 ? -25 : deltaY;

            sessionStorage.setItem('deltaX', deltaX.toString());
            sessionStorage.setItem('deltaY', deltaX.toString());

            setImageState((prev) => ({ ...prev, imgTranslatePosition: { x: deltaX, y: deltaY } }));

            return
        }
    }

    const debouncedHandlePinch = useMemo(() => debounce(handlePinch, 30), []);
    // const debouncedHandlePinch = useCallback(debounce(handlePinch, 50), [])

    return (
        <div
            className={`${isPopUpActive ? 'pop-up-image-v2 pop-up-image-v2--active' : 'pop-up-image-v2'}`}
            onClick={() => { handleClick }}>
            {isPopUpActive && currentImgUrl &&
                <div
                    className='pop-up-image-v2__img'
                    style={{
                        overflow: 'hidden',
                        touchAction: 'pan-x pan-y',
                    }}
                    // onTouchMove={debouncedHandlePinch}
                    onTouchMove={handlePinch}
                >
                    <img
                        src={currentImgUrl}
                        style={{
                            transform: `scale(${scale}) translate(${imgTranslatePosition.x}%, ${imgTranslatePosition.y}%)`,
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
