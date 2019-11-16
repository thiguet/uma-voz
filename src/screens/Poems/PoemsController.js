const URL = '/poems/';

const getPoems = (callback) => {
    const firebase = require('firebase');
    
    var starCountRef = firebase
                        .database()
                        .ref(URL);
    return starCountRef.on('value', ( snapshot ) => {
        callback(snapshot)
    });
};

export {
    getPoems
};

