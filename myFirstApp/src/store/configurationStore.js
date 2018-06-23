import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducer
});

const configurationStore = () =>{
    return createStore(rootReducer, applyMiddleware(thunk));
};

export default configurationStore;