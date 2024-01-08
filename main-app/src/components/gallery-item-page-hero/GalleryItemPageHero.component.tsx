import './GalleryItemPageHero.styles.scss'
import Button from '../ui/button/button.component'
import { useNavigate } from 'react-router-dom'
import { TfiAngleLeft } from "react-icons/tfi";

type GalleryItemPageHeroProps = {
    imageUrl: string;
}

const GalleryItemPageHero = ({ imageUrl }: GalleryItemPageHeroProps) => {
    const navigate = useNavigate();
    const handleClick = () => { navigate('/gallery') }
    return (
        <div className='gallery-item-page-hero'>
            <div className='gallery-item-page-hero__content'
                data-aos="fade-in"
                data-aos-easing="ease-in"
                data-aos-duration="450"
                data-aos-delay="250"
            >
                <h2>ПОДРОБНА ИНФОРМАЦИЯ</h2>
                <h3>снимки | описание | предназначение </h3>
                <Button buttonType='primary' onClick={handleClick}>
                    <span><TfiAngleLeft /></span>
                    <span> галерия</span>
                </Button>
            </div>
            <div className='gallery-item-page-hero__image'>
                <img src={imageUrl} alt="Доставена поливна макара шириокоформатна снимка снимка" />
            </div>
        </div>
    )
}

export default GalleryItemPageHero