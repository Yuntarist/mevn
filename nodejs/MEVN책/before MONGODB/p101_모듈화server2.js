import fetch from "node-fetch";
const url = "https://api.upbit.com/v1/ticker?markets=BTC-ETH";
async function request(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}
async function view() {
  const dataList = await request(url);
  // console.log(dataList);
  console.log("ETH:" + dataList[0].trade_price + "BTC");
}
view();
