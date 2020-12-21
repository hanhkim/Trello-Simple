import { STATS } from '../constants';

const statsReducer = (state = {}, action) => {
    switch (action.type) {
        case STATS.LOAD:
            return {
                ...state,
                [action.id]: {
                    idLoading: true,
                    downloads: null,
                    error: false,
                },
            };
        case STATS.LOAD_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    idLoading: false,
                    downloads: action.downloads,
                    error: false,
                },
            };
        case STATS.LOAD_FAIL:
            return {
                ...state,
                [action.id]: {
                    idLoading: false,
                    downloads: null,
                    error: true,
                },
            };
        default:
            return false;
    }
};

export default statsReducer;
