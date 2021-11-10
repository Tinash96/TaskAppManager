import firebase from 'firebase/compat'


const firebaseConfig = {
    apiKey: "AIzaSyAt6tS_7HrTr6isJBTIb30IP-nLt6w1xfs",
    authDomain: "task-manager-6b978.firebaseapp.com",
    projectId: "task-manager-6b978",
    storageBucket: "task-manager-6b978.appspot.com",
    messagingSenderId: "494671479444",
    appId: "1:494671479444:web:4ddc42d03dcc159aa36a81"
  };

  firebase.initializeApp(firebaseConfig)

  export {firebase};