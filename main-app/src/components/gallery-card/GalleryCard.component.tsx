import { useNavigate } from 'react-router-dom';
import './GalleryCard.styles.scss'
import { FaAngleRight } from "react-icons/fa6";

interface GalleryCardProps {
    name: string;
    title: string;
    subtitle: string;
    content?: string;
    cardImgUrl: string;
    numberOfPhotos?: number;
}

const GalleryCard = ({ name, title, subtitle, cardImgUrl }: GalleryCardProps) => {
    const navigate = useNavigate();
    const handleClick = () => { navigate(`/gallery/${name}`) }
    return (
        <div className='gallery-card' onClick={handleClick}
            data-aos="fade-in"
            data-aos-easing="ease-in"
            data-aos-duration="200"
            data-aos-delay="10"
        >
            <img className='gallery-card__image' src={cardImgUrl} alt='Поливна макара внос' />
            <div className="gallery-card__overlay"></div>
            <div className='gallery-card__content'>
                <h2 className='gallery-card__content__title'>{title}</h2>
                <h3 className='gallery-card__content__subtitle'>{subtitle}</h3>
            </div>
            <div className='gallery-card__more'><FaAngleRight /></div>
        </div>
    )
}
export default GalleryCard