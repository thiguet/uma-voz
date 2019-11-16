const init = () => {
    const firebase = require("firebase/app");
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBmHlryED_VAvvqoQAWoG8AMzuahvJRa-A",
        authDomain: "uma-voz.firebaseapp.com",
        databaseURL: "https://uma-voz.firebaseio.com",
        projectId: "uma-voz",
        storageBucket: "uma-voz.appspot.com",
        messagingSenderId: "105166756409",
        appId: "1:105166756409:web:2edfe4d6a5ccc033"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

const firebase = () => require("firebase/database");

const save = (url, data) => {
    const firebase = require("firebase/database");
    
    return firebase
                .ref( url )
                .set( data );
};

const retrieve = (url) => {
    const firebase = require("firebase/database");
    
    return firebase
                .ref( url )
                .once('value')
                .then( snapshot => snapshot.val() )
};

export {
    firebase,
    save,
    retrieve,
    init
};