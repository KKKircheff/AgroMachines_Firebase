import { useState } from 'react'
import PhotoAlbum from "react-photo-album";
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component';
import GalleryCard from '../../components/gallery-card/GalleryCard.component';
import ResponsiveContainer from '../../components/layout/responsiveContainer/ResponsiveContainer';
// import { useEffect } from 'react';
// import { getImageSize} from 'react-image-size';
// import { galleryData } from '../application-data/gallery-data';

import { fullGalleryData } from '../../application-data/gallery-data';
import './Gallery.styles.scss'
import { ClickHandlerProps } from 'react-photo-album';
import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component';
import GalleryCardsContainer from '../../components/layout/galleryCardsContainer/GalleryCardsContainer.component';
import GalleryHero from '../../components/gallery-hero/GalleryHero.component';


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
        <div className="gallery-page">
            <UnderNavBar />
            <ResponsiveContainer gradientColor1='#111' gradientColor='#111'>
                <GalleryHero />
            </ResponsiveContainer>
            <ResponsiveContainer gradientColor1='#f5f5f5' gradientColor='#f5f5f5'>
                <GalleryCardsContainer />
            </ResponsiveContainer>
            <FooterHomePage />
        </div>
    )
}

export default Gallery