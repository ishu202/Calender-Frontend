import {put, takeEvery, takeLatest} from "redux-saga/effects";
import { setAppType } from "../features/calender.slice";
import { getAppType } from "../../components/lib/url/AppType";

function* initApp() {
	let app_type = getAppType();
	yield put( setAppType( app_type ) );
}

export default initApp;

export function* watchReset(){
	yield takeLatest( 'item_list_calender/resetStore', initApp );
}
