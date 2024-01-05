import React, { useEffect, useState } from 'react';
import './ContactInfoBottomCard.styles.scss';
import { AiOutlineForm } from "react-icons/ai";
import { MdOutlineTapAndPlay } from "react-icons/md";
import { VscVmConnect } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandFacebook } from "react-icons/tb";
import { LiaViber } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ContactInfoBottomCard = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="contact-info-bottom-card"
        // data-aos="fade-left"
        // data-aos-easing="ease-in"
        // data-aos-duration="200"
        // data-aos-delay="50"
        >
            <div className="contact-info-bottom-card__block">
                <h2><span><AiOutlineForm /></span>ДИРЕКТЕН КОНТАКТ:</h2>

                <p>телефон: <span className='icon-center' ><BsTelephone /></span>+359 876 962484</p>

                {windowWidth > 400 ? (
                    <p>емайл: <span className='icon-center'><MdOutlineMail /></span>office@agro-machines.nl</p>
                ) : (
                    <p>емайл:</p>
                )}

                {windowWidth > 400 ? (
                    ''
                ) : (
                    <p><span className='icon-center' style={{ marginLeft: '0px' }}><MdOutlineMail /></span>office@agro-machines.nl</p>
                )}

                <p>вайбър: <span className='icon-center' style={{ color: 'purple', fontSize: '18px' }}><LiaViber /></span>+359 876 962484</p>
            </div>

            <div className="contact-info-bottom-card__block">
                <h2><span><VscVmConnect /></span>ИНТЕРНЕТ ВРЪЗКИ:</h2>

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
