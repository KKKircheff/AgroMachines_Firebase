import './PopUpImageV2.styles.scss';

import { useState, useEffect } from 'react';

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
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const [initX, setInitX] = useState(0);
    const [initY, setInitY] = useState(0);

    // const [storedScale, setStoredScale] = useState(1);

    const [imageState, setImageState] = useState({
        currentImgUrl: url,
        top: 0,
        left: 0,
        scale: 0,
    });

    const { currentImgUrl, top, left, scale } = imageState;
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
        setImageState((prev) => ({ ...prev, scale: 1, top: 0, left: 0 }));
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
        setImageState((prev) => ({ ...prev, scale: 1, top: 0, left: 0, currentImgUrl: imgUrls[index - 1] }));
    };

    const handleClickNext = (event: React.MouseEvent | KeyboardEvent) => {
        event.stopPropagation();
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);
        setImageState((prev) => ({ ...prev, scale: 1, top: 0, left: 0, currentImgUrl: imgUrls[index + 1] }));

    };

    const handleSwipeLeft = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);

        setTimeout(() => {
            setImageState(prev => ({
                ...prev,
                currentImgUrl: imgUrls[index + 1],
                scale: 1,
                top: 0,
                left: 0,
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
                top: 0,
                left: 0,
            }));
        }, 100);
    };

    const handleStart = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
        if (event.touches.length === 1) {
            const touch1 = event.touches[0];
            setInitX(touch1.clientX);
            setInitY(touch1.clientY);
        }
    }
    const handleEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setOffsetX((prev) => imageState.left);
        setOffsetY((prev) => imageState.top);
    }

    const handlePinch = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (event.touches.length === 1) {
            const touch1 = event.touches[0];
            const maxOffset = window.innerWidth * (imageState.scale - 1) / 2;

            let positionX = touch1.clientX - initX + offsetX;
            let positionY = touch1.clientY - initY + offsetY;

            if (positionX > maxOffset && positionX > 0) positionX = maxOffset
            if (positionX < -maxOffset && positionX < 0) positionX = -maxOffset;
            if (positionY > maxOffset && positionY > 0) positionY = maxOffset;
            if (positionY < -maxOffset && positionY < 0) positionY = -maxOffset;

            setImageState((prev) => ({ ...prev, left: positionX, top: positionY }));
            return
        }
        if (event.touches.length === 2) {
            const maxOffset = window.innerWidth * (imageState.scale - 1) / 2;

            const touch1 = event.touches[0];
            const touch2 = event.touches[1];

            let positionX = (touch1.clientX < touch2.clientX)
                ? touch1.clientX + (touch2.clientX - touch1.clientX) / 2 - initX + offsetX
                : touch2.clientX + (touch1.clientX - touch2.clientX) / 2 - initX + offsetX;


            let positionY = (touch1.clientY < touch2.clientY)
                ? touch1.clientY + (touch2.clientY - touch1.clientY) / 2 - initY + offsetY
                : touch2.clientY + (touch1.clientY - touch2.clientY) / 2 - initY + offsetY

            if (positionX > maxOffset && positionX > 0) positionX = maxOffset
            if (positionX < -maxOffset && positionX < 0) positionX = -maxOffset;
            if (positionY > maxOffset && positionY > 0) positionY = maxOffset;
            if (positionY < -maxOffset && positionY < 0) positionY = -maxOffset;


            console.log('touchX:', positionX, ' touchY:', positionY)

            const distance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
            let newScale = Math.round(imageState.scale + (distance / 100) * 10) / 10;

            if (newScale < 1) newScale = 1;
            if (newScale > 3) newScale = 3;
            // setStoredScale((prev) => newScale);
            setImageState((prev) => ({ ...prev, scale: newScale, left: (positionX), top: (positionY) }));
            return
        }


    }


    return (
        <div
            className={`${isPopUpActive ? 'pop-up-image-v2 pop-up-image-v2--active' : 'pop-up-image-v2'}`}
            onClick={() => { handleClick }}>
            {isPopUpActive && currentImgUrl &&
                <div
                    className='pop-up-image-v2__img'
                    style={{
                        overflow: 'hidden',
                        touchAction: 'none',
                    }}
                >
                    <img
                        src={currentImgUrl}
                        onTouchStart={handleStart}
                        onTouchMove={handlePinch}
                        onTouchEnd={handleEnd}
                        style={{
                            touchAction: 'none',
                            position: 'fixed',
                            top: `${imageState.top}px`,
                            left: `${imageState.left}px`,
                            transform: `scale(${scale})`,
                            transformOrigin: `50% 50%`,
                            // transform: `scale(${scale}) translate(${storedTX - diffX / 2}% , ${storedTY - diffY / 2}%)`,
                            // transformOrigin: `${50 - storedTX}% ${50 - storedTY}%`,
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
