import './GalleryItemPage.styles.scss'
import ResponsiveContainer from '../../components/layout/responsiveContainer/ResponsiveContainer'
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Image } from 'primereact/image';

import { db, storage, getFirebaseStorageImageUrl } from "../../utils/firebase-utils";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getDocs, collection, query, where } from 'firebase/firestore'
import PrimeGallery from '../../components/primeGallery/primeGallery.component';

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
                            console.log('fullPath:', fullPath);
                            const data = await getFirebaseStorageImageUrl(fullPath);
                            return data;
                        })
                    )
                    console.log('array urls:', imgUrlArray)
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
            <ResponsiveContainer>
                {cardData && photosUrls && <div>
                    <PrimeGallery imgUrls={photosUrls} />
                    <h2>{cardData.title}</h2>
                    <h3>{cardData.subtitle}</h3>
                    <p>{cardData.content}</p>
                </div>}
            </ResponsiveContainer>
            <FooterHomePage />
        </div>
    )
}

export default GalleryItemPage