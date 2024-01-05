import './OfferCardsContainer.styles.scss'
import { useEffect, useState } from 'react';
import OfferCard from '../../offer-card/OfferCard.component';

import { db } from '../../../utils/firebase-utils';
import { collection, getDocs } from 'firebase/firestore'
import PageLoaderSkeleton from '../pageLoaderSkeleton/PageLoaderSkeleton.component';
import SectionLoadSpinner from '../../ui/sectionLoadSpinner/SectionLoadSpinner.component';

interface OfferCardProps {
    name: string;
    title: string;
    subtitle: string;
    content: string;
    cardImgUrl: string;
    numberOfPhotos: number;
    price: number,
    active: boolean,
}

const OfferCardsContainer = () => {
    const [cardsData, setCardsData] = useState<OfferCardProps[] | null>(null);

    const firestoreCollection = 'offerCards';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: OfferCardProps[] = [];
                const querySnapshot = await getDocs(collection(db, firestoreCollection));
                querySnapshot.forEach((doc) => {
                    data.push(doc.data() as OfferCardProps);
                });
                setCardsData(data);
            } catch (error) {
                console.log('Error fetching data from Firestore', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='offer-cards-container' >
            {cardsData ? cardsData.map((cardData: OfferCardProps, index) => {
                return (
                    <OfferCard
                        key={index}
                        name={cardData.name}
                        title={cardData.title}
                        subtitle={cardData.subtitle}
                        content={cardData.content}
                        cardImgUrl={cardData.cardImgUrl}
                        numberOfPhotos={cardData.numberOfPhotos}
                        price={cardData.price}
                        active={cardData.active}
                    />
                )
            }) :
                <SectionLoadSpinner />
            }
        </div>
    )
}

export default OfferCardsContainer