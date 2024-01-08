import './ContentCard.styles.scss'
import IMAGES from '../../assets/images/content-cards/images';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

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
const ContentCard = ({ topTitle, content, buttonPageLink, buttonScrollLink, buttonText, accentColor, accentColor1, aspectRatio = '' }: Props) => {

    const [isHovered, setIsHovered] = useState(false);

    const divStyles = {
        // color: isHovered ? 'white' : `${accentColor}`,
        background: isHovered ? `linear-gradient(to right, ${accentColor}, ${accentColor1})` : accentColor,
        border: isHovered ? '0px solid transparent' : `1px solid ${accentColor}`
    };

    const renderContent = () => {
        if (!buttonPageLink && !buttonScrollLink) {
            buttonPageLink = '/'
        }
        return (content.map((item, index) => {
            if ('title' in item) {
                const { title } = item;
                return (
                    <div className="content-card-two__content-title" key={index}>
                        <h2 style={{ color: accentColor }}
                            data-aos="zoom-in-right"
                            data-aos-easing="ease-in"
                            data-aos-duration="300"
                            data-aos-delay="50"
                        // data-aos-once="true"
                        >{topTitle}</h2>
                        <h3 style={{ borderLeft: `2px solid ${accentColor1}`, color: accentColor }}
                            className='content-card-two__top-title'
                            data-aos="zoom-in-right"
                            data-aos-easing="ease-in"
                            data-aos-duration="300"
                            data-aos-delay="50"
                        // data-aos-once="true"
                        >{title}</h3>
                    </div>
                );
            } else if ('img' in item) {
                const { img } = item;
                const value = IMAGES[img as keyof typeof IMAGES];
                return (
                    <div className="content-card-two__content-img"
                        key={index}
                        data-aos="zoom-in-left"
                        data-aos-easing="ease-in"
                        data-aos-duration="300"
                        data-aos-delay="50"
                    // data-aos-once="true"
                    >
                        <img src={value} alt="content card image" style={aspectRatio ? { aspectRatio: aspectRatio } : {}} />
                    </div>
                );
            } else if ('text' in item) {
                const { text } = item;
                return (
                    <p className="content-card-two__content-text"
                        key={index}
                        data-aos="zoom-in-right"
                        data-aos-easing="ease-in"
                        data-aos-duration="300"
                        data-aos-delay="50"
                    // data-aos-once="true"
                    >
                        {text.map((textItem, i) => (
                            <span
                                key={i}
                                className={'content-card-two__content-text-span'}
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
        <div className="content-card-two" style={{ backgroundColor: 'transparent' }}>
            {/* <div className="content-card-two__top-title" style={{ color: accentColor }}>
                <h3>{topTitle}</h3>
            </div> */}
            <div className="content-card-two__content">
                {renderContent()}
            </div>
            {/* {buttonScrollLink
                ? <div>
                    <Button
                        // className="content-card-two__button"
                        style={divStyles}
                        label="Контакт"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => scroller.scrollTo(buttonScrollLink, { smooth: true, duration: 100 })}
                    />
                </div> : ''
            }
            {
                buttonPageLink ?
                    <Link aria-label="content card redirect to stripe other website page button or contact" to={buttonPageLink}>
                        <Button
                            aria-label="content card redirect to stripe other website page button or contact"
                            // className="content-card-two__button"
                            style={divStyles}
                            label="Контакт"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                    </Link> : ''
            } */}
            {buttonScrollLink
                ? <div>
                    <button
                        className="content-card-two__button"
                        style={divStyles}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => scroller.scrollTo(buttonScrollLink, { smooth: true, duration: 100 })}
                    >{buttonText}</button>
                </div> : ''
            }
            {
                buttonPageLink ?
                    <Link aria-label="content card redirect to stripe other website page button or contact" to={buttonPageLink}>
                        <button
                            aria-label="content card redirect to stripe other website page button or contact"
                            className="content-card-two__button"
                            style={divStyles}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >{buttonText}</button>
                    </Link> : ''
            }

        </div >
    );
};



export default ContentCard