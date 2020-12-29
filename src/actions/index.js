import { IMAGES, STATS } from '../constants';

const loadImages = () => {
    return {
        type: IMAGES.LOAD,
    };
};

const setImages = (images, nextPage) => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const loadImagesStats = id => {
    return {
        type: STATS.LOAD,
        id,
    };
};

const setImagesStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
});

const setImageStatError = id => ({
    type: IMAGES.LOAD_FAIL,
    id,
});

export {
    loadImages,
    setImages,
    setError,
    loadImagesStats,
    setImageStatError,
    setImagesStats,
};
