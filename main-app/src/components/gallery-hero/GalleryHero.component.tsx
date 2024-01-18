import './GalleryHero.styles.scss'
import heroImage from '/hero-images/galleryHero1.webp'

const GalleryHero = () => {
    return (
        <div className='gallery-hero'>
            <div className='gallery-hero__content'
                data-aos="fade-in"
                data-aos-easing="ease-in"
                data-aos-duration="450"
                data-aos-delay="250">
                <p>ГАЛЕРИЯ</p>
                <h2>ДОСТАВЕНИ МАШИНИ</h2>
                <h3>някои от успешно доставените машини в България със съдействието на Agro Machines Nederland</h3>
            </div>
            <div className='gallery-hero__image'>
                <img src={heroImage} alt="Доставена поливна макара шириокоформатна снимка снимка" />
            </div>
            <div className='gallery-hero__dark-cover'>
            </div>
        </div>
    )
}

export default GalleryHero