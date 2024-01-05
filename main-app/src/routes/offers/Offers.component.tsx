import './Offers.styles.scss'
import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component'
import OffersPageHero from '../../components/offers-page-hero/OffersPageHero.component'
import ResponsiveContainer from '../../components/layout/responsiveContainer/ResponsiveContainer'
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component'
import OfferCardsContainer from '../../components/layout/offerCardsContainer/OfferCardsContainer.component'

export interface OfferCardProps {
    name: string;
    title: string;
    subtitle: string;
    content: string;
    crops?: string[];
    cardImgUrl: string;
    numberOfPhotos: number;
    price: number,
    active: boolean,
}

const Offers = () => {
    return (
        <div>
            <UnderNavBar />
            <OffersPageHero />
            <ResponsiveContainer>
                <OfferCardsContainer />
            </ResponsiveContainer>
            <FooterHomePage />
        </div>
    )
}

export default Offers