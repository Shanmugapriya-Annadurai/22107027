import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchStockPrices } from "../api/stockService";
import { average } from "../utils/correlationUtils";

export default function StockChart({ stock, minutes }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchStockPrices(stock, minutes).then(setData);
  }, [stock, minutes]);

  const avg = average(data.map(d => d.price || 0));
  const chartData = {
    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: `${stock} Price`,
        data: data.map(d => d.price),
        borderColor: "#4bc0c0",
        fill: false
      },
      {
        label: `Average (${avg.toFixed(2)})`,
        data: new Array(data.length).fill(avg),
        borderColor: "#ff6384",
        borderDash: [5, 5],
        fill: false
      }
    ]
  };

  return <Line data={chartData} />;
}