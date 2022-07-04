export const getPercentage = (x: number, y: number): string[] => {
  const total = x + y;
  const xPercantage = (x / total) * 100;
  const yPercantage = (y / total) * 100;
  return [`${xPercantage.toFixed(1)}%`, `${yPercantage.toFixed(1)}%`];
};
