import './ContentCardAdvancedGrid.styles.scss'
import IMAGES from '../../assets/images/content-cards/images';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import RenderIfVisible from 'react-render-if-visible';
import { FaAngleRight } from "react-icons/fa6";

// import { Button } from 'primereact/button';

import { useState } from 'react';

type Props = {

    topTitle: string;
    content: [
        { title: string },
        { img: string } | { text: string[] },
        { img: string } | { text: string[] },
        { img: string } | { text: string[] }
    ];
    buttonPageLink?: string,
    buttonScrollLink?: string,
    buttonText: string;
    accentColor: string;
    accentColor1: string;
    aspectRatio?: string;

};
const ContentCardAdvancedGrid = ({ topTitle, content, buttonPageLink, buttonScrollLink, buttonText, accentColor, accentColor1, aspectRatio = '' }: Props) => {

    const [isHovered, setIsHovered] = useState(false);

    // const divStyles = {
    //     // color: isHovered ? 'white' : `${accentColor}`,
    //     background: isHovered ? `linear-gradient(to right, ${accentColor}, ${accentColor1})` : accentColor,
    //     border: isHovered ? '0px solid transparent' : `1px solid ${accentColor}`
    // };
    const divStyles = {
        background: `${accentColor}`,
        color: `white`,
        border: 'none',
        // color: isHovered ? `${accentColor}` : `white`,
        // background: isHovered ? 'white' : accentColor,
        // transform: isHovered ? `50%` : `43%`,
        // transition: 'all 0.1s ease-in-out'
    };

    const renderContent = () => {
        if (!buttonPageLink && !buttonScrollLink) {
            buttonPageLink = '/'
        }
        return (content.map((item, index) => {
            if ('title' in item) {
                const { title } = item;
                return (
                    <div className="content-card-advanced-grid__content-title" key={index}>
                        <h2 style={{ color: accentColor }}

                        >{topTitle}</h2>
                        <h3 style={{ borderLeft: `6px solid ${accentColor1}bb`, color: accentColor }}
                            className='content-card-advanced-grid__top-title'>{title}</h3>
                    </div>
                );
            } else if ('img' in item) {
                const { img } = item;
                const value = IMAGES[img as keyof typeof IMAGES];
                return (
                    <div className="content-card-advanced-grid__content-img" key={index}>
                        <img src={value} alt="content card image" style={aspectRatio ? { aspectRatio: aspectRatio } : {}} />
                    </div>
                );
            } else if ('text' in item) {
                const { text } = item;
                return (
                    <p className="content-card-advanced-grid__content-text" key={index}>
                        {text.map((textItem, i) => (
                            <span
                                key={i}
                                className={'content-card-advanced-grid__content-text-span'}
                                style={{ color: i % 2 === 1 ? accentColor : '', fontWeight: i % 2 === 1 ? '500' : '' }}
                            >
                                {textItem}
                            </span>
                        ))}
                    </p >
                );
            }
            return <div></div>
        }))
    }

    return (
        <RenderIfVisible defaultHeight={300} visibleOffset={50}>
            <div>
                <div className="content-card-advanced-grid"
                    // style={{ backgroundColor: 'transparent' }}
                    data-aos="fade-up"
                    data-aos-easing="ease-in"
                    data-aos-duration="250"
                    data-aos-delay="50"
                // data-aos-once="true"
                >

                    <div className="content-card-advanced-grid__content">
                        {renderContent()}
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        height: '6px',
                        background: `${accentColor}`
                    }}></div>

                    {buttonScrollLink
                        ? <div>
                            <button
                                className="content-card-advanced-grid__button"
                                aria-label={`линк към ${buttonScrollLink}`}
                                style={divStyles}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={() => scroller.scrollTo(buttonScrollLink, { smooth: true, duration: 100 })}
                            >{buttonText} <span><FaAngleRight /></span></button>
                        </div> : ''
                    }
                    {
                        buttonPageLink ?
                            <Link aria-label={`линк към ${buttonPageLink}`} to={buttonPageLink}>
                                <button
                                    className="content-card-advanced-grid__button"
                                    style={divStyles}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >{buttonText} <span><FaAngleRight /></span></button>
                            </Link> : ''
                    }
                </div >
            </div>
        </RenderIfVisible>
    );
};



export default ContentCardAdvancedGrid