import firebase from 'firebase';
import config from './firebase.key';

firebase.initializeApp(config);

const resources = {
  auth: firebase.auth(),
  provider: new firebase.auth.GoogleAuthProvider(),
  database: firebase.firestore().collection('test'),
  storage: firebase.storage(),
};

const authModule = {
  googleLogin: () => {
    resources.auth.signInWithPopup(resources.provider)
      .then((res)=>{
        console.log(res);
      })
      .catch((error)=>{
        console.error(error);
    });
  },
  facebookLogin: () => {

  }
};

export default authModule;
