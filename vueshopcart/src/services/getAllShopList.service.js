import ajax from "./ajax";

export const getAllShopList = () => ajax.get("/api/shopList.json");
