import './OfferItemPageCard.styles.scss'

import { useNavigate } from 'react-router-dom';

import SlickImageGallery from '../ui/slick-image-gallery/SlickImageGallery.component';
import Button from '../ui/button/button.component';

type OfferItemProps = {
    cardData: {
        name: string;
        title: string;
        subtitle: string;
        content: string;
        cardImgUrl: string;
        numberOfPhotos: number;
        price: number,
        active?: boolean,
    }
    photosUrls: string[];
}

const OfferItemPageCard = ({ cardData, photosUrls }: OfferItemProps) => {
    const navigate = useNavigate();
    return (
        <div className='offer-item-page-card'>
            < div className='offer-item-page-card__card'
                data-aos="fade-in"
                data-aos-easing="ease-in"
                data-aos-duration="450"
                data-aos-delay="250"
            >
                <div className='offer-item-page-card__card__gallery'>
                    <SlickImageGallery imgUrls={photosUrls} />
                </div>

                <div className='offer-item-page-card__card__content'>
                    <h2>{cardData.title.toUpperCase()}</h2>
                    <h3>{cardData.subtitle.toUpperCase()}</h3>
                    <h3>Цена: <span>{cardData.price}</span> лева</h3>
                    <p>{cardData.content}</p>
                    <Button buttonType='primary' onClick={() => navigate('/contact')}>Контакт</Button>
                </div>
            </div>
        </div >
    )
}

export default OfferItemPageCard