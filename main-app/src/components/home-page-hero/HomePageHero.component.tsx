import Button from '../ui/button/button.component'
import heroImage from '/hero-images/homeHero.webp'
import './HomePageHero.style.scss'
import { useNavigate } from 'react-router-dom'

const HomePageHero = () => {
    const navigate = useNavigate();
    return (
        <div id='header-home-page-wrapper' className="home-hero">
            <div className="home-hero__left-side" >
                <h1
                    data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-duration="250"
                    data-aos-delay="450">ПОЛИВНИ СИСТЕМИ </h1>
                <h1 data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-duration="250"
                    data-aos-delay="650">ВТОРА УПОТРЕБА</h1>
                <h1
                    data-aos="fade-right"
                    data-aos-easing="ease-in"
                    data-aos-duration="250"
                    data-aos-delay="850">ОТ НИДЕРЛАНДИЯ</h1>
                <Button
                    buttonType='primary'
                    onClick={() => navigate('/offers')}>Оферти</Button>
            </div>
            <div className="home-hero__right-side" data-aos="fade-left">
                <img src={heroImage} alt="поливна макара" />
            </div>
        </div>
    )
}
export default HomePageHero
