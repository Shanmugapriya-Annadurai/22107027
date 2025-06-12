import { getAccessToken } from "./auth";

export async function fetchStockPrices(stockSymbol, minutes) {
  const token = await getAccessToken();
  const response = await fetch(`http://20.244.56.144/evaluation-service/stocks/${stockSymbol}/prices?duration=${minutes}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.json();
}

export async function fetchAllStockSymbols() {
  const token = await getAccessToken();
  const response = await fetch("http://20.244.56.144/evaluation-service/stocks", {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.json();
}