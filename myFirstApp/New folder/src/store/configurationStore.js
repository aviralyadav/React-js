import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducer
});

const configurationStore = () =>{
    return createStore(rootReducer);
};

export default configurationStore;