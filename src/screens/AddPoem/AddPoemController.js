
const addPoem = data => {
    const firebase = require('firebase/database');
    const URL = '/poems/';
    const nextId = 
        firebase
            .ref()
            .child('poems')
            .push()
            .key;

    const newPoem = {};
    newPoem[URL + nextId] = data;
    
    return firebase
            .ref()
            .update(newPoem);
};

export {
    addPoem
};