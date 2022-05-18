import { put, call, takeEvery, select } from "redux-saga/effects";
import { setRental, setStock, setCanSubmit } from "../features/calender.slice";
import {getItemProps, setCartModalDisabled} from "../../api";

function* getRental() {
	const state = yield select();
	const rental = yield call( getItemProps, state );

	if ( rental ) {
		yield put( setRental( rental ) );
		yield put( setStock( rental.units > 0 ) );
		yield put( setCanSubmit( Array.isArray( rental ) ) );
	}
}

export default function* watchRental() {
	yield takeEvery( 'item_list_calender/setSelectedItem', getRental );
	yield takeEvery( 'item_list_calender/setCartItem', getRental );
	yield takeEvery( 'item_list_calender/setDateTo', getRental );
	yield takeEvery( 'item_list_calender/setPickTimeValue', getRental );
	yield takeEvery( 'item_list_calender/setDropTimeValue', getRental );
	yield takeEvery( 'item_list_calender/setUnits', getRental );
	yield takeEvery( 'item_list_calender/setCanSubmit', setCartModalDisabled );
}
