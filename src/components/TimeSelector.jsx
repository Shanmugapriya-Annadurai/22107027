import React from "react";

export default function TimeSelector({ value, onChange }) {
  return (
    <select value={value} onChange={e => onChange(Number(e.target.value))}>
      <option value={5}>Last 5 mins</option>
      <option value={15}>Last 15 mins</option>
      <option value={30}>Last 30 mins</option>
      <option value={60}>Last 60 mins</option>
    </select>
  );
}