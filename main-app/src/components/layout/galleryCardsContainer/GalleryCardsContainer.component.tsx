import './GalleryCardsContainer.styles.scss'
import { useEffect, useState } from 'react';
import GalleryCard from '../../galleryCard/GalleryCard.component';

import { db } from '../../../utils/firebase-utils';
import { collection, getDocs } from 'firebase/firestore'
import PageLoaderSkeleton from '../pageLoaderSkeleton/PageLoaderSkeleton.component';

interface GalleryCardProps {
    name: string;
    title: string;
    subtitle: string;
    content: string;
    cardImgUrl: string;
    numberOfPhotos: number;
}

const GalleryCardsContainer = () => {
    const [cardsData, setCardsData] = useState<GalleryCardProps[] | null>(null);
    const firestoreCollection = 'galleryCards';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: GalleryCardProps[] = [];
                const querySnapshot = await getDocs(collection(db, firestoreCollection));
                querySnapshot.forEach((doc) => {
                    data.push(doc.data() as GalleryCardProps);
                });
                setCardsData(data);
            } catch (error) {
                console.log('Error fetching data from Firestore', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='gallery-cards-container' >
            {cardsData ? cardsData.map((cardData: GalleryCardProps, index) => {
                return (
                    <GalleryCard
                        key={index}
                        name={cardData.name}
                        title={cardData.title}
                        subtitle={cardData.subtitle}
                        content={cardData.content}
                        cardImgUrl={cardData.cardImgUrl}
                        numberOfPhotos={cardData.numberOfPhotos}
                    />
                )
            }) :
                <div className='gallery-cards-container__page-loader'>
                    <div className='gallery-cards-container__page-loader-spinner' ></div>
                </div>
            }
        </div>
    )
}

export default GalleryCardsContainer