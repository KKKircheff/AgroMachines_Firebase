// @ts-ignore
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// @ts-ignore
import {getAuth} from 'firebase/auth';
// @ts-ignore
import {getFirestore} from 'firebase/firestore';
// @ts-ignore
import {firebaseConfig} from '../application-data/firebase-config';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const analitycs = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const getFirebaseStorageImageUrl = async (fullPath: string) => {
    try {
        const pathReference = ref(storage, fullPath);
        const url = await getDownloadURL(pathReference);
        const newUrl = new URL(url, import.meta.url).href;
        return newUrl;
    } catch (error) {
        return 'https://firebasestorage.googleapis.com/v0/b/red-digit-ai.appspot.com/o/blogs%2FblogPost-empty%2Fred-digit-ai-default.webp?alt=media&token=290a56ea-1f0a-4eaa-8b80-bada0add9fa1'; // Return null if there's an error
    }
};

export default app;
