import './OffersPageHero.styles.scss'

import Button from '../ui/button/button.component'
import { useNavigate } from 'react-router-dom'
import heroImage from '/hero-images/offersHero.webp'

const OffersPageHero = () => {
    const navigate = useNavigate();

    const today = new Date()
        .toLocaleDateString('bg-BG', { year: 'numeric', month: 'long', day: 'numeric' })
    // .toLocaleDateString('bg-BG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    const handleClick = () => { navigate('/gallery') }
    return (
        <div className='offers-page-hero'>
            <div className='offers-page-hero__content'
                data-aos="fade-in"
                data-aos-easing="ease-in"
                data-aos-duration="450"
                data-aos-delay="250"
            >
                <p>към {today}</p>
                <h2>АКТУАЛНИ ОФЕРТИ</h2>
                <h3>изгодни оферти налични в момента</h3>
                {/* <Button buttonType='primary' onClick={handleClick}>
                    <span><i className="pi pi-chevron-left" style={{ color: 'white', fontSize: '.8rem', marginRight: '10px' }}></i></span>
                    <span> галерия</span>
                </Button> */}
            </div>
            <div className='offers-page-hero__image'>
                <img src={heroImage} alt="Доставена поливна макара шириокоформатна снимка снимка" />
            </div>
        </div>
    )
}

export default OffersPageHero