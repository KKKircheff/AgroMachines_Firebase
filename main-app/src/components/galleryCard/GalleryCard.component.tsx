import './GalleryCard.styles.scss'
import { TfiAngleRight } from "react-icons/tfi";

const GalleryCard = () => {
    return (
        <div className='gallery-card' >
            <img className='gallery-card__image' src='https://i.ibb.co/X7S0GTD/28795699-1628309933962250-6193676910479566613-n.jpg' alt='gallery' />
            <div className="gallery-card__overlay"></div>
            <div className='gallery-card__content'>
                <h2 className='gallery-card__content__title'>EMERGO 80x260 WITH PUMP</h2>
                <h3 className='gallery-card__content__subtitle'>Emergo  & Caprari pump delivered 2023</h3>
            </div>
            <button className='gallery-card__more'><TfiAngleRight /></button>
        </div>
    )
}
export default GalleryCard