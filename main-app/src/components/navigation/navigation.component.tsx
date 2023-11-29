import React, { useEffect, useRef } from 'react';
import { Item } from '../../application-data/navbar-config';
import logo from '../../assets/images/logo-am.webp'

// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa'
import { HiOutlinePhone } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll'

import './navigation.styles.scss';

interface NavigationProps {
    items: Item[];
}

const Navigation = ({ items }: NavigationProps) => {


    const [isToggled, setIsToggled] = useState(false);
    const [closeSubMenu, setCloseSubMenu] = useState(false);
    const [isTransparentNavbar, setIsTransparentNavbar] = useState(false);

    const rootRef = useRef<HTMLDivElement | null>(null);
    const screenSizes = {
        small: 720
    }

    const toggleSubMenu = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.currentTarget.classList.toggle('toggled');
    }

    const calculateDuration = () => {
        return (1500);
    }


    const renderItems = () => items.map((item, index) => (
        <li key={index}>
            {item.url
                ? <ScrollLink
                    activeClass="active"
                    to={item.url}
                    spy={false}
                    smooth={true}
                    offset={item.offset}
                    duration={calculateDuration}
                    onClick={() => closeMenu(true)}>{item.name}
                </ScrollLink>
                : <span onClick={toggleSubMenu}>
                    {item.name}
                    <FaAngleDown className='submenu-dropdown-icon' />
                </span>
            }
            {item.children && renderChildren(item.children)}
        </li>

    ))

    const renderChildren = (children: Item[]) => (
        <ul className="sub-menu">
            {children.map((child, index) => (
                <li key={index}>
                    <ScrollLink to={child.url!} onClick={() => closeMenu(true)}>
                        {child.name}
                    </ScrollLink>
                </li>
            ))}
        </ul>
    )

    const closeMenu = (closeSubMenu = false) => {
        setIsToggled(false);
        if (closeSubMenu && window.innerWidth > screenSizes.small) {
            setCloseSubMenu(true)
            setTimeout(() => setCloseSubMenu(false), 0)
        }
    }

    useEffect(() => {
        if (closeSubMenu && window.innerWidth > screenSizes.small) {
            closeMenu(true);
        }
        if (rootRef.current) {
            const totalHeight = rootRef.current.offsetHeight;
        }
        // eslint-disable-next-line
    }, [closeSubMenu, screenSizes.small]);

    useEffect(() => {
        const addTransparencyToNavbar = () => {
            if (window.scrollY >= 60) {
                setIsTransparentNavbar(true);
            } else {
                setIsTransparentNavbar(false);
            }
        };
        window.addEventListener('scroll', addTransparencyToNavbar);
        return () => {
            window.removeEventListener('scroll', addTransparencyToNavbar);
        };
    }, []);


    return (
        <div ref={rootRef} className='wrapper'>
            <div className='wrapper__under-navigation-layer'></div>
            <nav className={
                isTransparentNavbar
                    ? 'main-navbar active'
                    : 'main-navbar'}
            >
                <div className="main-navbar__head">
                    <div className={['main-navbar__head-logo', isToggled && 'active', closeSubMenu && 'closed'].filter(Boolean).join(' ')}>
                        <img src={logo} alt="" className="" />
                    </div>
                    <div className={['main-navbar__head-phone-number', isToggled && 'translate-down', closeSubMenu && 'closed'].filter(Boolean).join(' ')}>
                        <p><span><HiOutlinePhone /></span> +359 876 962484</p>
                    </div>
                    <div
                        className={
                            isToggled
                                ? 'main-navbar__head-hamburger close'
                                : 'main-navbar__head-hamburger'
                        }
                        onClick={() => setIsToggled(!isToggled)}
                    >
                        <span className="burger-bar"></span>
                        <span className="burger-bar"></span>
                        <span className="burger-bar"></span>
                        <span className="burger-bar"></span>
                    </div>
                </div>
                <ul
                    className={['main-navbar__menu-items', isToggled && 'active', closeSubMenu && 'closed'].filter(Boolean).join(' ')}
                >{renderItems()}</ul>
            </nav>
        </div>
    )
}

export default Navigation