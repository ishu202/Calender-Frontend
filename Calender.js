import React from "react";
import { useCalender } from "./store/hooks/calender.hook";

import ItemPage from "./components/item-page";
import ProductList from "./components/product-list";
import CartPage from "./components/cart-page";
import CheckoutPage from "./components/checkout-page";

const Calender = ( props ) => {
	const [ calender ] = useCalender( props );

	if ( calender.app_type === "item-page" ){
		return(
			<ItemPage />
		);
	} else if( calender.app_type === "product-list" ) {
		return (
			<ProductList />
		);
	} else if ( calender.app_type === 'cart-page' ) {
		return (
			<CartPage />
		)
	} else if ( calender.app_type === 'checkout-page' ) {
		return (
			<CheckoutPage />
		)
	}
}

export default Calender;
