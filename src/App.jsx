import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StockPage from "./pages/StockPage";
import HeatmapPage from "./pages/HeatmapPage";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Stock</Link> | <Link to="/heatmap">Heatmap</Link>
      </nav>
      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route path="/heatmap" element={<HeatmapPage />} />
      </Routes>
    </Router>
  );
}