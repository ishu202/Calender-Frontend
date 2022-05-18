import { compact , map , filter , head , split } from "lodash";
import MatchURL from "./MatchURL";

const appTypeMap = {
	item: 'item-page',
	cart: 'cart-page',
	checkout: 'checkout-page',
	dashboard: 'checkout-page',
	default: 'product-list'
}

export const getAppType = () => {
	let { default: defaultType, ...appTypes } = appTypeMap;
	let addr = compact(split(window.location.href, "/"));

	return MatchURL( appTypes, defaultType );
};
