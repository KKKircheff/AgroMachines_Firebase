import './ContactInfoTopCard.styles.scss'
import { SlLocationPin } from "react-icons/sl";
import { SlClock } from "react-icons/sl";

const ContactInfoTopCard = () => {

    return (
        <div className="contact-info-top-card">

            <div className="contact-info-top-card__block">
                <h2><span><SlClock /></span>Работно време</h2>
                <p>Понеделник - събота от 9:00 до 18:00</p>
            </div>

            <div className="contact-info-top-card__block">
                <h2><span><SlLocationPin /></span>Локация България</h2>
                <p>Южна промишлена зона</p>
                <p>България, гр. Пазарджик</p>
            </div>

            <div className="contact-info-top-card__block">
                <h2><span><SlLocationPin /></span>Локация Нидерландия</h2>
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