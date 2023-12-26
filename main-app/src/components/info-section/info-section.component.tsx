import Counter from '../ui/counter/counter.component';
// import ContentCard from '../content-card/content-card.component';
// import { cardContent } from '../../application-data/content-card-data'

import { counetrsContent } from '../../application-data/counters-content';
import ContentCard from '../../components/ContentCardAdvanced/ContentCard.component';
import { infoCardsContent } from '../../application-data/content-card-advanced-data';

import './info-section.style.scss'


const InfoSection = () => {


    return (

        <div className='u-c-w info-section'>
            <div className="counter-container">
                {counetrsContent.map((counterItem, index) => {
                    return <Counter
                        key={index}
                        countFrom={counterItem.countFrom}
                        countTo={counterItem.countTo}
                        content={counterItem.content}
                        countAddOn={counterItem.countAddOn}
                    />
                })}
            </div>

            <div id='card-content-container' className="card-content-container">
                {infoCardsContent.map((card, index) => <ContentCard key={index} {...card} aspectRatio='600/600' />)}
            </div>
            {/* <div className="logos-image-container" data-aos="fade-in">
                <img src="https://i.ibb.co/Z8T4cvr/second-hand-machines-brands-ordered-low-res.jpg" alt="поливни макари марки" />
            </div> */}
        </div>
    )
}

export default InfoSection