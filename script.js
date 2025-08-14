//  Letter Opening
function openLetter() {
  document.getElementById("envelope").style.display = "none";
  document.getElementById("letter").classList.remove("hidden");
}

// Days Together Counter
function calculateTimeTogether() {
  const startDate = new Date(2024, 11, 4);
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();
  let days = today.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    // Get days in previous month
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Total months including years converted to months
  const totalMonths = years * 12 + months;

  return { months: totalMonths, days: days };
}

// Update page text
const dayCountEl = document.getElementById("dayCount");
if (dayCountEl) {
  const { months, days } = calculateTimeTogether();
  dayCountEl.innerText = `${months} month${months !== 1 ? 's' : ''} and ${days} day${days !== 1 ? 's' : ''}`;
}