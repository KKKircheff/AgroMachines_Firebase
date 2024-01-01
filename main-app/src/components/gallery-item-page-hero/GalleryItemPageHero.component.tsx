import './GalleryItemPageHero.styles.scss'
import Button from '../ui/button/button.component'
import { useNavigate } from 'react-router-dom'

const GalleryItemPageHero = () => {
    const navigate = useNavigate();
    const handleClick = () => { navigate('/gallery') }
    return (
        <div className='gallery-item-page-hero'>
            <div className='gallery-item-page-hero__content'>
                <h2>ПОДРОБНА ИНФОРМАЦИЯ</h2>
                <h3>снимки | описание | предназначение </h3>
                <Button buttonType='primary' onClick={handleClick}>
                    <span><i className="pi pi-chevron-left" style={{ color: 'white', fontSize: '.8rem', marginRight: '10px' }}></i></span>
                    <span> галерия</span>
                </Button>
            </div>

        </div>
    )
}

export default GalleryItemPageHero