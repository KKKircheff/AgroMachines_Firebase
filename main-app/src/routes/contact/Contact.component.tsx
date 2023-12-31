import './Contact.styles.scss'
import ContatForm from '../../components/contact-form/contact-form.component'
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component'
import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component'

const Contact = () => {
    return (
        <div>
            <UnderNavBar />
            <ContatForm />
            <FooterHomePage />
        </div>
    )
}

export default Contact