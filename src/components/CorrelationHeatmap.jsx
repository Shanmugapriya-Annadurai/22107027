import React, { useEffect, useState } from "react";
import { fetchAllStockSymbols, fetchStockPrices } from "../api/stockService";
import { pearsonCorrelation, average, stdDeviation } from "../utils/correlationUtils";

export default function CorrelationHeatmap({ minutes }) {
  const [symbols, setSymbols] = useState([]);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    fetchAllStockSymbols().then(setSymbols);
  }, []);

  useEffect(() => {
    async function loadPrices() {
      const priceData = {};
      for (let symbol of symbols) {
        priceData[symbol] = (await fetchStockPrices(symbol, minutes)).map(d => d.price);
      }
      setPrices(priceData);
    }
    if (symbols.length) loadPrices();
  }, [symbols, minutes]);

  const correlations = symbols.map(row =>
    symbols.map(col =>
      prices[row] && prices[col] ? pearsonCorrelation(prices[row], prices[col]) : 0
    )
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            {symbols.map(s => <th key={s}>{s}</th>)}
          </tr>
        </thead>
        <tbody>
          {symbols.map((row, i) => (
            <tr key={row}>
              <td>{row}</td>
              {symbols.map((col, j) => (
                <td
                  key={col}
                  title={`Corr: ${correlations[i][j].toFixed(2)}\nAvg: ${average(prices[col] || []).toFixed(2)}\nStd: ${stdDeviation(prices[col] || []).toFixed(2)}`}
                  style={{ backgroundColor: `rgba(255, 0, 0, ${Math.abs(correlations[i][j])})` }}>
                  {correlations[i][j].toFixed(2)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
