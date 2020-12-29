import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    images: imagesReducer,
    isLoading: loadingReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
});

export default rootReducer;
