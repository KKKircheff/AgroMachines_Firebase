import './GalleryItemPageCard.styles.scss'
import SlickImageGallery from '../ui/slick-image-gallery/SlickImageGallery.component';

type GalleryItemProps = {
    cardData: {
        name: string;
        title: string;
        subtitle: string;
        content: string;
        cardImgUrl: string;
        numberOfPhotos: number;
    }
    photosUrls: string[];
}

const GalleryItemPageCard = ({ cardData, photosUrls }: GalleryItemProps) => {
    return (
        <div className='gallery-item-page-card' >
            < div className='gallery-item-page-card__card'>
                <div className='gallery-item-page-card__card__gallery'>
                    <SlickImageGallery imgUrls={photosUrls} />
                </div>

                <div className='gallery-item-page-card__card__content'>
                    <h2>{cardData.title}</h2>
                    <h3>{cardData.subtitle}</h3>
                    <p>{cardData.content}</p>
                </div>
            </div>

        </div>
    )
}

export default GalleryItemPageCard