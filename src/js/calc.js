function payOffYear(current, term) {
  current = Number(current);
  term = Number(term);
  return current + term;
}

function setCurrentDate() {
  const currentDate = new Date();
  document.getElementById('start-day').value = currentDate.getDate();
  document.getElementById('start-month').selectedIndex = currentDate.getMonth();
  document.getElementById('start-year').value = currentDate.getFullYear();
}

function calc() {
  let term = Number(document.getElementById('loan-term').value);

  let date = document.getElementById('start-day').value;
  let fullDate = new Date();
  let locale = 'en-us';
  // let locale = 'ru-ru';
  let monthLong = fullDate.toLocaleString(locale, { month: 'long' });
  let month = document.getElementById('start-month').selectedIndex;
  let currentYear = document.getElementById('start-year').value;
  let year = payOffYear(currentYear, term);

  document.getElementById('pay-off-date').innerHTML = date + ' ' + monthLong + ' ' + year;
}
