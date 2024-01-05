import { isMobile } from 'react-device-detect';
import { BlockUI } from 'primereact/blockui';
import './pop-up-image.styles.scss';
// const bodyScroll = require('body-scroll-toggle');


type PopUpProps = {
    url: string;
    isClicked: boolean;
    setIsClicked: (newValue: boolean) => void;
};


const PopUpImage = ({ url, isClicked, setIsClicked }: PopUpProps) => {
    console.log('Mobile?:', isMobile);
    if (window.innerWidth < 720) {
        // bodyScroll.enable();
        setIsClicked(false);
    }

    const handelClick = (() => {
        // bodyScroll.enable();
        setIsClicked(false);

    })

    return (
        <div
            onClick={handelClick}
            className={`${isClicked ? 'screen-overlay-active' : 'screen-overlay'}`}
        >
            <BlockUI blocked={isClicked} fullScreen baseZIndex={1} style={{ zIndex: 1 }} />
            {isClicked && <img src={url} alt="" />}
        </div>
    );
};

export default PopUpImage;