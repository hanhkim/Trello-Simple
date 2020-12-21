import { take, fork, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../apis';
import { loadImagesStats, setImageStatError, setImagesStats } from '../actions';

function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImagesStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImagesStats(id, res.downloads.total));
            return true;
        } catch (error) {}
    }
    yield put(setImageStatError(id));
}

export default function* watchStatsRequest() {
    while (true) {
        // we get the action here
        const { images } = yield take(IMAGES.LOAD_SUCCESS);
        console.log('images: ', images);

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}
