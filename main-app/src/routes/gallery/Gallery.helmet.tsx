import { Helmet } from 'react-helmet'

const GalleryHelmet = () => {
    return (
        <Helmet>
            <title>Галерия</title>
            <meta
                name="description"
                content="Галерия снимки на поливни макари, високонапорни помпи и земеделска техника втора употреба налични в Холандия." />
            <meta
                name="keywords"
                content="Поливни макари, поливна система, внос, продажба, земеделски машини, високо напорни помпи, трактори, Нидерланидя, втора употреба, отлично качество, отлични, изгодно, Пазарджик, agro-machines.nl" />
            <meta name="author" content="Agro Machines, Enschede, Nederland" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Галерия" />
            <meta property="og:site_name" content="agro-machines.nl/gallery" />
            <meta property="og:url" content="https://agro-machines.nl/gallery" />
            <meta
                property="og:image"
                content="https://agro-machines.nl/hero-images/galleryHero.webp" />
            <meta
                property="og:description"
                content="Галерия снимки на поливни макари, високонапорни помпи и земеделска техника втора употреба налични в Холандия." />
        </Helmet>
    )

}

export default GalleryHelmet