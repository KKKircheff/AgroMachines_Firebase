import './OfferItemPage.styles.scss'
import ResponsiveContainer from '../../components/layout/responsiveContainer/ResponsiveContainer'
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { db, getFirebaseStorageImageUrl } from "../../utils/firebase-utils";
import { getDocs, collection, query, where } from 'firebase/firestore'
import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component';
import SectionLoadSpinner from '../../components/ui/sectionLoadSpinner/SectionLoadSpinner.component';
import OfferItemPageCard from '../../components/offer-item-page-card/OfferItemPageCard.component';
import OfferItemPageHero from '../../components/offer-item-page-hero/OfferItemPageHero.component';
import { OfferCardProps } from '../offers/Offers.component';


const OfferItemPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [cardData, setCardData] = useState<OfferCardProps | null>(null);
    const [photosUrls, setPhotosUrls] = useState<string[]>([]);

    const firestoreCollection = 'offerCards';
    const storageFolder = 'offers';

    useEffect(() => {
        const fetchData = async () => {

            try {
                /* Get galleryCard data from Firestore based on 'name'*/
                const offerRef = collection(db, firestoreCollection);
                const q = query(offerRef, where("name", "==", id));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const data = querySnapshot.docs[0].data() as OfferCardProps;
                    /* Get all urls from Firebase Storage based on 'storage folder and number of photos*/
                    const imgUrlArray = await Promise.all(
                        Array.from({ length: data.numberOfPhotos }, async (_, index) => {
                            const fullPath = `${storageFolder}/${id}/${index + 1}.webp`
                            const data = await getFirebaseStorageImageUrl(fullPath);
                            return data;
                        })
                    )
                    setPhotosUrls(imgUrlArray);
                    setCardData(data);
                } else {
                    console.log('No such document!')
                    navigate("/offers");
                }
            } catch {
                console.log('Error in Offer')
                navigate("/offers");
            }
        };

        fetchData();
    }, [id, navigate]);

    return (
        <div className='offer-item-page'>
            <UnderNavBar />
            {photosUrls ? <OfferItemPageHero imageUrl={photosUrls[0]} /> : <SectionLoadSpinner />}
            <ResponsiveContainer gradientColor='#f5f5f5' gradientColor1='#f5f5f5' >
                {photosUrls && cardData
                    ? <OfferItemPageCard cardData={cardData} photosUrls={photosUrls} />
                    : <SectionLoadSpinner />}
            </ResponsiveContainer>
            <FooterHomePage />
        </div>
    )
}

export default OfferItemPage