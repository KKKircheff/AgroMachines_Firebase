import './ContactPageHero.styles.scss'

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
            </div>
            <div className='contact-page-hero__image'>
                <img src={heroImage} alt="Доставена поливна макара шириокоформатна снимка снимка" />
            </div>
        </div>
    )
}

export default ContactPageHero