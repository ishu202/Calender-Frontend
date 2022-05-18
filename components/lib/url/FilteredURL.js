import { compact , map , filter , head , split } from "lodash";

const FilterUrl = () => {
	let addr = compact(split(window.location.href, "/"));
	let item_indx = addr.indexOf("item");
	let item = addr.slice(++item_indx).join("-");

	if (parseInt(item)){
		return +item;
	}else if(!item_indx){
		return null;
	}
	return item;
};

export default FilterUrl;
