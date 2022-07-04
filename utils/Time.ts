export const getTimeStr = (date: Date): string => {
  const now = new Date();
  const diffTime = Math.abs(date.getTime() - now.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.ceil(diffDays / 30);
  const diffYears = Math.ceil(diffMonths / 12);

  if (diffDays === 1) return `${diffDays} day ago in`;
  if (diffDays < 30) return `${diffDays} days ago in`;
  if (diffDays === 30) return `${diffMonths} month ago in`;
  if (diffDays < 365) return `${diffMonths} months ago in`;
  if (diffDays === 365) return `${diffYears} year ago in`;

  return `${diffYears} years ago in`;
};
