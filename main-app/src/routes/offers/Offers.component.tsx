import './Offers.styles.scss'
import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component'
import OffersPageHero from '../../components/offers-page-hero/OffersPageHero.component'
import ResponsiveContainer from '../../components/layout/responsiveContainer/ResponsiveContainer'
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component'
import GalleryCardsContainer from '../../components/layout/galleryCardsContainer/GalleryCardsContainer.component'
import OfferCardsContainer from '../../components/layout/offerCardsContainer/OfferCardsContainer.component'

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