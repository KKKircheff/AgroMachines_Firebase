import './GalleryItemPageCard.styles.scss'

import { useNavigate } from 'react-router-dom';

import SlickImageGallery from '../ui/slick-image-gallery/SlickImageGallery.component';
import Button from '../ui/button/button.component';

type GalleryItemProps = {
    cardData: {
        name: string;
        title: string;
        subtitle: string;
        content: string;
        cardImgUrl: string;
        numberOfPhotos: number;
    }
    photosUrls: string[];
}

const GalleryItemPageCard = ({ cardData, photosUrls }: GalleryItemProps) => {
    const navigate = useNavigate();
    return (
        <div className='gallery-item-page-card' >
            < div className='gallery-item-page-card__card'>
                <div className='gallery-item-page-card__card__gallery'>
                    <SlickImageGallery imgUrls={photosUrls} />
                </div>

                <div className='gallery-item-page-card__card__content'>
                    <h2>{cardData.title}</h2>
                    <h3>{cardData.subtitle}</h3>
                    {/* <p>{cardData.content}</p> */}
                    <p>Поливните макари са ефективно средство за осигуряване на вода за различни видове селскостопански култури, като зеленчуци, плодове, житни култури и др. Технологията им позволява равномерно разпределение на водата върху почвата, осигурявайки оптимални условия за растеж и развитие на растенията. Този метод на поливане помага в оптимизирането на употребата на вода, като намалява загубите от изпарение и прекомерното овлажняване, увеличава на добивите, подобрявакачеството на реколтата и намаляване на зависимостта от нестабилни атмосферни условия. Поливните макари могат да бъдат настроени за различни степени на овлажненост на почвата и нуждите на конкретните култури.</p>
                    <Button buttonType='primary' onClick={() => navigate('/contact')}>Контакт</Button>
                </div>
            </div>

        </div >
    )
}

export default GalleryItemPageCard