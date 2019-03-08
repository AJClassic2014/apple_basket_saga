import { takeEvery, takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
//import axios from 'axios';
//import { BEGIN_GET_POSTS, GET_POSTS, GET_POSTS_ERROR } from '../reducers';
import { START_PICK_APPLE, FINISH_PICK_APPLE, ERROR_PICK_APPLE, EAT_APPLE } from '../actions/appleActions';

// worker saga
function* showPostsAsync(action) {
    try {
        const response = yield call(fetch, './src/assets/json/model_60.json');
        console.log(1111111111)
        if (response.status != 200) yield put({ type: 'apple/ERROR_PICK_APPLE',
    payload: new Error(response.statusText),
    error: true
  }); 
        let appleWeight = Math.floor(200 + Math.random() * 50);
        yield put({
    type: 'apple/FINISH_PICK_APPLE',
    payload: appleWeight,
  }); 
    } catch(e) {
        yield put({ type: 'apple/ERROR_PICK_APPLE',
    payload: new Error(e),
    error: true
  });
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