import { takeLatest, call, put, select } from 'redux-saga/effects';
import { fetchImages } from '../apis';
import { IMAGES } from '../constants';
import { setImages, setError } from '../actions';
import { takeEvery } from 'redux-saga';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (err) {
        yield put(setError(err.message));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
