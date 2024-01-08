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
            data-aos-duration="200"
            data-aos-delay="10"
        >
            <img className='offer-card__image' src={cardImgUrl} alt='Поливна макара внос' />
            <div className="offer-card__overlay"></div>
            <div className='offer-card__content'>
                <h2 className='offer-card__content__title'>{title}</h2>
                <h3 className='offer-card__content__subtitle'>{subtitle}</h3>
            </div>
            <div className='offer-card__price'>
                <p >цена: {price} лв.</p>
            </div>
            <div className='offer-card__angle-button'><FaAngleRight /></div>
            {/* <div className='offer-card__top-line'></div> */}
            <div className='offer-card__bottom-line'></div>
        </div>
    )
}
export default OfferCard