import { IMAGES } from '../constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return true;
        case IMAGES.LOAD_SUCCESS:
        case IMAGES.LOAD_FAIL:
        default:
            return false;
    }
};

export default loadingReducer;
