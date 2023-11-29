import { useState } from 'react'
import PhotoAlbum from "react-photo-album";

// import { useEffect } from 'react';
// import { getImageSize} from 'react-image-size';
// import { galleryData } from '../application-data/gallery-data';

import { fullGalleryData } from '../../application-data/gallery-data';
import './Gallery.styles.scss'
import { ClickHandlerProps } from 'react-photo-album';
import PopUpImage from '../../components/pop-up-image/pop-up-image.component';


type Photo = {
    src: string,
    width: number,
    height: number,
    spacing?: number,
    padding?: number,
    targetRowHeight?: number
}

const Gallery = () => {

    // eslint-disable-next-line
    const [photos, setPhotos] = useState<Photo[]>(fullGalleryData);
    const [isClicked, setIsClicked] = useState(false);
    const [clickedUrl, setClickedUrl] = useState('');


    const imageHeigth = (window.innerWidth < 720)
        ? 300
        : 150


    const handleClick = (e: ClickHandlerProps<Photo>) => {
        setClickedUrl(e.photo.src);
        setIsClicked(true);

        // bodyScroll.disable();
    }

    // This block extracts all the sizes of the images on the remote hosting by url
    // Then the object is stored in photos and console.logged 
    // just copy object from 'inspect' / console and paste as fullGaleryData 

    //   useEffect(() => {
    //     async function fetchPhotos() {
    //       const fetchedPhotos = await Promise.all(
    //         galleryData.map(async (url) => {
    //           const size = await getImageSize(url);
    //           return {
    //             src: url,
    //             width: size.width,
    //             height: size.height,
    //           };
    //         })
    //       );
    //       setPhotos(fetchedPhotos);
    //     }

    //     fetchPhotos();
    //   }, []);
    //  console.log(photos);

    return (
        <div id='history-gallery-wrapper' className="history-gallery-wrapper">

            {isClicked &&
                <PopUpImage
                    url={clickedUrl}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
            }
            <h2 data-aos='fade-right'>доставени поливни макари</h2>
            <h3 data-aos='fade-right' data-aos-delay="100">от Agro-machines</h3>

            <div className='history-gallery' data-aos='fade-in'>
                {photos.length
                    ? <PhotoAlbum
                        layout="rows"
                        targetRowHeight={imageHeigth}
                        photos={photos}
                        spacing={10}
                        onClick={(e) => handleClick(e)}
                    />
                    : <div></div>}
            </div>
        </div>
    )
}

export default Gallery