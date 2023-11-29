// import Button from '../button/button.component'
import { Button } from 'primereact/button'
import headerImage from '../../images-application/header-image.jpg'
import './header-home-page.style.scss'
import { Link } from 'react-scroll'

// type Button = {
//     children: React.ReactNode,
//     buttonType?: 'primary' | 'inverted'
// }

const HeaderHomePage = () => {

    return (
        <div id='header-home-page-wrapper' className="home-hero">
            <div className="home-hero__left-side" >
                <h1 data-aos="fade-right">ПОЛИВНИ СИСТЕМИ </h1>
                <h1 data-aos="fade-right" data-aos-delay="100">ВТОРА УПОТРЕБА</h1>
                <h1 data-aos="fade-right" data-aos-delay="200">ОТ НИДЕРЛАНДИЯ</h1>
                <Link
                    activeClass="active"
                    to="contact-form-container"
                    spy={true} smooth={true}
                    offset={-100}
                    duration={2000}
                >
                    {/* <Button id='header-button'
                        buttonType={'primary'}
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-anchor=".left-side"
                    >
                        Контакт
                    </Button> */}
                    <Button label="Контакт" />
                </Link>
            </div>
            <div className="home-hero__right-side" data-aos="fade-left">
                <img src={headerImage} alt="поливна макара" />
            </div>
        </div>
    )
}
export default HeaderHomePage
