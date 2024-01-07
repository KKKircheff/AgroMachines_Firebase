import React from 'react'
import './footer-home-page.style.scss'
import { GoMail, GoLocation } from 'react-icons/go';
import { HiOutlinePhone } from 'react-icons/hi';
import { isMobile } from 'react-device-detect';


const FooterHomePage = () => {

    return (
        <div className='footer-home-page'>
            <div className="footer-home-page__company">
                <h1>Agro Machines</h1>
                <p>Nederland</p>
            </div>
            <div className="footer-home-page__contacts">
                <p><span><GoLocation /></span>7513EG, Haaksbergersraat 294,</p>
                <p><span></span>Enschede. Netherland</p>
                <h2></h2>
                <p><span><GoLocation /></span>4400, Южна промишлена зона,</p>
                <p><span></span>Пазарджик, България</p>
            </div>
            <div className="footer-home-page__contacts">
                <p><span><GoMail /></span>office@agro-machines.nl</p>
                <p><span><HiOutlinePhone /></span>
                    {isMobile
                        ? <a href='tel:+359876962484'> +359 876 962484</a>
                        : <span className='span-primary-color'> +359 876 962484</span>}
                </p>
            </div>
        </div>
    )
}

export default FooterHomePage