import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const initialState = {
	app_type: "",
	loading: true,
	cart_session: null,
	can_submit: false,
	items: [],
	selected: {
		item: {},
		dd: [],
		heading: "",
		delivery_method: 1,
		in_stock: false,
		price: 0,
		units: { avail: 0, value: 0 },
		date_from: moment().format( "YYYY-MM-DD" ),
		date_to: moment().format( "YYYY-MM-DD" ),
		pick_time: { p_range: [], p_value: "" },
		drop_time: { d_range: [], d_value: "" }
	}
};
export const item_list_calender = createSlice({
	name: "item_list_calender",
	initialState,
	reducers: {
		setAppType: ( state, actions ) => {
			let { payload } = actions;
			state.app_type = payload;
		},
		setLoading: (state , actions) => {
			let { payload } = actions;
			state.loading = payload;
			return state;
		},
		setCanSubmit: (state, actions ) => {
			let { payload } = actions;
			state.can_submit = payload;
			return state;
		},
		setCartSession: (state, actions) => {
			let { payload } = actions;
			state.cart_session = payload;
		},
		setCartItem: (state, actions) => {
			let { payload } = actions;

			state.selected.price = payload.price;
			state.selected.units.value = payload.units;
			state.selected.heading = payload.duration;
			state.selected.date_from = payload.from;
			state.selected.date_to = payload.to;
			state.selected.pick_time.p_value = payload.pick;
			state.selected.drop_time.d_value = payload.drop;
			state.selected.delivery_method = +payload.delivery_method;
			state.selected.item.deliverable = payload.deliverable;
		},
		setItemListData: (state, actions) => {
			let { payload } = actions;
			return Object.assign(state, payload);
		},
		setSelectedItem: (state, actions) => {
			let { payload } = actions;
			state.selected.item = payload.item[0];
			state.selected.dd = payload.disabled;
			state.selected.price = payload.price;
			state.selected.units.avail = payload.units;
			state.selected.units.value = payload.units > 0 ? 1 : 0;
			state.selected.pick_time.p_range = [
				payload.time[0]["pickup_time_from"],
				payload.time[0]["pickup_time_to"],
			];
			state.selected.pick_time.p_value = payload.time[0]["pickup_time_from"];
			state.selected.drop_time.d_range = [
				payload.time[0]["drop_time_from"],
				payload.time[0]["drop_time_to"],
			];
			state.selected.drop_time.d_value = payload.time[0]["drop_time_to"];
			state.selected.in_stock = payload.units > 0;
			state.selected.heading = payload.heading;
			state.selected.units.value = payload.units >= 1 ? 1 : 0;
		},
		setRental: (state, actions) => {
			let { payload } = actions;

			if (typeof payload.length === "undefined") {
				state.selected.price = payload.price;
				state.selected.units.avail = payload.units;
				state.selected.units.value = ( state.selected.units.value > payload.units ) ? payload.units : state.selected.units.value;
				state.selected.heading = payload.heading;
			} else {
				state.selected.pick_time.p_value = state.selected.pick_time.p_range[0];
				state.selected.drop_time.d_value = state.selected.drop_time.d_range[1];
				state.selected.heading = payload;
			}
		},
		setAmount: (state, actions) => {
			let { payload } = actions;
			state.selected.price = payload;
			return state;
		},
		setUnits: (state , actions) => {
			let { payload } = actions;
			state.selected.units.value = payload;
			return state;
		},
		setStock: (state , actions) => {
			let { payload } = actions;
			state.selected.in_stock = payload;
			return state;
		},
		setDateFrom: (state , actions) => {
			let { payload } = actions;
			state.selected.date_from = payload;
			return state;
		},
		setDateTo: (state , actions) => {
			let { payload } = actions;
			state.selected.date_to = payload;
			return state;
		},
		setPickTime: (state , actions) => {
			let { payload } = actions;
			state.selected.pick_time.p_range = payload;
			return state;
		},
		setPickTimeValue: (state , actions) => {
			let { payload } = actions;
			state.selected.pick_time.p_value = payload;
			return state;
		},
		setDropTime: (state , actions) => {
			let { payload } = actions;
			state.selected.drop_time.d_range = payload;
			return state;
		},
		setDropTimeValue: (state , actions) => {
			let { payload } = actions;
			state.selected.drop_time.d_value = payload;
			return state;
		},
		setDeliveryMethod: (state , actions) => {
			let { payload } = actions;
			state.selected.delivery_method = +payload;
			return state;
		},
		resetStore: (state, actions) => {
			state = initialState;
			return state;
		}
	}
});

export const {
	setAppType,
	setLoading,
	setCanSubmit,
	setCartSession,
	setCartItem,
	setItemListData,
	setSelectedItem,
	setRental,
	setAmount,
	setDateFrom,
	setDateTo,
	setDropTime,
	setDropTimeValue,
	setPickTime,
	setPickTimeValue,
	setStock,
	setUnits,
	setDeliveryMethod,
	resetStore
} = item_list_calender.actions;

export default item_list_calender.reducer;
