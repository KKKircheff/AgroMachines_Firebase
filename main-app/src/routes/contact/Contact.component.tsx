import './Contact.styles.scss'
import ContatForm from '../../components/contact-form/contact-form.component'
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component'
import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component'
import ContactPageHero from '../../components/contact-page-hero/ContactPageHero.component'
import ResponsiveContainerTwoSections from '../../components/layout/responsiveContainerTwoSections/ResponsiveContainerTwoSections.component'

const Contact = () => {
    return (
        <div>
            <UnderNavBar />
            <ContactPageHero />
            <ResponsiveContainerTwoSections
                leftPanel={<ContatForm />}
                rightPanel={<ContatForm />}
                gradientColor1='#f5f5f5'
                gradientColor='#f5f5f5'
            />
            <FooterHomePage />
        </div>
    )
}

export default Contact