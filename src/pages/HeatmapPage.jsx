import React, { useState } from "react";
import CorrelationHeatmap from "../components/CorrelationHeatmap";
import TimeSelector from "../components/TimeSelector";

export default function HeatmapPage() {
  const [minutes, setMinutes] = useState(15);
  return (
    <div>
      <h1>Stock Correlation Heatmap</h1>
      <TimeSelector value={minutes} onChange={setMinutes} />
      <CorrelationHeatmap minutes={minutes} />
    </div>
  );
}