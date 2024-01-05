import { useNavigate } from 'react-router-dom';
import './OfferCard.styles.scss'
import { TfiAngleRight } from "react-icons/tfi";
import { FaAngleRight } from "react-icons/fa6";
import { OfferCardProps } from '../../routes/offers/Offers.component';



const OfferCard = ({ name, title, subtitle, cardImgUrl, price }: OfferCardProps) => {
    const navigate = useNavigate();
    const handleClick = () => { navigate(`/offers/${name}`) }
    return (
        <div className='offer-card' onClick={handleClick}
            data-aos="fade-in"
            data-aos-easing="ease-in"
            data-aos-duration="350"
            data-aos-delay="50"
        >
            <img className='offer-card__image' src={cardImgUrl} alt='Поливна макара внос' />
            <div className="offer-card__overlay"></div>
            <p className='offer-card__price'>цена: {price} лв.</p>
            <div className='offer-card__content'>
                <h2 className='offer-card__content__title'>{title}</h2>
                <h3 className='offer-card__content__subtitle'>{subtitle}</h3>
            </div>
            <div className='offer-card__more'><FaAngleRight /></div>
        </div>
    )
}
export default OfferCard