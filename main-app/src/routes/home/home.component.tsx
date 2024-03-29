
import './home.style.scss'
import "aos/dist/aos.css";
import { Suspense, lazy } from 'react';
import HomePageHero from '../../components/home-page-hero/HomePageHero.component';
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component';
import ResponsiveContainer from '../../components/layout/responsiveContainer/ResponsiveContainer';
import InfoCardsContainer from '../../components/layout/infoCardsContainer/InfoCardsContainer.component';
import CountersContainer from '../../components/layout/countersContainer/CountersContainer.component';
import LogoCarouselContainer from '../../components/layout/logoCarouselContainer/LogoCarouselContainer.component';
import IrrigationLogos from '../../components/irrigationLogos/IrrigationLogos.component';
import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component';

const Home = () => {

    return (
        <>
            {/* <HomeHelmet /> */}
            <div className='home-wrapper'>
                <UnderNavBar />
                <HomePageHero />
                <LogoCarouselContainer backgroundColor='#fff'>
                    <IrrigationLogos backgroundColor='#fff' />
                </LogoCarouselContainer>
                <ResponsiveContainer gradientColor='#f5f5f5' gradientColor1='#f5f5f5'>
                    <CountersContainer />
                    <InfoCardsContainer />
                </ResponsiveContainer>
                <LogoCarouselContainer backgroundColor='#f5f5f5'>
                    <IrrigationLogos backgroundColor='#f5f5f5' />
                </LogoCarouselContainer>
                <FooterHomePage />
            </div>
        </>
    )
}

export default Home