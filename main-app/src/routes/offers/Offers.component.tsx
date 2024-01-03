import './Offers.styles.scss'
import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component'
import OffersPageHero from '../../components/offers-page-hero/OffersPageHero.component'
import ResponsiveContainer from '../../components/layout/responsiveContainer/ResponsiveContainer'
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component'

const Offers = () => {
    return (
        <div>
            <UnderNavBar />
            <OffersPageHero />
            <ResponsiveContainer>
                <h1>Offers</h1>
            </ResponsiveContainer>
            <FooterHomePage />
        </div>
    )
}

export default Offers