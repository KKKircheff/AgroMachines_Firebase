import './GalleryItemPage.styles.scss'
import ResponsiveContainer from '../../components/layout/responsiveContainer/ResponsiveContainer'
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Image } from 'primereact/image';

import { db, getFirebaseStorageImageUrl } from "../../utils/firebase-utils";
import { getDocs, collection, query, where } from 'firebase/firestore'
import PrimeGallery from '../../components/ui/prime-image-gallery/PrimeGallery.component';
import UnderNavBar from '../../components/ui/underNavBar/UnderNavBar.component';
import SectionLoadSpinner from '../../components/ui/sectionLoadSpinner/SectionLoadSpinner.component';
import GalleryItemPageCard from '../../components/gallery-item-page-card/GalleryItemPageCard.component';
import GalleryCardsContainer from '../../components/layout/galleryCardsContainer/GalleryCardsContainer.component';
import GalleryItemPageHero from '../../components/gallery-item-page-hero/GalleryItemPageHero.component';
// import GalleryHero from '../../components/gallery-hero/GalleryHero.component';

interface GalleryCard {
    name: string;
    title: string;
    subtitle: string;
    content: string;
    cardImgUrl: string;
    numberOfPhotos: number;
}

const GalleryItemPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [cardData, setCardData] = useState<GalleryCard | null>(null);
    const [photosUrls, setPhotosUrls] = useState<string[]>([]);

    const firestoreCollection = 'galleryCards';
    const storageFolder = 'gallery';


    useEffect(() => {
        const fetchData = async () => {

            try {
                /* Get galleryCard data from Firestore based on 'name'*/
                const galleryRef = collection(db, firestoreCollection);
                const q = query(galleryRef, where("name", "==", id));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const data = querySnapshot.docs[0].data() as GalleryCard;
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
                    navigate("/gallery");
                }
            } catch {
                console.log('Error in Gallery')
                navigate("/gallery");
            }
        };

        fetchData();
    }, [id, navigate]);

    const icon = (<i className="pi pi-search"></i>)
    return (
        <div className='gallery-item-page'>
            <UnderNavBar />
            {photosUrls ? <GalleryItemPageHero imageUrl={photosUrls[0]} /> : <SectionLoadSpinner />}
            <ResponsiveContainer gradientColor='#f5f5f5' gradientColor1='#f5f5f5' >
                {photosUrls && cardData
                    ? <GalleryItemPageCard cardData={cardData} photosUrls={photosUrls} />
                    : <SectionLoadSpinner />}
            </ResponsiveContainer>
            <FooterHomePage />
        </div>
    )
}

export default GalleryItemPage