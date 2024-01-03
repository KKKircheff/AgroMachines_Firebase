import './InfoCardsContainer.styles.scss'
// import ContentCard from '../../ContentCardAdvanced/ContentCard.component';
import { infoCardsContent } from '../../../application-data/content-card-advanced-data';
import ContentCardAdvancedGrid from '../../content-card-advanced-grid/ContentCardAdvancedGrid.component';
import RenderIfVisible from 'react-render-if-visible';


const InfoCardsContainer = () => {
    return (
        <section className='info-cards-container'>
            {infoCardsContent.map((card, index) => <ContentCardAdvancedGrid
                {...card}
                aspectRatio='600/600' />)}
        </section>
    )
}

export default InfoCardsContainer