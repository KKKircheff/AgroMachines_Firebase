import './Gallery.styles.scss'

import FooterHomePage from '../../components/footer-home-page/footer-home-page.component';
import ResponsiveContainer from '../../components/layout/responsiveContainer/ResponsiveContainer';

import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component';
import GalleryCardsContainer from '../../components/layout/galleryCardsContainer/GalleryCardsContainer.component';
import GalleryHero from '../../components/gallery-hero/GalleryHero.component';
import GalleryHelmet from './Gallery.helmet';

const Gallery = () => {

    return (
        <div className="gallery-page">
            <UnderNavBar />
            <GalleryHelmet />
            <GalleryHero />
            <ResponsiveContainer gradientColor1='#f5f5f5' gradientColor='#f5f5f5'>
                <GalleryCardsContainer />
            </ResponsiveContainer>
            <FooterHomePage />
        </div>
    )
}

export default Gallery