import './GalleryItemPageHero.styles.scss'
import Button from '../ui/button/button.component'
import { useNavigate } from 'react-router-dom'

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
                    <span><i className="pi pi-chevron-left" style={{ color: 'white', fontSize: '.8rem', marginRight: '10px' }}></i></span>
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