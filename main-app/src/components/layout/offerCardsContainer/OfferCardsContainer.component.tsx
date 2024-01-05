import './OfferCardsContainer.styles.scss'
import { useEffect, useState } from 'react';
import OfferCard from '../../offer-card/OfferCard.component';

import { db } from '../../../utils/firebase-utils';
import { collection, getDocs } from 'firebase/firestore'
import PageLoaderSkeleton from '../pageLoaderSkeleton/PageLoaderSkeleton.component';
import SectionLoadSpinner from '../../ui/sectionLoadSpinner/SectionLoadSpinner.component';
import { OfferCardProps } from '../../../routes/offers/Offers.component';


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
                        {...cardData}
                    />
                )
            }) :
                <SectionLoadSpinner />
            }
        </div>
    )
}

export default OfferCardsContainer