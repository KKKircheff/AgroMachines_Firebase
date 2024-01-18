import './PopUpImageV2.styles.scss';

import { useState, useEffect, useMemo } from 'react';

import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

import { isMobile } from 'react-device-detect';
import { useSwipeable } from 'react-swipeable';
import { useLockBodyScroll } from "@uidotdev/usehooks"
import { init } from 'aos';
import { set, transform } from 'lodash';
import { sign } from 'crypto';

type PopUpProps = {
    url: string;
    imgUrls: string[];
    isPopUpActive: boolean;
    setClickedIndex: (newValue: number) => void;
    setIsPopUpActive: (newValue: boolean) => void;
};

const PopUpImageV2 = ({ url, imgUrls, isPopUpActive, setIsPopUpActive, setClickedIndex }: PopUpProps) => {

    const maxZoom = 5;
    const [state, setState] = useState({
        offsetX: 0,
        offsetY: 0,
        initX: 0,
        initY: 0,
        initDistance: 0,
        storedZoomCenterX: 0,
        storedZoomCenterY: 0,
        storedScale: 1,
        touchEvent: 0,
        imageState: {
            currentImgUrl: url,
            top: 0,
            left: 0,
            zoomCenterX: 50,
            zoomCenterY: 50,
            scale: 1,
        }
    });

    const { offsetX, offsetY, initX, initY, initDistance, storedZoomCenterX, storedZoomCenterY, storedScale, touchEvent, imageState } = state;
    const { currentImgUrl, top, left, scale, zoomCenterX, zoomCenterY } = imageState;

    const configSwipeable = {
        delta: 50, // min distance(px) before a swipe starts
        preventDefaultTouchmoveEvent: true, // preventDefault on touchmove, *See Details*
        trackTouch: true, // track touch input
        trackMouse: false, // track mouse input
        rotationAngle: 0, // set a rotation angle
        preventScrollOnSwipe: true,
        swipeDuration: 300,
        onSwipedLeft: () => handleSwipeLeft(),
        onSwipedRight: () => handleSwipeRight(),
    };

    const swipeHandlers = useSwipeable({
        // onSwiped: (eventData) => console.log("User Swiped!", eventData),
        ...configSwipeable,
    });

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
        setState(prevState => ({
            ...prevState,
            imageState: { ...prevState.imageState, scale: 1, top: 0, left: 0, zoomCenterX: 50, zoomCenterY: 50 }
        }));
        resetValues();
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentImgUrl]);

    function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(max, value));
    }

    function rnd(value: number) {
        return Math.round(value * 100) / 100;
    }

    const resetValues = () => {
        setState(prevState => ({
            ...prevState,
            offsetX: 0,
            offsetY: 0,
            initX: 0,
            initY: 0,
            storedScale: 1,
            storedZoomCenterX: 0,
            storedZoomCenterY: 0
        }));
    }

    const handleClick = () => {
        resetValues();
        setIsPopUpActive(false);
    };

    const handleClickPrevious = (event: React.MouseEvent | KeyboardEvent) => {
        event.stopPropagation();
        const index = imgUrls.indexOf(currentImgUrl!) === 0 ? (imgUrls.length) : imgUrls.indexOf(currentImgUrl!);
        setClickedIndex(index - 1);
        setState(prevState => ({
            ...prevState,
            imageState: { ...prevState.imageState, scale: 1, top: 0, left: 0, currentImgUrl: imgUrls[index - 1] }
        }));
    };

    const handleClickNext = (event: React.MouseEvent | KeyboardEvent) => {
        event.stopPropagation();
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);
        setClickedIndex(index + 1);
        setState(prevState => ({
            ...prevState,
            imageState: { ...prevState.imageState, scale: 1, top: 0, left: 0, currentImgUrl: imgUrls[index + 1] }
        }));
    };

    const handleSwipeLeft = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);
        setClickedIndex(index + 1);
        setState(prevState => ({
            ...prevState,
            imageState: { ...prevState.imageState, currentImgUrl: imgUrls[index + 1], scale: 1, top: 0, left: 0 }
        }));
    };

    const handleSwipeRight = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === 0 ? (imgUrls.length) : imgUrls.indexOf(currentImgUrl!);
        setState(prevState => ({
            ...prevState,
            imageState: { ...prevState.imageState, currentImgUrl: imgUrls[index - 1], scale: 1, top: 0, left: 0 }
        }));
        setClickedIndex(index - 1);
    };

    const handleStart = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (event.touches.length === 2) {
            setState(prevState => ({
                ...prevState,
                touchEvent: 2,
                initX: (event.touches[0].clientX + event.touches[1].clientX) / 2,
                initY: (event.touches[0].clientY + event.touches[1].clientY) / 2,
                initDistance: Math.hypot(event.touches[0].clientX - event.touches[1].clientX, event.touches[0].clientY - event.touches[1].clientY)
            }));
            return
        }
        if (event.touches.length === 1) {
            setState(prevState => ({
                ...prevState,
                touchEvent: 1,
                initX: event.touches[0].clientX,
                initY: event.touches[0].clientY
            }));
            return
        }
    }

    const handleEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (touchEvent === 2) {
            setState(prevState => ({
                ...prevState,
                touchEvent: 0,
                offsetX: imageState.left,
                offsetY: imageState.top,
                storedZoomCenterX: imageState.zoomCenterX,
                storedZoomCenterY: imageState.zoomCenterY,
                storedScale: clamp(imageState.scale, 1, 4.5)
            }));
            return
        }
        if (touchEvent === 1) {
            setState(prevState => ({
                ...prevState,
                touchEvent: 0,
                offsetX: imageState.left,
                offsetY: imageState.top,
                storedScale: clamp(imageState.scale, 1, 4.5)
            }));
            return
        }
    }

    const handlePinch = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (touchEvent === 1 && event.touches.length === 1) {

            const touch1 = event.touches[0];

            let positionX = (touch1.clientX - initX + offsetX);
            let positionY = (touch1.clientY - initY + offsetY);

            const limiterX = window.innerWidth * (storedScale - 1) * zoomCenterX / 100
            const limiterY = window.innerHeight * (storedScale - 1) * zoomCenterY / 100

            const maxOffset = window.innerWidth * (imageState.scale - 1) / 2;

            positionX = clamp(positionX, -maxOffset - limiterX, maxOffset - limiterX);
            positionY = clamp(positionY, -maxOffset - limiterY, maxOffset - limiterY);
            setState(prevState => ({
                ...prevState,
                imageState: { ...prevState.imageState, left: positionX, top: positionY }
            }));
            return
        }

        if (touchEvent === 2 && event.touches.length === 2) {

            const touch1 = event.touches[0];
            const touch2 = event.touches[1];

            const windowX = window.innerWidth;
            const windowY = window.innerHeight;

            const distance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
            const newScale = clamp(((storedScale + (distance - initDistance) / 100)), 1, maxZoom);

            const zoomCenterX = 50 - (initX / windowX) * 100
            const zoomCenterY = 50 - (initY / windowY) * 100

            const deltaX = (50 - storedZoomCenterX - initX / windowX * 100) * (storedScale - 1)
            const deltaY = (50 - storedZoomCenterY - initY / windowY * 100) * (storedScale - 1)

            let positionX = ((touch1.clientX + touch2.clientX) / 2 - initX + offsetX) - deltaX * windowX / 100;
            let positionY = ((touch1.clientY + touch2.clientY) / 2 - initY + offsetY) - deltaY * windowY / 100;

            const maxOffsetX = windowX * (newScale - 1) / 3;
            const maxOffsetY = windowY * (newScale - 1) / 3;

            positionX = clamp(positionX, -maxOffsetX, maxOffsetX);
            positionY = clamp(positionY, -maxOffsetY, maxOffsetY);

            setState(prevState => ({
                ...prevState,
                imageState: {
                    ...prevState.imageState,
                    scale: newScale,
                    left: positionX,
                    top: positionY,
                    zoomCenterX: zoomCenterX,
                    zoomCenterY: zoomCenterY
                }
            }));
            return
        }
    }

    return (
        <div
            className={`${isPopUpActive ? 'pop-up-image-v2 pop-up-image-v2--active' : 'pop-up-image-v2'}`}
            onClick={() => { handleClick }}>
            {isPopUpActive && currentImgUrl &&
                <div className='pop-up-image-v2__img'
                    style={{
                        overflow: 'hidden',
                        touchAction: 'none',
                    }}>
                    <img
                        src={currentImgUrl}
                        onTouchStart={handleStart}
                        onTouchMove={handlePinch}
                        onTouchEnd={handleEnd}
                        style={{
                            touchAction: 'none',
                            position: 'fixed',
                            transform: `scale(${scale})`,
                            top: `${imageState.top}px`,
                            left: `${imageState.left}px`,
                            transformOrigin: `${50 - imageState.zoomCenterX}% ${50 - imageState.zoomCenterY}%`,
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