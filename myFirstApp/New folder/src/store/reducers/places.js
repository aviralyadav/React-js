import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';
import placeImage from '../../assets/beautiful-place.jpg';

const INITIAL_STATE = {
    placeName: '',
    places: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: placeImage
                })
            };
        case DELETE_PLACE: 
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== action.placeKey
                })
            };
        // case SELECT_PLACE: 
        //     return {
        //         ...state,
        //         selectedPlace: state.places.find(place => {
        //             return place.key === action.placeKey;
        //         })
        //     };
        // case DESELECT_PLACE: 
        //     return {
        //         ...state,
        //         selectedPlace: null
        //     };    
        default: 
            return state;
    }
}

export default reducer;