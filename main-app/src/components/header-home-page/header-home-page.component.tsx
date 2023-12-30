// import Button from '../button/button.component'
import { Button } from 'primereact/button'
import headerImage from '../../images-application/header-image.webp'
import './header-home-page.style.scss'
import { useNavigate } from 'react-router-dom'

// type Button = {
//     children: React.ReactNode,
//     buttonType?: 'primary' | 'inverted'
// }

const HeaderHomePage = () => {
    const navigate = useNavigate();
    return (
        <div id='header-home-page-wrapper' className="home-hero">
            <div className="home-hero__left-side" >
                <h1 data-aos="fade-right">ПОЛИВНИ СИСТЕМИ </h1>
                <h1 data-aos="fade-right" data-aos-delay="100">ВТОРА УПОТРЕБА</h1>
                <h1 data-aos="fade-right" data-aos-delay="200">ОТ НИДЕРЛАНДИЯ</h1>
                <Button label="Контакт" onClick={() => navigate('/contact')} />

            </div>
            <div className="home-hero__right-side" data-aos="fade-left">
                <img src={headerImage} alt="поливна макара" />
            </div>
        </div>
    )
}
export default HeaderHomePage
