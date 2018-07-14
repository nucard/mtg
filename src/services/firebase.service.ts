import * as firebase from 'firebase-admin';

export class FirebaseService {
    public getFirebaseClient() {
        if (firebase.apps.length === 0) {
            firebase.initializeApp({
                // TODO: this will break for now cuz I can't commit the key to the repo, but i don't need firebase right now anyway
                // credential: firebase.credential.cert(require('../../firebase-key.json')),
            });
        }

        return firebase.firestore();
    }
}
