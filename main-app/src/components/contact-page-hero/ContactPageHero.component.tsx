import './ContactPageHero.styles.scss'

import Button from '../ui/button/button.component'
import { useNavigate } from 'react-router-dom'
import heroImage from '/hero-images/contactHero.webp'


const ContactPageHero = () => {
    const navigate = useNavigate();
    const handleClick = () => { navigate('/gallery') }
    return (
        <div className='contact-page-hero'>
            <div className='contact-page-hero__content'
                data-aos="fade-in"
                data-aos-easing="ease-in"
                data-aos-duration="450"
                data-aos-delay="250"
            >
                <h2>КОНТАКТ</h2>
                <h3>още информация на нашите на телефон | емайл | форма</h3>
                {/* <h3>телефон | емайл | форма</h3> */}
                {/* <Button buttonType='primary' onClick={handleClick}>
                    <span><i className="pi pi-chevron-left" style={{ color: 'white', fontSize: '.8rem', marginRight: '10px' }}></i></span>
                    <span> галерия</span>
                </Button> */}
            </div>
            <div className='contact-page-hero__image'>
                <img src={heroImage} alt="Доставена поливна макара шириокоформатна снимка снимка" />
            </div>
        </div>
    )
}

export default ContactPageHero