import { calender } from "./endpoints";
import FilterUrl from "../components/lib/url/FilteredURL";
import { getItem , getItems, getCartItem } from "./getItem";
import Formatter from "./formatter"


export async function getItemProps( state ){
  let { item_list_calender: { selected: {
    item: { id } ,
    date_from,
    date_to,
    units: { value } ,
    pick_time: { p_range , p_value } ,
    drop_time: { d_range , d_value }
  } } } = state;
  
  let pick_time = ( !!p_value ) ? Formatter.format_time( p_value ) : Formatter.format_time( p_range[0] );
  let drop_time = ( !!d_value ) ? Formatter.format_time( d_value ) : Formatter.format_time( d_range[1] );

  let url = `${calender}${id}&from=${date_from} ${pick_time}&to=${date_to} ${drop_time}&units=${value}`;

  if ( id && date_from && pick_time && date_to && drop_time ) {
	  return fetch( encodeURI( url ) ).then(( data => data.json() ) );
  }

  return false;
}

export async function getTool(app_type, cart_session = null){
  if ( app_type === "product-list" || app_type === 'checkout-page' ){
    return getItems();
  } else if( app_type === "item-page"){
    let slug = document.querySelector('div[data-controller="calender"]').dataset.calenderItemIdValue;
    return getItem(slug);
  } else if ( app_type === 'cart-page' ) {
	  if ( !!cart_session ) {
		  let { item_id, session_id } = cart_session;

		  return Promise.all([
			  getItem( +item_id ),
			  getCartItem( +item_id, session_id )
		  ])
	  }
  }
}

export function setCartModalDisabled({ payload }) {
	const cartModal = document.querySelector( '.c-cart-modal' );

	if ( cartModal ) {
		const submitBtn = cartModal.querySelector( 'button[type="submit"]');

		if ( submitBtn ) submitBtn.disabled = payload;
	}
}
