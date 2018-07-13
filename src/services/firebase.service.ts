import * as firebase from 'firebase-admin';

export class FirebaseService {
    public getFirebaseClient() {
        if (firebase.apps.length === 0) {
            firebase.initializeApp({
                credential: firebase.credential.cert(require('../../firebase-key.json')),
            });
        }

        return firebase.firestore();
    }
}