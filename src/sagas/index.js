import imageSage from './imageSaga';
import statSaga from './statSaga';
import { all } from 'redux-saga/effects';
// watcher
function* rootSaga() {
    yield all([imageSage(), statSaga()]);
}

// watcher saga => action => worker saga

export default rootSaga;
