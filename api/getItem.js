import { item_id_url, itemUrl , cartUrl, toolsUrl , calender } from "./endpoints";

export function getItem(id) {
  if (typeof id === "string") {

    return fetch(item_id_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ slug: id })
    }).then((response) => response.json()).then((data) => {
		return fetch(calender + data.data.tool_data[0]['id'] ).then(response => response.json());
	});

  } else if (typeof id === "number") {

    return fetch(calender + id).then(response => response.json());
  }
}

export function getItems(){
  return fetch(toolsUrl).then(response => response.json())
}

export function getCartItem( item_id, session_id ) {
	return fetch( `${ cartUrl }/${ session_id }` )
		.then( response => response.json() )
		.then(({ data: cartData }) => {
			return cartData.response.cart.find( item => item.id == item_id );
		});
}
