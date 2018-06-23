export const getCurrentSemester = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return currentMonth < 8 ? `01/${currentYear}` : `08/${currentYear}`;
};
