import './Contact.styles.scss'
import ContatForm from '../../components/contact-form/contact-form.component'
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component'
import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component'
import ContactPageHero from '../../components/contact-page-hero/ContactPageHero.component'
import ResponsiveContainerTwoSections from '../../components/layout/responsiveContainerTwoSections/ResponsiveContainerTwoSections.component'
import ColumnCardsContainer from '../../components/layout/columnCardsContainer/ColumnCardsContainer.component'
import ContactInfoTopCard from '../../components/contact-info-top-card/ContactInfoTopCard.component'
import ContactInfoBottomCard from '../../components/contact-info-bottom-card/ContactInfoBottomCard.component'
import ContactHelmet from './Contact.helmet'

const Contact = () => {
    return (
        <div>
            <UnderNavBar />
            {/* <ContactHelmet /> */}
            <ContactPageHero />
            <ResponsiveContainerTwoSections
                gradientColor1='#f5f5f5'
                gradientColor='#f5f5f5'
                leftPanel={<ContatForm />}
                rightPanel={
                    <ColumnCardsContainer>
                        <ContactInfoTopCard />
                        <ContactInfoBottomCard />
                    </ColumnCardsContainer>
                }
            />
            <FooterHomePage />
        </div>
    )
}

export default Contact