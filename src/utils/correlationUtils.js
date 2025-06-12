export function pearsonCorrelation(x, y) {
  const n = x.length;
  const avgX = x.reduce((a, b) => a + b, 0) / n;
  const avgY = y.reduce((a, b) => a + b, 0) / n;
  const numerator = x.map((v, i) => (v - avgX) * (y[i] - avgY)).reduce((a, b) => a + b);
  const denomX = Math.sqrt(x.map(v => (v - avgX) ** 2).reduce((a, b) => a + b));
  const denomY = Math.sqrt(y.map(v => (v - avgY) ** 2).reduce((a, b) => a + b));
  return numerator / (denomX * denomY);
}

export function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function stdDeviation(arr) {
  const avg = average(arr);
  return Math.sqrt(arr.map(val => (val - avg) ** 2).reduce((a, b) => a + b) / arr.length);
}