import { Helmet } from "react-helmet"

const ContactHelmet = () => {
    return (
        <Helmet>
            <title>Връзка с Agro-machines.nl </title>
            <meta
                name="description"
                content="Контакти за поливни макари и земеделска техника втора употреба налични в Холандия: емайл: office@agro-machines.nl, телефон: +359 876 962484" />
            <meta
                name="keywords"
                content="Поливни макари, поливна система, внос, продажба, Холандия, Нидерландия, земеделски машини, високо напорни помпи, трактори, Нидерланидя, втора употреба, отлично качество, отлични, изгодно, Пазарджик, agro-machines.nl" />
            <meta name="author" content="Agro Machines, Enschede, Nederland" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Контакти" />
            <meta property="og:site_name" content="agro-machines.nl/contact" />
            <meta property="og:url" content="https://agro-machines.nl/contact" />
            <meta
                property="og:image"
                content="https://agro-machines.nl/hero-images/contactHero.webp" />
            <meta
                property="og:description"
                content="Контакти за поливни макари, високонапорни помпи и земеделска техника втора употреба налични в Холандия. емайл: office@agro-machines.nl, телефон: +359 876 962484" />
        </Helmet>
    )
}

export default ContactHelmet