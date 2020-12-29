import { IMAGES } from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case IMAGES.LOAD_FAIL:
            return action.error;
        case IMAGES.LOAD:
        case IMAGES.LOAD_SUCCESS:
        default:
            return null;
    }
};

export default errorReducer;
