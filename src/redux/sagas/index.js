import { takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import actions from '../actions/appleActions';

// worker saga
function* showPostsAsync(action) {
    try {
        const response = yield call(fetch, './src/assets/json/model_60.json');
        if (response.status != 200) yield put(actions.errorPickApple(response.statusText)); 
        let appleWeight = Math.floor(200 + Math.random() * 50);
        yield put(actions.finishPickApple(appleWeight)); 
    } catch(e) {
        yield put(actions.errorPickApple(e));
    }
}

// wacther saga
function* watchGetPosts() {
    yield takeLatest(actions.stratPickApple().type, showPostsAsync);
}

// root saga
export default function* rootSaga() {
    yield watchGetPosts()
} 