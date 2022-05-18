import { useSelector, useDispatch } from "react-redux";
import { setCartSession } from "../features/calender.slice";

// customer_input = { key: value }
export function useCalender( props = {} ) {
	const { item, sessionId } = props;

	const calender = useSelector( state => state.item_list_calender );
	const dispatch = useDispatch();

	if ( !!item && !!sessionId ) {
		if ( !calender.cart_session ) {
			dispatch( setCartSession({
				item_id: item,
				session_id: sessionId
			}))
		}
	}

	return [ calender, dispatch ];
}
