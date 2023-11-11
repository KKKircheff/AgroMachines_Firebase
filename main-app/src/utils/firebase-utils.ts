// @ts-ignore
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// @ts-ignore
import {getAuth} from 'firebase/auth';
// @ts-ignore
import {getFirestore} from 'firebase/firestore';
// @ts-ignore
import {firebaseConfig} from '../application-data/firebase-config';
import {getStorage} from 'firebase/storage';

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
export default app;
