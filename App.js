import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Calender from "./Calender";
import "./assets/index.css";

const App = ( props ) => {
	return (
		<React.StrictMode>
			<Provider store={ store }>
				<Calender { ...props } />
			</Provider>
		</React.StrictMode>
	);
}

export default App;
