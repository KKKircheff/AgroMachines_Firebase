import './OfferItemPageCard.styles.scss'

import { useNavigate } from 'react-router-dom';

import SlickImageGallery from '../ui/slick-image-gallery/SlickImageGallery.component';
import Button from '../ui/button/button.component';
import { OfferCardProps } from '../../routes/offers/Offers.component';

type OfferItemProps = {
    cardData: OfferCardProps;
    photosUrls: string[];
}

const OfferItemPageCard = ({ cardData, photosUrls }: OfferItemProps) => {
    const navigate = useNavigate();
    const { title, subtitle, price, content, crops = [] } = cardData;

    const cropsTemplate = crops?.map((crop, index) => {
        return (
            <span key={index}
                className='offer-item-page-card__card__content-crops'
            >{crop.charAt(0).toUpperCase() + crop.slice(1)}, </span>
        )
    })

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
                    <h2>{title.toUpperCase()}</h2>
                    <h3>{subtitle.toUpperCase()}</h3>
                    {crops.length
                        ? <h3>Kултури: {cropsTemplate}</h3>
                        : null}
                    <h3>Цена: <span>{price}</span> лева</h3>
                    <p>{content}</p>
                    <Button buttonType='primary' onClick={() => navigate('/contact')}>Контакт</Button>
                </div>
            </div>
        </div >
    )
}

export default OfferItemPageCard