
const addPoem = data => {
    const firebase = require('firebase');
    const URL = '/poems/';
    const nextId = 
        firebase
            .database()
            .ref()
            .child('poems')
            .push()
            .key;

    const newPoem = {};
    newPoem[URL + nextId] = data;
    
    return firebase
            .database()
            .ref()
            .update(newPoem);
};

export {
    addPoem
};