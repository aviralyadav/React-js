import { ADD_PLACE, DELETE_PLACE } from './actionTypes';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCoWeGj3eUA6udkYB-wNaoPhNOg1Nu_cms",
    authDomain: "awesome-places-rn-4c1f8.firebaseapp.com",
    databaseURL: "https://awesome-places-rn-4c1f8.firebaseio.com",
    projectId: "awesome-places-rn-4c1f8"
  };
  firebase.initializeApp(config);
  if (!firebase.apps.length) {
    firebase.initializeApp({});
}

export const addPlace = (placeName, location) => {
    const placeData = {
        name: placeName,
        location: location
    };
    console.log(placeData);
    return dispatch => {
        fetch("https://awesome-places-rn-4c1f8.firebaseio.com/places.json", {
            method: "POST",
            body: JSON.stringify(placeData)
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedRes => console.log(parsedRes));
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
}

// export const selectPlace = (key) => {
//     return {
//         type: SELECT_PLACE,
//         placeKey: key
//     }
// }

// export const deselectPlace = () => {
//     return {
//         type: DESELECT_PLACE
//     }
// }