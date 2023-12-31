import './ContactInfoTopCard.styles.scss'
import { SlLocationPin } from "react-icons/sl";
import { SlClock } from "react-icons/sl";

const ContactInfoTopCard = () => {

    return (
        <div className="contact-info-top-card"
            data-aos="fade-left"
            data-aos-easing="ease-in"
            data-aos-duration="250"
            data-aos-delay="300"
        >

            <div className="contact-info-top-card__block">
                <h2><span><SlClock /></span>РАБОТНО ВРЕМЕ</h2>
                <p>понеделник - събота от 9:00 до 18:00</p>
            </div>

            <div className="contact-info-top-card__block">
                <h2><span><SlLocationPin /></span>БЪЛГАРИЯ</h2>
                <p>4400, Южна промишлена зона</p>
                <p>гр. Пазарджик, България</p>
            </div>

            <div className="contact-info-top-card__block">
                <h2><span><SlLocationPin /></span>НИДЕРЛАНДИЯ</h2>
                <p>7513EG, Haaksbergerstraat</p>
                <p>Enschede, Nederland</p>
            </div>

            {/* <h2>Контакти:</h2>

            <p>office@agro-machines.nl</p>
            <p>+359 876 962484</p>
            <p>viber: +359 876 962484</p>

            <h2>Социални мрежи</h2>
            <p>Facebook: Agro-machines</p>
            <p>Traktor.bg: Agro-machines.nl</p> */}

        </div>
    )
}

export default ContactInfoTopCard;