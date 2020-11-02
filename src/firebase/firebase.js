import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBGjaKAxJMjvlIFFtll1yhVOQbNHWMXsNo",
    authDomain: "whatsapp-clone-47156.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-47156.firebaseio.com",
    projectId: "whatsapp-clone-47156",
    storageBucket: "whatsapp-clone-47156.appspot.com",
    messagingSenderId: "272654563129",
    appId: "1:272654563129:web:0080be86fa458116d01ae8"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };