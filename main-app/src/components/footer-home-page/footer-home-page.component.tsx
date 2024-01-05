import React from 'react'
import './footer-home-page.style.scss'
import { GoMail, GoLocation } from 'react-icons/go';
import { HiOutlinePhone } from 'react-icons/hi';


const FooterHomePage = () => {

    return (
        <div className='footer-home-page'>
            <div className="footer-home-page__company">
                <h5>Agro Machines</h5>
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
                <p><span><HiOutlinePhone /></span> +359 876 962484</p>
            </div>
        </div>
    )
}

export default FooterHomePage