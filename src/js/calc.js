function payOffDate(startDate, term) {
  return 34;
}

function setCurrentDate() {
  const currentDate = new Date();
  document.getElementById('start-day').value = currentDate.getDate();
  document.getElementById('start-month').selectedIndex = currentDate.getMonth();
  document.getElementById('start-year').value = currentDate.getFullYear();
}
