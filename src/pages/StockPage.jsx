import React, { useState } from "react";
import StockChart from "../components/StockChart";
import TimeSelector from "../components/TimeSelector";

export default function StockPage() {
  const [minutes, setMinutes] = useState(15);
  const stock = "TCS"; // or dynamic based on route

  return (
    <div>
      <h1>Stock Price Chart</h1>
      <TimeSelector value={minutes} onChange={setMinutes} />
      <StockChart stock={stock} minutes={minutes} />
    </div>
  );
}