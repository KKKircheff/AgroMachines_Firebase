import './PopUpImageV2.styles.scss';

import { useState, useEffect, useMemo } from 'react';

import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

import { isMobile } from 'react-device-detect';
import { useSwipeable } from 'react-swipeable';
import { useLockBodyScroll } from "@uidotdev/usehooks"
import { set } from 'lodash';

type PopUpProps = {
    url: string;
    imgUrls: string[];
    isPopUpActive: boolean;
    clickedIndex: number;
    setClickedIndex: (newValue: number) => void;
    setIsPopUpActive: (newValue: boolean) => void;
};

const PopUpImageV2 = ({ url, imgUrls, isPopUpActive, setIsPopUpActive, clickedIndex, setClickedIndex }: PopUpProps) => {
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const [initX, setInitX] = useState(0);
    const [initY, setInitY] = useState(0);

    const [transformOrigin, setTransformOrigin] = useState('50% 50%');

    const [storedScale, setStoredScale] = useState(1);

    const [imageState, setImageState] = useState({
        currentImgUrl: url,
        top: 0,
        left: 0,
        scale: 0,
    });

    const { currentImgUrl, top, left, scale } = imageState;

    const configSwipeable = {
        delta: 50, // min distance(px) before a swipe starts
        preventDefaultTouchmoveEvent: true, // preventDefault on touchmove, *See Details*
        trackTouch: true, // track touch input
        trackMouse: false, // track mouse input
        rotationAngle: 0, // set a rotation angle
        preventScrollOnSwipe: true,
        swipeDuration: 120,
        onSwipedLeft: () => handleSwipeLeft(),
        onSwipedRight: () => handleSwipeRight(),
    };

    const swipeHandlers = useSwipeable({
        // onSwiped: (eventData) => console.log("User Swiped!", eventData),
        ...configSwipeable,
    });

    useEffect(() => {
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
        resetValues();
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentImgUrl]);

    function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(max, value));
    }

    const resetValues = () => {
        setOffsetX(0);
        setOffsetY(0);
        setInitX(0);
        setInitY(0);
        setStoredScale(1);
    }

    const handleClick = () => {
        resetValues();
        setIsPopUpActive(false);
    };

    const handleClickPrevious = (event: React.MouseEvent | KeyboardEvent) => {
        event.stopPropagation();
        const index = imgUrls.indexOf(currentImgUrl!) === 0 ? (imgUrls.length) : imgUrls.indexOf(currentImgUrl!);
        setClickedIndex(index - 1);
        setImageState((prev) => ({ ...prev, scale: 1, top: 0, left: 0, currentImgUrl: imgUrls[index - 1] }));
    };

    const handleClickNext = (event: React.MouseEvent | KeyboardEvent) => {
        event.stopPropagation();
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);
        setClickedIndex(index + 1);
        setImageState((prev) => ({ ...prev, scale: 1, top: 0, left: 0, currentImgUrl: imgUrls[index + 1] }));

    };

    const handleSwipeLeft = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === imgUrls.length - 1 ? -1 : imgUrls.indexOf(currentImgUrl!);
        setClickedIndex(index + 1);
        setImageState(prev => ({ ...prev, currentImgUrl: imgUrls[index + 1], scale: 1, top: 0, left: 0 }));
    };

    const handleSwipeRight = () => {
        const index = imgUrls.indexOf(currentImgUrl!) === 0 ? (imgUrls.length) : imgUrls.indexOf(currentImgUrl!);
        setImageState(prev => ({ ...prev, currentImgUrl: imgUrls[index - 1], scale: 1, top: 0, left: 0 }));
        setClickedIndex(index - 1);
    };

    const handleStart = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
        if (event.touches.length === 1) {
            const touch1 = event.touches[0];
            setInitX(touch1.clientX);
            setInitY(touch1.clientY);
            return
        }

        if (event.touches.length === 2) {
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            let positionX = (touch1.clientX + touch2.clientX) / 2;
            let positionY = (touch1.clientY + touch2.clientY) / 2;
            setInitX(positionX);
            setInitY(positionY);
            return
        }
    }
    const handleEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
        // const maxOffset = window.innerWidth * (imageState.scale - 1) / 2;
        // const percentX = 100 - Math.round((imageState.left + maxOffset) / (maxOffset * 2) * 100);
        // const percentY = 100 - Math.round((imageState.top + maxOffset) / (maxOffset * 2) * 100);
        // console.log('maxOffset', maxOffset, ' scale', imageState.scale, ' left:', imageState.left, ' percentX:', percentX);
        setOffsetX(Math.trunc(imageState.left));
        setOffsetY(Math.trunc(imageState.top));
        setStoredScale(imageState.scale);
        // setTransformOrigin(`${percentX}% ${percentY}%`);
    }
    const handlePinch = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (event.touches.length === 1) {
            const touch1 = event.touches[0];
            const maxOffset = window.innerWidth * (imageState.scale - 1) / 2;

            let positionX = touch1.clientX - initX + offsetX;
            let positionY = touch1.clientY - initY + offsetY;

            positionX = clamp(positionX, -maxOffset, maxOffset);
            positionY = clamp(positionY, -maxOffset, maxOffset);

            setImageState((prev) => ({ ...prev, scale: storedScale, left: positionX, top: positionY }));
            return
        }

        if (event.touches.length === 2) {
            const maxOffset = window.innerWidth * (imageState.scale - 1) / 2;

            const touch1 = event.touches[0];
            const touch2 = event.touches[1];

            const windowX = window.innerWidth;
            const windowY = window.innerHeight;

            const percentDX = -Math.trunc((windowX / 2 - windowX + initX) * 100 / windowX);
            const percentDY = -Math.trunc((windowY / 2 - windowY + initY) * 100 / windowY);
            // const percentDY = -(windowX / 2 - windowX + initY) * 100 / windowX;

            console.log('window:', window.innerWidth, ' initX:', initX, 'percentDX:', percentDX, ' percentDY:', percentDY);

            let positionX = ((touch1.clientX + touch2.clientX) / 2 - initX + offsetX + percentDX * 10);
            let positionY = (touch1.clientY + touch2.clientY) / 2 - initY + offsetY + percentDY * 10;

            positionX = clamp(positionX, -maxOffset, maxOffset);
            positionY = clamp(positionY, -maxOffset, maxOffset);

            const distance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
            let newScale = (storedScale * 2 + distance) / 50;
            setImageState((prev) => ({ ...prev, scale: clamp(newScale, 1, 5), left: (positionX), top: (positionY) }));
            // setImageState((prev) => ({ ...prev, scale: newScale }));
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
                            top: `${imageState.top}px`,
                            left: `${imageState.left}px`,
                            transform: `scale(${scale})`,
                            // transformOrigin: transformOrigin,
                            transformOrigin: `50% 50%`,
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
