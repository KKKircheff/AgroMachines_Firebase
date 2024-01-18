import { Helmet } from "react-helmet";

const HomeHelmet = () => {
    return (
        <Helmet>
            <title>Agro Machines Nederland</title>
            <meta
                name="description"
                content="Внос продажба и доставка от Нидерландия на поливни макари, поливни системи, високо напорни прикачнии водни помпи, трактори и други земеделски машини втора употреба." />
            <meta
                name="keywords"
                content="поливни макари, поливна система, внос, продажба, земеделски машини, високо напорни помпи, трактори, Нидерланидя, втора употреба, отлично качество, отлични, изгодно, Пазарджик, agro-machines.nl" />
            <meta name="author" content="Red Digit, Enschede, Nederland" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Agro Machines Nederland" />
            <meta property="og:site_name" content="agro-machines.nl" />
            <meta property="og:url" content="https://agro-machines.nl" />
            <meta
                property="og:image"
                content="https://agro-machines.nl/hero-images/homeHero.webp" />
            <meta
                property="og:description"
                content="Внос, продажба и доставка от Нидерландия на поливни макари, високо напорни помпи, трактори и други земеделски машини втора употреба, office@agro-machines.nl, телефон: +359 876 962484" />
        </Helmet>
    )
}

export default HomeHelmet