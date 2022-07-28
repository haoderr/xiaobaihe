import axios from "axios";

export const getGamelistRequest = () => 
    axios.get('https://www.fastmock.site/mock/512b4836dc5819d9a02a2eb6c8bd971a/xiaoheihe/gamelist')
export const getGameRecommendListRequest = () => 
    axios.get('https://www.fastmock.site/mock/512b4836dc5819d9a02a2eb6c8bd971a/xiaoheihe/gamerecommendlist')
export const getHotSearchListRequest = () => 
    axios.get('https://www.fastmock.site/mock/512b4836dc5819d9a02a2eb6c8bd971a/xiaoheihe/hotsearchlist')