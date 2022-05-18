import { all } from "redux-saga/effects";
import initApp, {watchReset} from "./init.saga";
import itemSaga from "./item.saga";
import watchRental from "./rental.saga";
import watchLoading from "./overlay.saga";

export default function* rootSaga( store ) {
	yield all([
		watchReset() ,
		initApp(),
		itemSaga(),
		watchRental(),
		watchLoading()
	]);
}
