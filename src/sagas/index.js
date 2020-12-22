import statSaga from './statSaga';
import { all } from 'redux-saga/effects';
// watcher
function* rootSaga() {
    yield all([statSaga()]);
}

// watcher saga => action => worker saga

export default rootSaga;
