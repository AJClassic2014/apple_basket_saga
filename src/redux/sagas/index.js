import { takeEvery, takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
//import axios from 'axios';
//import { BEGIN_GET_POSTS, GET_POSTS, GET_POSTS_ERROR } from '../reducers';
import { START_PICK_APPLE, FINISH_PICK_APPLE, ERROR_PICK_APPLE, EAT_APPLE } from '../actions/appleActions';

// worker saga
function* showPostsAsync(action) {
    try {
        const response = yield call(fetch, './src/assets/json/model_60.json');
        if (response.status != 200) yield put(ERROR_PICK_APPLE(response.statusText)); 
        let appleWeight = Math.floor(200 + Math.random() * 50);
        yield put(FINISH_PICK_APPLE(appleWeight)); 
    } catch(e) {
        yield put(ERROR_PICK_APPLE(e));
    }
}

// wacther saga
function* watchGetPosts() {
    yield takeLatest(START_PICK_APPLE, showPostsAsync);
}

// root saga
export default function* rootSaga() {
    yield watchGetPosts()
} 