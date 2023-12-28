import './InfoCardsContainer.styles.scss'
import ContentCard from '../../ContentCardAdvanced/ContentCard.component';
import { infoCardsContent } from '../../../application-data/content-card-advanced-data';

const InfoCardsContainer = () => {
    return (
        <section className='info-cards-container'>
            {infoCardsContent.map((card, index) => <ContentCard key={index} {...card} aspectRatio='600/600' />)}
        </section>
    )
}

export default InfoCardsContainer