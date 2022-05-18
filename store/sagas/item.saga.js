import { all, put, call, select, take, takeEvery, takeLatest } from "redux-saga/effects";
import { setSelectedItem, setItemListData, setCartItem, setLoading, resetStore } from "../features/calender.slice";

import { getTool } from "../../api";
import { getCartSessionItem } from "../../api/getItem";

function* getItem() {
	const [ app_type, cart_session ] = yield all([
		select( state => state.item_list_calender.app_type ),
		select( state => state.item_list_calender.cart_session )
	]);

	const itemInfo = yield call( getTool, app_type, cart_session );

	if ( itemInfo ) {
		if ( app_type === 'item-page' ) {
			yield put( setSelectedItem( itemInfo ) );
		} else if ( app_type === 'product-list' || app_type === 'checkout-page' ) {
			yield put( setItemListData({items: itemInfo.data}) );
		} else if ( app_type === 'cart-page' ) {
			if (!!cart_session) {
				let [ item, rental ] = itemInfo;

				yield put( setSelectedItem( item ) );
				yield put( setCartItem( rental ) );
			}
		}
	}
}

function* LoadedIfProduct() {
	yield put( setLoading( false ) );
}

export default function* watchInitialization() {
	yield takeLatest( 'item_list_calender/setAppType', getItem );
	yield takeLatest( 'item_list_calender/setCartSession', getItem );
	yield takeEvery( 'item_list_calender/setItemListData', LoadedIfProduct );
}
