import { Helmet } from "react-helmet";

const OffersHelmet = () => {
    return (
        <Helmet>
            <title>Оферти поливни макари и земеделска техника</title>
            <meta
                name="description"
                content="Оферти поливни макари, високонапорни помпи и земеделска техника втора употреба налични в Холандия." />
            <meta
                name="keywords"
                content="Поливни макари, поливна система, внос, продажба, земеделски машини, високо напорни помпи, трактори, Нидерланидя, втора употреба, отлично качество, отлични, изгодно, Пазарджик, agro-machines.nl" />
            <meta name="author" content="Agro Machines, Enschede, Nederland" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Оферти поливни макари и земеделска техника" />
            <meta property="og:site_name" content="agro-machines.nl/offers" />
            <meta property="og:url" content="https://agro-machines.nl/offers" />
            <meta
                property="og:image"
                content="https://agro-machines.nl/hero-images/offersHero.webp" />
            <meta
                property="og:description"
                content="Оферти поливни макари, високонапорни помпи и земеделска техника втора употреба налични в Нидерландия. office@agro-machines.nl, телефон: +359 876 962484" />
        </Helmet>
    );
}

export default OffersHelmet;