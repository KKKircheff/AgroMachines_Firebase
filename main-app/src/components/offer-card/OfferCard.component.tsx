import { useNavigate } from 'react-router-dom';
import './OfferCard.styles.scss'
import { TfiAngleRight } from "react-icons/tfi";
import RenderIfVisible from 'react-render-if-visible';
import { OfferCardProps } from '../../routes/offers/Offers.component';



const OfferCard = ({ name, title, subtitle, cardImgUrl, price }: OfferCardProps) => {
    const navigate = useNavigate();
    const handleClick = () => { navigate(`/offers/${name}`) }
    return (
        <div className='offer-card' onClick={handleClick}
            data-aos="fade-in"
            data-aos-easing="ease-in"
            data-aos-duration="250"
            data-aos-delay="250"
        >
            <img className='offer-card__image' src={cardImgUrl} alt='Поливна макара внос' />
            <div className="offer-card__overlay"></div>
            <p className='offer-card__price'>цена: {price} лв.</p>
            <div className='offer-card__content'>
                <h2 className='offer-card__content__title'>{title}</h2>
                <h3 className='offer-card__content__subtitle'>{subtitle}</h3>
            </div>
            <button className='offer-card__more'><TfiAngleRight /></button>
        </div>
    )
}
export default OfferCard