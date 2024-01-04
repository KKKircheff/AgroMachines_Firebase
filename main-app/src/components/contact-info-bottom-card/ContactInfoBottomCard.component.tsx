import './ContactInfoBottomCard.styles.scss'
import { AiOutlineForm } from "react-icons/ai";
import { BsPersonUp } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandFacebook } from "react-icons/tb";
import { LiaViber } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ContactInfoBottomCard = () => {
    const navigate = useNavigate();
    return (
        <div className="contact-info-bottom-card">

            <div className="contact-info-bottom-card__block">
                <h2><span><AiOutlineForm /></span>Контакти:</h2>

                <p>телефон: <span className='icon-center' ><BsTelephone /></span>+359 876 962484</p>
                <p>емайл: <span className='icon-center'><MdOutlineMail /></span>office@agro-machines.nl</p>
                <p>вайбър: <span className='icon-center' style={{ color: 'purple', fontSize: '18px' }}><LiaViber /></span>+359 876 962484</p>
            </div>

            <div className="contact-info-bottom-card__block">
                <h2><span><BsPersonUp /></span>Интернет връзки:</h2>

                <p>уебсайт: <Link to='https://agro-machines.nl/'><span>agro-machines.nl</span></Link></p>

                <p>нашите обяви в: <Link to='https://tractor.bg/users/profile/93217'><span>traktor.bg</span></Link></p>

                <p className="contact-info-bottom-card__block-p">последвайте ни във:
                    <Link to='https://www.facebook.com/AgroMachinesNL'>
                        <span className='icon-center' style={{ color: '#3870e1', verticalAlign: 'middle' }}>
                            <TbBrandFacebook /></span>
                        <span style={{ color: '#3870e1' }}>facebook</span>
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default ContactInfoBottomCard;