import { put, takeEvery } from "redux-saga/effects";

function* setLoading(){
	yield put({ type: 'item_list_calender/setLoading' , payload: false })
}

function* resetLoader(){
	yield put({ type: 'item_list_calender/setLoading' , payload: true })
}

export default function* watchLoading() {
	yield takeEvery('item_list_calender/setRental', setLoading);
	yield takeEvery('item_list_calender/setSelectedItem', resetLoader);
	yield takeEvery('item_list_calender/setSelectedItem', setLoading);
	yield takeEvery('item_list_calender/setUnits', resetLoader);
	yield takeEvery('item_list_calender/setDateTo', resetLoader);
}
