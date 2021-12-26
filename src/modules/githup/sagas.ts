import { getUserProfileAsync } from "./actions";
import { call, put, takeEvery} from 'redux-saga/effects';
import { getUserProfile, GithubProfile } from "../../api/github";
import { GET_USER_PROFILE } from ".";
import { AxiosError } from "axios";
function* getUserProfileSaga(action:ReturnType<typeof getUserProfileAsync.request>){
    try{
        const userProfile:GithubProfile = yield call(getUserProfile, action.payload);
        yield put(getUserProfileAsync.success(userProfile));
    }catch(e){
        if ((<any>e).isAxiosError) { 
            yield put(getUserProfileAsync.failure(<AxiosError>e));
        }
    }
}

export function* githubSaga(){
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}