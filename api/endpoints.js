const url = () => {
  if (process.env.WEBSITE_ROOT === ""){
    return `${process.env.WEBSITE_DOMAIN}/`;
  }
  return `${process.env.WEBSITE_DOMAIN}${process.env.WEBSITE_ROOT}/`;
}

export const calender = url() + "calender/get?item_id=";
export const cartUrl = `${process.env.API_URL}/cart`; // expects cart_session_id
export const toolsUrl = `${process.env.API_URL}/tool`; //defailt all tools //
export const itemUrl = url() + "home/getItemInfo/"; // expects id /{:id}
export const u_datesUrl = url() + "home/unavailable_tools_date/"; //{:id}/PAYMENT //{:id}/REFUND
export const item_settingUrl = url() + "home/get_item_settings_react/"; //{:id}/USERDD //{:id}/TIMES

export const amountUrl = url() + "home/update_price_item_react/"; //${Id}/${Start}/${End}/${Unit}

export const item_id_url = `${process.env.API_URL}/item_search`
